import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from './VideoPlayer'
import { useRef } from 'react'

function App() {
  const playerRef = useRef(null)
  const videoLink = "http://localhost:8000/uploads/courses/cb714f1f-6086-4ff4-9aa2-f44c4db4c40c/index.m3u8"

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL"
      }
    ]
  }
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <div className='backg'>
      <div className='title1'>
        <h1 className='title'>Video Runner</h1>
      </div>
      <div className='video'>
      <VideoPlayer
      options={videoPlayerOptions}
      onReady={handlePlayerReady}
      />
      </div>
    
    </div>
  )
}

export default App