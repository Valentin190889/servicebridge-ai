export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: string;
  type: 'text' | 'voice';
}

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  createdAt: string;
  updatedAt: string;
}