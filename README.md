Profile Viewer - React Class Component
A responsive profile viewer application built with React using class-based components. This project demonstrates component lifecycle methods, state management, and modern UI design with Tailwind CSS.

Features
✨ Class-based Component: Built using React class components with lifecycle methods
👤 Profile Display: Toggle to show/hide user profile information
⏱️ Live Timer: Real-time counter showing time elapsed since component mount
📱 Responsive Design: Fully responsive layout that works on mobile, tablet, and desktop
🎨 Modern UI: Beautiful blue and purple gradient theme with smooth animations
🔄 Component Lifecycle: Demonstrates componentDidMount and componentWillUnmount methods
Demo
The application displays:

A profile card with user information (name, profession, bio, and photo)
A toggle button to show/hide the profile
A timer that continuously tracks how long the component has been mounted
Prerequisites
Before running this project, make sure you have:

Node.js (v14 or higher)
npm (v6 or higher)
Installation
Clone or download this repository

Navigate to the project directory:

cd intro
Install dependencies:

npm install
Install Tailwind CSS v3:

npm uninstall tailwindcss
npm install -D tailwindcss@^3.4.0 postcss autoprefixer
Configuration
1. Create tailwind.config.js in the root directory:
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
2. Create postcss.config.js in the root directory:
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
3. Update src/index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;
4. Create src/App.css:
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
5. Make sure src/App.js imports the CSS:
import './App.css';
Running the Application
Start the development server:

npm start
The application will open in your browser at http://localhost:3000

Project Structure
intro/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main component with profile viewer logic
│   ├── App.css         # Custom animations
│   ├── index.js        # Entry point
│   └── index.css       # Tailwind imports
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
├── package.json
└── README.md
Component Features
State Management
The component manages three state properties:

person: Object containing user profile data (fullName, bio, imgSrc, profession)
shows: Boolean to toggle profile visibility
timeSinceMounted: Number tracking seconds since component mounted
Lifecycle Methods
componentDidMount(): Starts an interval timer that increments every second
componentWillUnmount(): Cleans up the interval to prevent memory leaks
Methods
toggleShow(): Toggles the profile visibility
formatTime(): Formats seconds into readable time format (hours, minutes, seconds)
Customization
Changing Profile Information
Edit the person object in the component's state:

person: {
  fullName: 'Your Name',
  bio: 'Your bio description',
  imgSrc: '/path-to-your-image.jpg',
  profession: 'Your Profession'
}
Changing Colors
The application uses a blue and purple theme. To customize colors, modify the Tailwind classes in App.js:

Background gradient: from-blue-600 via-purple-600 to-blue-800
Button gradient: from-blue-600 to-purple-600
Text gradient: from-blue-600 to-purple-600
Technologies Used
React (v18+) - JavaScript library for building user interfaces
Tailwind CSS (v3.4) - Utility-first CSS framework
PostCSS - CSS transformation tool
Autoprefixer - PostCSS plugin for vendor prefixes
Troubleshooting
Styles not appearing
Make sure Tailwind CSS v3 is installed (not v4)
Verify tailwind.config.js and postcss.config.js exist in the root directory
Restart the development server
Timer not working
Check that componentDidMount is setting up the interval
Ensure componentWillUnmount is cleaning up the interval
Image not displaying
Make sure the image file is in the public folder
Use the correct path: /your-image.jpg (starting with /)
License
This project is open source and available for educational purposes.

Author
Muoki Anna

Built with ❤️ using React and Tailwind CSS
