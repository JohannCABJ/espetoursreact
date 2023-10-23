import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.1.73', // Cambia '0.0.0.0' a tu dirección IP local si deseas exponer la aplicación en la red local
    port: 5173, // Cambia el puerto a tu puerto deseado
  },
})
