// hooks/useChatbot.ts
import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import type { Message, FormData, BotResponse, ChatState } from '../types/chatbot';
import { 
  validateForm, 
  sanitizeFormData, 
  trackChatEvent, 
  ChatEvents,
  handleApiError,
  announceToScreenReader
} from '../utils/chatbot/chatbot';

interface UseChatbotReturn {
  messages: Message[];
  userInput: string;
  setUserInput: (input: string) => void;
  isTyping: boolean;
  showForm: boolean;
  formData: FormData;
  isSubmitting: boolean;
  error: string | null;
  sendMessage: () => Promise<void>;
  sendQuickReply: (reply: string) => Promise<void>;
  updateFormData: (field: keyof FormData, value: string) => void;
  submitForm: () => Promise<void>;
  clearError: () => void;
  resetChat: () => void;
}

export const useChatbot = (): UseChatbotReturn => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: ''
  });

  const chatState = useRef<ChatState>('greeting');

  // Add bot message
  const addBotMessage = useCallback((text: string, quickReplies?: string[]): void => {
    const message: Message = {
      type: 'bot',
      text,
      timestamp: new Date(),
      quickReplies
    };
    
    setMessages(prev => [...prev, message]);
    announceToScreenReader(`Bot says: ${text}`);
  }, []);

  // Add user message
  const addUserMessage = useCallback((text: string): void => {
    const message: Message = {
      type: 'user',
      text,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, message]);
    trackChatEvent(ChatEvents.MESSAGE_SENT, { message: text });
  }, []);

  // Show typing indicator
  const showTyping = useCallback((duration: number = 1500): Promise<void> => {
    setIsTyping(true);
    return new Promise(resolve => {
      setTimeout(() => {
        setIsTyping(false);
        resolve();
      }, duration);
    });
  }, []);

  // Generate bot response
  const getBotResponse = useCallback((userMessage: string): BotResponse => {
    const message = userMessage.toLowerCase();
    
    // Solar Installation responses
    if (message.includes('solar') || message.includes('installation') || message.includes('install')) {
      return {
        text: "We provide complete solar solutions for residential, commercial & industrial needs. Our services include rooftop and ground-mounted systems with 25+ years warranty. Would you like a free consultation?",
        quickReplies: ["Yes, Get Quote", "Tell me about costs", "Maintenance services"]
      };
    }
    
    // Cost & Savings responses
    if (message.includes('cost') || message.includes('price') || message.includes('saving') || message.includes('roi')) {
      return {
        text: "Solar systems typically pay for themselves in 3-5 years with 80% savings on electricity bills. Costs vary based on system size and location. Let me connect you with our experts for accurate pricing.",
        quickReplies: ["Get Quote", "Subsidies Available", "How it works"]
      };
    }
    
    // Subsidies responses
    if (message.includes('subsidy') || message.includes('subsidies') || message.includes('government')) {
      return {
        text: "Yes! Government subsidies up to 40% available for residential systems and accelerated depreciation for commercial installations. Our team handles all subsidy paperwork for you.",
        quickReplies: ["Apply for Subsidy", "Get Quote", "Commercial Solutions"]
      };
    }
    
    // Maintenance responses
    if (message.includes('maintenance') || message.includes('service') || message.includes('repair')) {
      return {
        text: "We offer comprehensive O&M services including cleaning, monitoring, and repairs. Our preventive maintenance ensures maximum efficiency and extends system life.",
        quickReplies: ["Maintenance Plans", "Get Quote", "Emergency Service"]
      };
    }
    
    // Commercial solutions
    if (message.includes('commercial') || message.includes('business') || message.includes('industrial')) {
      return {
        text: "Our commercial solar solutions help businesses reduce operational costs by up to 80%. We handle everything from design to commissioning with minimal disruption to your operations.",
        quickReplies: ["Get Commercial Quote", "Case Studies", "Financing Options"]
      };
    }
    
    // Quote/consultation requests
    if (message.includes('quote') || message.includes('consultation') || message.includes('yes')) {
      chatState.current = 'form_collection';
      return {
        text: "Great! I'll need some details to connect you with our solar experts. This will just take a minute.",
        showForm: true
      };
    }
    
    // Default response
    return {
      text: "I can help you with solar installations, costs, subsidies, and maintenance services. What specific information do you need?",
      quickReplies: ["Solar Installation", "Cost & Savings", "Subsidies", "Maintenance"]
    };
  }, []);

  // Send message
  const sendMessage = useCallback(async (): Promise<void> => {
    if (!userInput.trim()) return;
    
    const message = userInput;
    setUserInput('');
    setError(null);
    addUserMessage(message);
    
    await showTyping();
    
    const response = getBotResponse(message);
    
    if (response.showForm) {
      setShowForm(true);
      trackChatEvent(ChatEvents.FORM_STARTED);
    }
    
    addBotMessage(response.text, response.quickReplies);
  }, [userInput, addUserMessage, addBotMessage, showTyping, getBotResponse]);

  // Send quick reply
  const sendQuickReply = useCallback(async (reply: string): Promise<void> => {
    setError(null);
    addUserMessage(reply);
    trackChatEvent(ChatEvents.QUICK_REPLY_CLICKED, { reply });
    
    await showTyping();
    
    const response = getBotResponse(reply);
    
    if (response.showForm) {
      setShowForm(true);
      trackChatEvent(ChatEvents.FORM_STARTED);
    }
    
    addBotMessage(response.text, response.quickReplies);
  }, [addUserMessage, addBotMessage, showTyping, getBotResponse]);

  // Update form data
  const updateFormData = useCallback((field: keyof FormData, value: string): void => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setError(null);
  }, []);

  // Submit form
  const submitForm = useCallback(async (): Promise<void> => {
    setError(null);
    
    // Validate form
    const validation = validateForm(formData);
    if (!validation.isValid) {
      setError(validation.errors[0]);
      trackChatEvent(ChatEvents.FORM_ERROR, { errors: validation.errors });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const sanitizedData = sanitizeFormData(formData);
      
      const response = await axios.post('/api/submit-lead', {
        ...sanitizedData,
        source: 'Raynex AI Chatbot'
      });

      if (response.data.success) {
        setShowForm(false);
        chatState.current = 'completed';
        
        await showTyping();
        addBotMessage("Thanks! Our solar experts will contact you within 24 hours. Have a great day! ☀️");
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          location: '',
          message: ''
        });
        
        trackChatEvent(ChatEvents.FORM_SUBMITTED, { 
          name: sanitizedData.name,
          email: sanitizedData.email
        });
      } else {
        throw new Error(response.data.error || 'Failed to submit');
      }
    } catch (error: any) {
      const errorMessage = handleApiError(error);
      setError(errorMessage);
      trackChatEvent(ChatEvents.FORM_ERROR, { error: errorMessage });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, addBotMessage, showTyping]);

  // Clear error
  const clearError = useCallback((): void => {
    setError(null);
  }, []);

  // Reset chat
  const resetChat = useCallback((): void => {
    setMessages([]);
    setUserInput('');
    setIsTyping(false);
    setShowForm(false);
    setIsSubmitting(false);
    setError(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      location: '',
      message: ''
    });
    chatState.current = 'greeting';
  }, []);

  // Initial greeting
  useEffect(() => {
    if (messages.length === 0) {
      const timer = setTimeout(() => {
        addBotMessage("Hi 👋 I'm Raynex AI Assistant. How can I help you today?", [
          "Solar Installation",
          "Cost & Savings",
          "Subsidies",
          "Maintenance"
        ]);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [messages.length, addBotMessage]);

  return {
    messages,
    userInput,
    setUserInput,
    isTyping,
    showForm,
    formData,
    isSubmitting,
    error,
    sendMessage,
    sendQuickReply,
    updateFormData,
    submitForm,
    clearError,
    resetChat
  };
};