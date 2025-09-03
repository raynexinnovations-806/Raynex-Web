// types/chatbot.ts
export interface Message {
    type: 'bot' | 'user';
    text: string;
    timestamp: Date;
    quickReplies?: string[];
  }
  
  export interface FormData {
    name: string;
    phone: string;
    email: string;
    location: string;
    message: string;
  }
  
  export interface BotResponse {
    text: string;
    quickReplies?: string[];
    showForm?: boolean;
  }
  
  export interface ApiResponse {
    success: boolean;
    message?: string;
    error?: string;
  }
  
  export interface LeadData {
    name: string;
    phone: string;
    email: string;
    location?: string;
    message?: string;
    source?: string;
    timestamp?: string;
    status?: string;
  }
  
  export type ChatState = 'greeting' | 'conversation' | 'form_collection' | 'completed';
  
  // Google Sheets related types
  export interface GoogleScriptResponse {
    success: boolean;
    message?: string;
    error?: string;
  }
  
  export interface LeadStats {
    totalLeads: number;
    todayLeads: number;
    sourceStats: Record<string, number>;
  }
  
  // Component Props
  export interface ChatbotProps {
    className?: string;
    theme?: 'light' | 'dark';
    position?: 'bottom-right' | 'bottom-left';
  }
  
  // Notification types
  export interface EmailNotification {
    to: string;
    subject: string;
    htmlBody: string;
  }
  
  export interface SlackNotification {
    text: string;
    blocks?: any[];
    channel?: string;
  }