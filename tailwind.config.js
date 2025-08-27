/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2', // Vibrant blue
        secondary: '#50C878', // Fresh green
        accent: '#7B61FF', // A new purple accent
        background: '#F0F2F5', // Light gray background for the overall app
        card: '#FFFFFF', // White for cards and prominent elements
        text: '#2D3748', // Dark gray for primary text
        lightText: '#718096', // Medium gray for secondary text
        border: '#E2E8F0', // Light border color
        success: '#4CAF50', // Green for success messages
        info: '#2196F3',    // Blue for informational messages
        warning: '#FFC107',  // Amber for warnings
        danger: '#F44336',  // Red for errors/danger
        gradientStart: '#A8C0FF',
        gradientEnd: '#37CC62',
        darkSidebarBg: '#1E293B', // Dark background for department sidebar
        darkGradientStart: '#4A69BD',
        darkGradientEnd: '#6B5B95',
      },
      boxShadow: {
        'light': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'medium': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        'lg': '0 15px 30px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
