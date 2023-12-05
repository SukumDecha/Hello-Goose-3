import { defineConfig } from 'vite';
import React from 'react';

export default defineConfig({
  // ... other configurations

  optimizeDeps: {
    include: ['react-router-dom'],
  },
});