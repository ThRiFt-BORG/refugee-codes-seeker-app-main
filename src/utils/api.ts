// src/utils/api.ts
const API_BASE_URL = 'http://localhost:4000';

export const api = {
  // Authentication endpoints
  register: async (userData: {
    username: string;
    email: string;
    password: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    return response.json();
  },

  login: async (credentials: {
    email: string;
    password: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    return response.json();
  },

  // Sponsorship endpoints
  createSponsorship: async (sponsorshipData: {
    sponsor_name: string;
    refugee_name: string;
    amount: number;
  }) => {
    const response = await fetch(`${API_BASE_URL}/api/sponsorship`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sponsorshipData),
    });

    if (!response.ok) {
      throw new Error('Failed to create sponsorship');
    }

    return response.json();
  },

  getSponsorships: async () => {
    const response = await fetch(`${API_BASE_URL}/api/sponsorship`);

    if (!response.ok) {
      throw new Error('Failed to fetch sponsorships');
    }

    return response.json();
  },
};
