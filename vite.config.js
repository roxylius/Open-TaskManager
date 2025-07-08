// Defines the configuration for the Vite build tool.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // An array of plugins to use.
  plugins: [react()],
  // Development server configuration.
  server: {
    // Hosts that are allowed to access the dev server. for porting
    allowedHosts: [
      'fd76a726e099.ngrok-free.app'
    ],
  }
})