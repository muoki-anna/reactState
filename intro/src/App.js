import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Muoki Anna',
        bio: 'Full-stack developer passionate about creating elegant solutions to complex problems. Love working with React and Node.js.',
        imgSrc: '/WhatsApp Image 2025-07-12 at 12.58.01_b77755f6.jpg',
        profession: 'Software Engineer'
      },
      shows: false,
      timeSinceMounted: 0
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        timeSinceMounted: prevState.timeSinceMounted + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  }

  render() {
    const { person, shows, timeSinceMounted } = this.state;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="max-w-2xl w-full bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12">
          <div className="text-center mb-8 md:mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 tracking-tight">
              Profile Viewer
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Time since mounted: <span className="font-semibold text-purple-600">
                {this.formatTime(timeSinceMounted)}
              </span>
            </p>
          </div>

          <button
            onClick={this.toggleShow}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl transition duration-300 mb-8 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {shows ? 'Hide Profile' : 'Show Profile'}
          </button>

          {shows && (
            <div className="animate-fadeIn">
              <div className="text-center mb-6">
                <div className="relative inline-block mb-6">
                  <img
                    src={person.imgSrc}
                    alt={person.fullName}
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto object-cover border-4 border-purple-200 shadow-2xl ring-4 ring-blue-100"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20"></div>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  {person.fullName}
                </h2>
                <p className="text-lg sm:text-xl text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold mb-6">
                  {person.profession}
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-5 sm:p-6 shadow-inner">
                <h3 className="text-base sm:text-lg font-bold text-gray-700 mb-3 flex items-center">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded mr-3"></span>
                  Bio
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </div>
          )}
        </div>


      </div>
    );
  }
}

export default App;