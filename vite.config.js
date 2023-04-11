import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/rest-countries-app-with-loginpage/'
});

// base: '/rest-countries-app-with-auth/'