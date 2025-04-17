import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: string;
    username: string;
    role: 'admin' | 'cashier';
  } | null;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  signIn: async (username: string, password: string) => {
    // TODO: Replace with actual API call
    if (username === 'admin' && password === 'admin') {
      const user = {
        id: '1',
        username: 'admin',
        role: 'admin' as const,
      };
      await SecureStore.setItemAsync('user', JSON.stringify(user));
      set({ isAuthenticated: true, user });
    } else if (username === 'cashier' && password === 'cashier') {
      const user = {
        id: '2',
        username: 'cashier',
        role: 'cashier' as const,
      };
      await SecureStore.setItemAsync('user', JSON.stringify(user));
      set({ isAuthenticated: true, user });
    } else {
      throw new Error('Invalid credentials');
    }
  },
  signOut: async () => {
    await SecureStore.deleteItemAsync('user');
    set({ isAuthenticated: false, user: null });
  },
}));