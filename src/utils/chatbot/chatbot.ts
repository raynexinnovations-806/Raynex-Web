// utils/chatbot.ts
import type { FormData, LeadData } from '@/types/chatbot';

// Validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9]?[0-9]{7,14}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name.trim());
};

// Form validation
export const validateForm = (formData: FormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!validateName(formData.name)) {
    errors.push('Please enter a valid name (at least 2 characters, letters only)');
  }

  if (!validatePhone(formData.phone)) {
    errors.push('Please enter a valid phone number');
  }

  if (!validateEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Data sanitization
export const sanitizeFormData = (formData: FormData): LeadData => {
  return {
    name: formData.name.trim(),
    phone: formData.phone.replace(/[\s\-\(\)]/g, ''),
    email: formData.email.trim().toLowerCase(),
    location: formData.location.trim(),
    message: formData.message.trim(),
    timestamp: new Date().toISOString(),
    status: 'New Lead'
  };
};

// Format phone number for display
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  } else if (cleaned.length === 11) {
    return `+${cleaned.slice(0, 1)} (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  
  return phone;
};

// Check if message contains solar-related keywords
export const isSolarRelated = (message: string): boolean => {
  const solarKeywords = [
    'solar', 'panel', 'energy', 'power', 'electricity', 'inverter',
    'battery', 'installation', 'rooftop', 'ground', 'mount', 'subsidy',
    'savings', 'bill', 'cost', 'price', 'quote', 'maintenance', 'service'
  ];
  
  const lowerMessage = message.toLowerCase();
  return solarKeywords.some(keyword => lowerMessage.includes(keyword));
};

// Generate conversation context for better responses
export const generateContext = (messages: Array<{ type: string; text: string }>): string => {
  const recentMessages = messages.slice(-5); // Last 5 messages for context
  return recentMessages
    .map(msg => `${msg.type}: ${msg.text}`)
    .join('\n');
};

// Local storage utilities (for persisting chat state)
export const saveChatState = (state: any): void => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem('raynex_chat_state', JSON.stringify(state));
    }
  } catch (error) {
    console.error('Failed to save chat state:', error);
  }
};

export const loadChatState = (): any => {
  try {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('raynex_chat_state');
      return saved ? JSON.parse(saved) : null;
    }
  } catch (error) {
    console.error('Failed to load chat state:', error);
  }
  return null;
};

export const clearChatState = (): void => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('raynex_chat_state');
    }
  } catch (error) {
    console.error('Failed to clear chat state:', error);
  }
};

// Analytics utilities
export const trackChatEvent = (event: string, data?: Record<string, any>): void => {
  try {
    // Google Analytics 4 tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event, {
        event_category: 'chatbot',
        event_label: 'raynex_ai_assistant',
        ...data
      });
    }

    // Custom analytics tracking
    console.log('Chat Event:', { event, data, timestamp: new Date().toISOString() });
  } catch (error) {
    console.error('Failed to track chat event:', error);
  }
};

// Common chat events
export const ChatEvents = {
  CHAT_OPENED: 'chat_opened',
  CHAT_CLOSED: 'chat_closed',
  MESSAGE_SENT: 'message_sent',
  QUICK_REPLY_CLICKED: 'quick_reply_clicked',
  FORM_STARTED: 'form_started',
  FORM_SUBMITTED: 'form_submitted',
  FORM_ERROR: 'form_error'
} as const;

// Debounce utility for API calls
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Format timestamp for display
export const formatTimestamp = (timestamp: Date | string): string => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  
  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h ago`;
  
  return date.toLocaleDateString();
};

// Error handling utility
export const handleApiError = (error: any): string => {
  if (error.response?.data?.error) {
    return error.response.data.error;
  }
  
  if (error.code === 'NETWORK_ERROR') {
    return 'Network error. Please check your connection and try again.';
  }
  
  if (error.code === 'ECONNABORTED') {
    return 'Request timeout. Please try again.';
  }
  
  return 'Something went wrong. Please try again or contact support.';
};

// Accessibility utilities
export const announceToScreenReader = (message: string): void => {
  if (typeof window !== 'undefined') {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }
};

// Theme utilities
export const getPreferredTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('raynex_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

export const setTheme = (theme: 'light' | 'dark'): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('raynex_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }
};