// src/services/authService.ts
import axios from 'axios';

export async function getUserFromToken(token?: string) {
  if (!token) return null;
  
  try {
    const response = await axios.get('http://localhost:4000/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // Add timeout to fail fast if server is not available
      timeout: 3000,
    });
    return response.data;
  } catch (error) {
    console.error('Auth service error:', error);
    return null;
  }
}