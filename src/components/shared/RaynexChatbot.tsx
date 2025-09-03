// components/RaynexChatbot.tsx
import React, { useState, useEffect, useRef } from 'react';
import axios, { AxiosResponse } from 'axios';
import styles from './RaynexChatbot.module.css';

// Type definitions
interface Message {
  type: 'bot' | 'user';
  text: string;
  timestamp: Date;
  quickReplies?: string[];
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  location: string;
  message: string;
}

interface BotResponse {
  text: string;
  quickReplies?: string[];
  showForm?: boolean;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

type ChatState = 'greeting' | 'conversation' | 'form_collection' | 'completed';

const RaynexChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: ''
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatState = useRef<ChatState>('greeting');

  // Auto-scroll to bottom
  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initial greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage("Hi 👋 I'm Raynex AI Assistant. How can I help you today?", [
          "Solar Installation",
          "Cost & Savings",
          "Subsidies",
          "Maintenance"
        ]);
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string, quickReplies?: string[]): void => {
    setMessages(prev => [...prev, {
      type: 'bot',
      text,
      timestamp: new Date(),
      quickReplies
    }]);
  };

  const addUserMessage = (text: string): void => {
    setMessages(prev => [...prev, {
      type: 'user',
      text,
      timestamp: new Date()
    }]);
  };

  const showTyping = (duration: number = 1500): Promise<void> => {
    setIsTyping(true);
    return new Promise(resolve => {
      setTimeout(() => {
        setIsTyping(false);
        resolve();
      }, duration);
    });
  };

  const getBotResponse = (userMessage: string): BotResponse => {
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
  };

  const handleSendMessage = async (): Promise<void> => {
    if (!userInput.trim()) return;
    
    const message = userInput;
    setUserInput('');
    addUserMessage(message);
    
    await showTyping();
    
    const response = getBotResponse(message);
    
    if (response.showForm) {
      setShowForm(true);
    }
    
    addBotMessage(response.text, response.quickReplies);
  };

  const handleQuickReply = async (reply: string): Promise<void> => {
    addUserMessage(reply);
    await showTyping();
    
    const response = getBotResponse(reply);
    
    if (response.showForm) {
      setShowForm(true);
    }
    
    addBotMessage(response.text, response.quickReplies);
  };

  const handleFormChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Validate phone
    const phoneRegex = /^[\+]?[1-9]?[0-9]{7,14}$/;
    if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      alert('Please enter a valid phone number');
      return;
    }

    try {
      // Show loading state (optional)
      const submitBtn = document.querySelector('button[type="submit"]') as HTMLButtonElement;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
      }

      // Prepare data
      const leadData = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim().toLowerCase(),
        location: formData.location?.trim() || '',
        message: formData.message?.trim() || '',
        source: 'Raynex AI Chatbot',
        timestamp: new Date().toISOString()
      };

      // Get API URL from environment
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://raynexps.com/api/submit-lead.php';
      
      if (!API_URL) {
        throw new Error('API URL not configured. Please check environment variables.');
      }

      console.log('Submitting lead to:', API_URL);
      console.log('Lead data:', leadData);

      // Submit to Hostinger API
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(leadData)
      });

      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('API Response:', result);

      if (result.success) {
        // Success! Show confirmation
        setShowForm(false);
        chatState.current = 'completed';
        await showTyping(1000);
        
        addBotMessage(
          "Perfect! 🎉 Your information has been submitted successfully. Our solar experts will contact you within 24 hours. Thank you for choosing Raynex Power Solutions! ☀️"
        );
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          location: '',
          message: ''
        });

        // Track successful submission
        if (typeof window !== 'undefined') {
          // Google Analytics tracking
          if ((window as any).gtag) {
            (window as any).gtag('event', 'form_submit', {
              event_category: 'engagement',
              event_label: 'raynex_chatbot_lead',
              value: 1
            });
          }
          
          // Custom tracking
          console.log('✅ Lead submitted successfully:', {
            name: leadData.name,
            email: leadData.email,
            timestamp: leadData.timestamp
          });
        }
      } else {
        throw new Error(result.error || 'Failed to submit lead');
      }

    } catch (error: any) {
      console.error('❌ Form submission error:', error);
      
      // Show user-friendly error message
      let errorMessage = 'Something went wrong. Please try again.';
      
      if (error.message.includes('fetch')) {
        errorMessage = 'Network error. Please check your internet connection and try again.';
      } else if (error.message.includes('HTTP error')) {
        errorMessage = 'Server error. Please try again in a few moments.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      // Show error to user
      alert(`⚠️ ${errorMessage}\n\nIf the problem persists, please contact us directly at:\n📞 +91-9033232512\n📧 info@raynexps.com`);
      
      // Add error message to chat
      await showTyping(800);
      addBotMessage(
        "I apologize, but there was a technical issue submitting your information. Please try again, or contact us directly at +91-XXXXXXXXXX. We're here to help! 🙏"
      );

    } finally {
      // Reset button state
      const submitBtn = document.querySelector('button[type="submit"]') as HTMLButtonElement;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Get Free Consultation';
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button 
        className={`${styles.chatToggle} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? '×' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={styles.chatWindow} role="dialog" aria-label="Raynex AI Assistant">
          {/* Header */}
          <div className={styles.chatHeader}>
            <div className={styles.headerContent}>
              <div className={styles.avatar}>⚡</div>
              <div>
                <h3>Raynex AI Assistant</h3>
                <p>Solar Power Solutions</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className={styles.messagesContainer}>
            {messages.map((msg, index) => (
              <div key={index} className={`${styles.message} ${styles[msg.type]}`}>
                {msg.type === 'bot' && (
                  <div className={styles.botAvatar}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" className={styles.avatarsvg} data-name="Layer 1" viewBox="0 0 802.469 802.469">
                  <defs>
                      </defs>
                      <title>Raynex Icon</title>
                      <g id="Layer1001"><path id="path6" className={styles.cls1} d="M534.974,393.85c-1.13,4.5-.607,9.18-1.388,13.581-.4,2.272-.854,3.765-1.117,6.24a34.971,34.971,0,0,1-1.192,6.414c-.529,1.959-.466,4.375-1.107,6.27a46.854,46.854,0,0,0-1.412,6.155c-.264,1.137-.729,1.341-.976,2.7-.2,1.115-.36,2.2-.645,3.249a26.315,26.315,0,0,0-1.009,2.718,10.588,10.588,0,0,1-.764,3.1c-1.055,2.1-1.034,3.622-2.022,5.368a12.325,12.325,0,0,0-.856,2.839c-.366,1.166-.87,1.282-1.253,2.635a6.455,6.455,0,0,1-1.069,2.611,28.463,28.463,0,0,0-1.12,2.764,7.073,7.073,0,0,0-1.228,2.467c-.443,1.521-.912,1.167-1.417,2.471a6.86,6.86,0,0,1-1.281,2.415c-.6.894-.534,1.528-1.289,2.4-.809.93-.7,1.5-1.389,2.3-.757.89-.96,1.7-1.5,2.385-.422.532-.414.224-.867.887l-1.689,2.195a13.1,13.1,0,0,1-1.634,2.053c-.32.407-.415.761-.777,1.169-.392.441-.645.522-.982.961-.468.609-.163.488-.891,1.05l-1.918,1.781c-.655.479-.4.618-1.9,1.782-.569.442-.4.521-.851.905l-4.255,3.322a10.208,10.208,0,0,1-1.23.709l-2.3,1.59c-1.066.647-.814.9-2.215,1.479-.892.371-3.543,2.43-4.648,2.928-1.57.707-2.17,1.359-3.523,1.916a3.7,3.7,0,0,0-1.2.744,14.569,14.569,0,0,1-2.711,1.18,9.372,9.372,0,0,1-2.417,1.274c-1.5.449-1.465.884-2.583,1.314a11.407,11.407,0,0,0-2.681,1,8.552,8.552,0,0,1-2.8,1.073c-1.058.307-1.556.857-2.531,1.172a17.67,17.67,0,0,0-2.882.807c-1.987,1.018-3.705.944-5.668,1.905-1.666.816-4.086.793-5.975,1.607-2.014.867-4.32.621-6.261,1.309a25.4,25.4,0,0,1-6.184,1.2c-2.374.2-4.145.965-6.409,1.18-2.409.228-4.707.3-7.171.46-2.415.158-4.47.464-6.786.736l-.027,1.673c2.284.265,4.306.568,6.64.725,2.453.165,4.765.234,7.154.454,2.251.207,3.992.932,6.221,1.157a23.236,23.236,0,0,1,6.444,1.154c1.877.709,4.274.54,6.13,1.245,2.124.807,5.155,1.282,5.921,1.67,1.877.951,3.9.9,5.685,1.887a11.006,11.006,0,0,0,2.855.846c1.289.323,1.523.839,2.68,1.19,3.036.921,2.752,1.215,5.355,2.033,1.164.366,1.22.879,2.428,1.269a6.822,6.822,0,0,1,2.642,1.242c.748.5,1.789.651,2.567,1.125.447.272.641.553,1.137.808.461.237.923.321,1.373.563,1.116.6,3.462,2.235,4.755,2.836a21.6,21.6,0,0,1,2.233,1.456,8.1,8.1,0,0,1,1.161.578c.475.334.56.55,1.063.887l3.418,2.213c.679.413.447.484,1,.948l2.1,1.591a21.863,21.863,0,0,1,2.136,1.751c.321.313.637.4,1.015.735.608.531.342.6.869,1.071s.6.238,1.082.868l6.847,8.11c.437.846.251.5.846,1.1.632.631.772,1.56,1.4,2.293.679.795.959,1.649,1.445,2.245a7.236,7.236,0,0,1,1.317,2.373c.476,1.071.833.945,1.4,2.49.536,1.455,1,1.388,1.384,2.311.564,1.352.284,1.326,1.145,2.541a15.654,15.654,0,0,1,1.05,2.642c.56,1.182.772.8,1.249,2.627a9.742,9.742,0,0,0,1.138,2.57c.431.926.446,2.023.9,2.979a8.073,8.073,0,0,1,1.077,2.617c.523,2.434,1.362,3.262,1.78,5.808.247,1.5,1.07,2.414,1.655,5.722a10.72,10.72,0,0,0,.963,2.927c.7,1.885.468,4.275,1.308,6.258l2.461,12.519c.132,1.081.2,2.219.385,3.285.187,1.1.536,2.055.748,3.139.862,4.407.426,9.191,1.4,13.828,1.289.047,1.645.27,1.931-1.194.114-.583.168-1.069.236-1.689.377-3.486.281-7.015.8-10.492.343-2.3.744-2.778,1.167-6.434.118-1.022.2-2.249.372-3.284.184-1.124.568-1.972.835-3.058.464-1.878.46-4.534,1.1-6.282a51.412,51.412,0,0,0,1.39-6.186c.271-1.128.717-1.315.964-2.707.676-3.822,1.4-4.469,1.7-5.895a13.26,13.26,0,0,1,.737-3.156c.939-1.935,1.082-3.615,2.034-5.349a14.736,14.736,0,0,0,.86-2.821c.349-1.1.863-1.439,1.219-2.675a6.046,6.046,0,0,1,1.072-2.621c.644-.916.59-1.788,1.141-2.736a6.637,6.637,0,0,0,1.227-2.479c.461-1.6.924-1.193,1.418-2.459.144-.367.268-.9.458-1.291.322-.668.468-.563.849-1.1.666-.932.362-1.362,1.3-2.386.607-.66.789-1.646,1.351-2.34a5.376,5.376,0,0,0,.85-1.1,13.136,13.136,0,0,1,.661-1.263c.405-.517.416-.228.841-.927.805-1.323,1.139-1.324,1.665-2.215a4.271,4.271,0,0,1,.81-1.134c.644-.692.979-1.264,1.671-2.025a16.216,16.216,0,0,1,1.826-2.055c.815-.6,1.063-1.175,1.887-1.806.574-.439.343-.421.835-.92.417-.422.592-.357,1.131-.8l2.013-1.685c.932-.68,1.049-.956,2.192-1.692.686-.441.442-.472.885-.862.421-.37.777-.374,1.253-.692l2.276-1.611c.958-.522,1.193-1.046,2.188-1.5l7.017-4.258c.956-.628,1.486-.423,2.451-1.237,1.033-.87,1.563-.659,2.631-1.257a8.005,8.005,0,0,1,2.451-1.237c1.38-.431,1.59-.961,2.568-1.318,1.159-.423,1.6-.274,2.674-1.014a7.513,7.513,0,0,1,2.811-1.066c1.3-.357,1.507-.813,2.565-1.144a15.166,15.166,0,0,0,2.872-.815c1.805-.991,3.925-.986,5.665-1.913,1.788-.952,3.887-.667,5.935-1.647,1.9-.908,4.3-.62,6.253-1.321a24.054,24.054,0,0,1,6.207-1.167c2.362-.252,4.1-.907,6.411-1.161,4.69-.517,9.15-.517,13.874-1.218l.108-1.654c-2.374-.292-4.433-.584-6.82-.745-2.471-.167-4.752-.208-7.162-.474-2.3-.253-4.069-.911-6.411-1.16a26.164,26.164,0,0,1-6.362-1.211c-1.983-.654-4.461-.446-6.272-1.3-1.96-.93-4.027-.7-5.9-1.677a11.366,11.366,0,0,0-2.849-.845,10.448,10.448,0,0,1-2.816-1.066c-.866-.377-1.941-.508-2.881-.808-1.063-.339-1.591-.891-2.7-1.194a6.1,6.1,0,0,1-2.66-1.028c-.973-.69-1.891-.6-2.813-1.07a11.335,11.335,0,0,0-2.468-1.221,19.529,19.529,0,0,1-2.535-1.355,9.139,9.139,0,0,1-2.534-1.16,54.03,54.03,0,0,0-4.955-2.622,22.213,22.213,0,0,0-2.361-1.526l-4.563-3.013c-1.045-.562-1.262-1.077-2.148-1.546-1.6-.844-2.78-2.221-4.343-3.235a4.808,4.808,0,0,1-1.156-.786l-1.9-1.79a3.414,3.414,0,0,0-.986-.959c-.709-.542-.318-.374-.912-1.03-.416-.461-.624-.409-1.046-.9-.38-.444-.286-.554-.737-1.008-.58-.584-.517-.3-.983-.963l-2.427-3.2a13.742,13.742,0,0,1-.945-1c-.3-.416-.4-.842-.729-1.215a8.3,8.3,0,0,1-1.481-2.2l-1.532-2.359c-.394-.676-.511-.536-.861-1.087-.6-.949-.412-1.538-1.219-2.471-.83-.959-.667-1.607-1.311-2.575a7.556,7.556,0,0,1-1.25-2.435c-.423-1.248-.932-1.335-1.353-2.538a9.24,9.24,0,0,0-1.175-2.521,21.614,21.614,0,0,1-.97-2.912c-.428-1.036-.839-1.063-1.181-2.508a8.38,8.38,0,0,0-1.092-2.8,13.676,13.676,0,0,1-.772-2.918,24.629,24.629,0,0,0-1.175-2.712c-.36-1.059-.3-2.071-.63-3.064a18.071,18.071,0,0,1-1.027-2.861c-.19-.9-.341-2.23-.6-3.088a15.073,15.073,0,0,1-.985-2.9c-.193-1.1-.332-2.052-.528-3.167-.226-1.273-.679-1.755-.914-2.97a60.994,60.994,0,0,0-1.175-6.406,30.74,30.74,0,0,1-1.034-6.577c-.22-2.229-.966-4.105-1.183-6.4-.219-2.322-.27-4.69-.457-7.083-.388-4.944-.111-5.212-2.324-5.108Z" transform="translate(-133.717 -116.187)"/><g id="Layer1002"><path id="path8" className={styles.cls1} d="M672.19,226.181l-3.472-3.471L562.2,116.187V218.515q0,3.885.008,7.666c.211,78.583,4.635,124.555,71.3,191.22C681.878,465.776,740.366,491,808.569,491h18.368V380.928L716.844,270.837Z" transform="translate(-133.717 -116.187)"/><path id="path10" className={styles.cls1} d="M826.938,544.8c-79.038.184-125.089,4.423-191.967,71.3-48.375,48.375-73.6,106.863-73.6,175.068V808.66H672.32L781.536,699.445l45.4-45.4,2.724-2.724L936.186,544.8H833.856q-3.5,0-6.918.008Z" transform="translate(-133.717 -116.187)"/><path id="path12" className={styles.cls1} d="M437.893,617.441c-48.375-48.375-106.863-73.6-175.068-73.6h-18.37V653.907l110.1,110.1,44.655,44.655,3.471,3.472L509.2,918.656V816.325q0-3.885-.008-7.665c-.209-78.582-4.632-124.554-71.3-191.219Z" transform="translate(-133.717 -116.187)"/><path id="path14" className={styles.cls1} d="M236.045,491.8q4.268,0,8.41-.012c78.129-.239,124.021-4.842,190.477-71.3,48.375-48.375,73.6-106.863,73.6-175.066V226.181h-109.2L288.368,337.151l-43.913,43.913-4.214,4.214L133.717,491.8H236.045Z" transform="translate(-133.717 -116.187)"/></g></g></svg></div>
                )}
                <div className={styles.messageContent}>
                  <div className={styles.messageText}>{msg.text}</div>
                  {msg.quickReplies && (
                    <div className={styles.quickReplies}>
                      {msg.quickReplies.map((reply, idx) => (
                        <button
                          key={idx}
                          className={styles.quickReply}
                          onClick={() => handleQuickReply(reply)}
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className={`${styles.message} ${styles.bot}`}>
                <div className={styles.botAvatar}>
                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 802.469 802.469">
                  <defs>
                      </defs>
                      <title>Raynex Icon</title>
                      <g id="Layer1001"><path id="path6" className={styles.cls1} d="M534.974,393.85c-1.13,4.5-.607,9.18-1.388,13.581-.4,2.272-.854,3.765-1.117,6.24a34.971,34.971,0,0,1-1.192,6.414c-.529,1.959-.466,4.375-1.107,6.27a46.854,46.854,0,0,0-1.412,6.155c-.264,1.137-.729,1.341-.976,2.7-.2,1.115-.36,2.2-.645,3.249a26.315,26.315,0,0,0-1.009,2.718,10.588,10.588,0,0,1-.764,3.1c-1.055,2.1-1.034,3.622-2.022,5.368a12.325,12.325,0,0,0-.856,2.839c-.366,1.166-.87,1.282-1.253,2.635a6.455,6.455,0,0,1-1.069,2.611,28.463,28.463,0,0,0-1.12,2.764,7.073,7.073,0,0,0-1.228,2.467c-.443,1.521-.912,1.167-1.417,2.471a6.86,6.86,0,0,1-1.281,2.415c-.6.894-.534,1.528-1.289,2.4-.809.93-.7,1.5-1.389,2.3-.757.89-.96,1.7-1.5,2.385-.422.532-.414.224-.867.887l-1.689,2.195a13.1,13.1,0,0,1-1.634,2.053c-.32.407-.415.761-.777,1.169-.392.441-.645.522-.982.961-.468.609-.163.488-.891,1.05l-1.918,1.781c-.655.479-.4.618-1.9,1.782-.569.442-.4.521-.851.905l-4.255,3.322a10.208,10.208,0,0,1-1.23.709l-2.3,1.59c-1.066.647-.814.9-2.215,1.479-.892.371-3.543,2.43-4.648,2.928-1.57.707-2.17,1.359-3.523,1.916a3.7,3.7,0,0,0-1.2.744,14.569,14.569,0,0,1-2.711,1.18,9.372,9.372,0,0,1-2.417,1.274c-1.5.449-1.465.884-2.583,1.314a11.407,11.407,0,0,0-2.681,1,8.552,8.552,0,0,1-2.8,1.073c-1.058.307-1.556.857-2.531,1.172a17.67,17.67,0,0,0-2.882.807c-1.987,1.018-3.705.944-5.668,1.905-1.666.816-4.086.793-5.975,1.607-2.014.867-4.32.621-6.261,1.309a25.4,25.4,0,0,1-6.184,1.2c-2.374.2-4.145.965-6.409,1.18-2.409.228-4.707.3-7.171.46-2.415.158-4.47.464-6.786.736l-.027,1.673c2.284.265,4.306.568,6.64.725,2.453.165,4.765.234,7.154.454,2.251.207,3.992.932,6.221,1.157a23.236,23.236,0,0,1,6.444,1.154c1.877.709,4.274.54,6.13,1.245,2.124.807,5.155,1.282,5.921,1.67,1.877.951,3.9.9,5.685,1.887a11.006,11.006,0,0,0,2.855.846c1.289.323,1.523.839,2.68,1.19,3.036.921,2.752,1.215,5.355,2.033,1.164.366,1.22.879,2.428,1.269a6.822,6.822,0,0,1,2.642,1.242c.748.5,1.789.651,2.567,1.125.447.272.641.553,1.137.808.461.237.923.321,1.373.563,1.116.6,3.462,2.235,4.755,2.836a21.6,21.6,0,0,1,2.233,1.456,8.1,8.1,0,0,1,1.161.578c.475.334.56.55,1.063.887l3.418,2.213c.679.413.447.484,1,.948l2.1,1.591a21.863,21.863,0,0,1,2.136,1.751c.321.313.637.4,1.015.735.608.531.342.6.869,1.071s.6.238,1.082.868l6.847,8.11c.437.846.251.5.846,1.1.632.631.772,1.56,1.4,2.293.679.795.959,1.649,1.445,2.245a7.236,7.236,0,0,1,1.317,2.373c.476,1.071.833.945,1.4,2.49.536,1.455,1,1.388,1.384,2.311.564,1.352.284,1.326,1.145,2.541a15.654,15.654,0,0,1,1.05,2.642c.56,1.182.772.8,1.249,2.627a9.742,9.742,0,0,0,1.138,2.57c.431.926.446,2.023.9,2.979a8.073,8.073,0,0,1,1.077,2.617c.523,2.434,1.362,3.262,1.78,5.808.247,1.5,1.07,2.414,1.655,5.722a10.72,10.72,0,0,0,.963,2.927c.7,1.885.468,4.275,1.308,6.258l2.461,12.519c.132,1.081.2,2.219.385,3.285.187,1.1.536,2.055.748,3.139.862,4.407.426,9.191,1.4,13.828,1.289.047,1.645.27,1.931-1.194.114-.583.168-1.069.236-1.689.377-3.486.281-7.015.8-10.492.343-2.3.744-2.778,1.167-6.434.118-1.022.2-2.249.372-3.284.184-1.124.568-1.972.835-3.058.464-1.878.46-4.534,1.1-6.282a51.412,51.412,0,0,0,1.39-6.186c.271-1.128.717-1.315.964-2.707.676-3.822,1.4-4.469,1.7-5.895a13.26,13.26,0,0,1,.737-3.156c.939-1.935,1.082-3.615,2.034-5.349a14.736,14.736,0,0,0,.86-2.821c.349-1.1.863-1.439,1.219-2.675a6.046,6.046,0,0,1,1.072-2.621c.644-.916.59-1.788,1.141-2.736a6.637,6.637,0,0,0,1.227-2.479c.461-1.6.924-1.193,1.418-2.459.144-.367.268-.9.458-1.291.322-.668.468-.563.849-1.1.666-.932.362-1.362,1.3-2.386.607-.66.789-1.646,1.351-2.34a5.376,5.376,0,0,0,.85-1.1,13.136,13.136,0,0,1,.661-1.263c.405-.517.416-.228.841-.927.805-1.323,1.139-1.324,1.665-2.215a4.271,4.271,0,0,1,.81-1.134c.644-.692.979-1.264,1.671-2.025a16.216,16.216,0,0,1,1.826-2.055c.815-.6,1.063-1.175,1.887-1.806.574-.439.343-.421.835-.92.417-.422.592-.357,1.131-.8l2.013-1.685c.932-.68,1.049-.956,2.192-1.692.686-.441.442-.472.885-.862.421-.37.777-.374,1.253-.692l2.276-1.611c.958-.522,1.193-1.046,2.188-1.5l7.017-4.258c.956-.628,1.486-.423,2.451-1.237,1.033-.87,1.563-.659,2.631-1.257a8.005,8.005,0,0,1,2.451-1.237c1.38-.431,1.59-.961,2.568-1.318,1.159-.423,1.6-.274,2.674-1.014a7.513,7.513,0,0,1,2.811-1.066c1.3-.357,1.507-.813,2.565-1.144a15.166,15.166,0,0,0,2.872-.815c1.805-.991,3.925-.986,5.665-1.913,1.788-.952,3.887-.667,5.935-1.647,1.9-.908,4.3-.62,6.253-1.321a24.054,24.054,0,0,1,6.207-1.167c2.362-.252,4.1-.907,6.411-1.161,4.69-.517,9.15-.517,13.874-1.218l.108-1.654c-2.374-.292-4.433-.584-6.82-.745-2.471-.167-4.752-.208-7.162-.474-2.3-.253-4.069-.911-6.411-1.16a26.164,26.164,0,0,1-6.362-1.211c-1.983-.654-4.461-.446-6.272-1.3-1.96-.93-4.027-.7-5.9-1.677a11.366,11.366,0,0,0-2.849-.845,10.448,10.448,0,0,1-2.816-1.066c-.866-.377-1.941-.508-2.881-.808-1.063-.339-1.591-.891-2.7-1.194a6.1,6.1,0,0,1-2.66-1.028c-.973-.69-1.891-.6-2.813-1.07a11.335,11.335,0,0,0-2.468-1.221,19.529,19.529,0,0,1-2.535-1.355,9.139,9.139,0,0,1-2.534-1.16,54.03,54.03,0,0,0-4.955-2.622,22.213,22.213,0,0,0-2.361-1.526l-4.563-3.013c-1.045-.562-1.262-1.077-2.148-1.546-1.6-.844-2.78-2.221-4.343-3.235a4.808,4.808,0,0,1-1.156-.786l-1.9-1.79a3.414,3.414,0,0,0-.986-.959c-.709-.542-.318-.374-.912-1.03-.416-.461-.624-.409-1.046-.9-.38-.444-.286-.554-.737-1.008-.58-.584-.517-.3-.983-.963l-2.427-3.2a13.742,13.742,0,0,1-.945-1c-.3-.416-.4-.842-.729-1.215a8.3,8.3,0,0,1-1.481-2.2l-1.532-2.359c-.394-.676-.511-.536-.861-1.087-.6-.949-.412-1.538-1.219-2.471-.83-.959-.667-1.607-1.311-2.575a7.556,7.556,0,0,1-1.25-2.435c-.423-1.248-.932-1.335-1.353-2.538a9.24,9.24,0,0,0-1.175-2.521,21.614,21.614,0,0,1-.97-2.912c-.428-1.036-.839-1.063-1.181-2.508a8.38,8.38,0,0,0-1.092-2.8,13.676,13.676,0,0,1-.772-2.918,24.629,24.629,0,0,0-1.175-2.712c-.36-1.059-.3-2.071-.63-3.064a18.071,18.071,0,0,1-1.027-2.861c-.19-.9-.341-2.23-.6-3.088a15.073,15.073,0,0,1-.985-2.9c-.193-1.1-.332-2.052-.528-3.167-.226-1.273-.679-1.755-.914-2.97a60.994,60.994,0,0,0-1.175-6.406,30.74,30.74,0,0,1-1.034-6.577c-.22-2.229-.966-4.105-1.183-6.4-.219-2.322-.27-4.69-.457-7.083-.388-4.944-.111-5.212-2.324-5.108Z" transform="translate(-133.717 -116.187)"/><g id="Layer1002"><path id="path8" className={styles.cls1} d="M672.19,226.181l-3.472-3.471L562.2,116.187V218.515q0,3.885.008,7.666c.211,78.583,4.635,124.555,71.3,191.22C681.878,465.776,740.366,491,808.569,491h18.368V380.928L716.844,270.837Z" transform="translate(-133.717 -116.187)"/><path id="path10" className={styles.cls1} d="M826.938,544.8c-79.038.184-125.089,4.423-191.967,71.3-48.375,48.375-73.6,106.863-73.6,175.068V808.66H672.32L781.536,699.445l45.4-45.4,2.724-2.724L936.186,544.8H833.856q-3.5,0-6.918.008Z" transform="translate(-133.717 -116.187)"/><path id="path12" className={styles.cls1} d="M437.893,617.441c-48.375-48.375-106.863-73.6-175.068-73.6h-18.37V653.907l110.1,110.1,44.655,44.655,3.471,3.472L509.2,918.656V816.325q0-3.885-.008-7.665c-.209-78.582-4.632-124.554-71.3-191.219Z" transform="translate(-133.717 -116.187)"/><path id="path14" className={styles.cls1} d="M236.045,491.8q4.268,0,8.41-.012c78.129-.239,124.021-4.842,190.477-71.3,48.375-48.375,73.6-106.863,73.6-175.066V226.181h-109.2L288.368,337.151l-43.913,43.913-4.214,4.214L133.717,491.8H236.045Z" transform="translate(-133.717 -116.187)"/></g></g></svg>
                </div>
                <div className={styles.messageContent}>
                  <div className={styles.typing}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Form */}
            {showForm && (
              <div className={styles.formContainer}>
                <h4>Get Your Free Solar Quote</h4>
                <form onSubmit={handleFormSubmit}>
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => handleFormChange('name', e.target.value)}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => handleFormChange('phone', e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => handleFormChange('email', e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Location (City)"
                    value={formData.location}
                    onChange={(e) => handleFormChange('location', e.target.value)}
                  />
                  <textarea
                    placeholder="Any specific requirements?"
                    value={formData.message}
                    onChange={(e) => handleFormChange('message', e.target.value)}
                    rows={3}
                  />
                  <button type="submit" className={styles.submitBtn}>
                    Get Free Consultation
                  </button>
                </form>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className={styles.inputContainer}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about solar solutions..."
                className={styles.messageInput}
              />
              <button 
                onClick={handleSendMessage}
                className={styles.sendButton}
                disabled={!userInput.trim()}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RaynexChatbot;