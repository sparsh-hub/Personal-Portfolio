import React, { useRef, useState, useEffect } from "react";

const SoundButton = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
  
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  return (
    <div className="fixed bottom-10 left-10 z-50">
      <audio 
        ref={audioRef} 
        src="/banda-kaam-ka.mp3" 
        loop 
      /> 
      <b className="text-[#1AFF00] pl-0.5">SOUND</b>

      <button
        onClick={toggleAudio}
        className="group relative flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none mt-2 ml-1"
        aria-label="Toggle Sound"
      >
        <div className="flex items-end justify-center gap-[3px] h-4 w-5 overflow-hidden">
          {[1, 2, 3, 4].map((bar) => (
            <span
              key={bar}
              className={`w-[3px] bg-white rounded-t-sm transition-all duration-300 ease-in-out ${
                isPlaying 
                  ? "animate-music-bar animate-bounce h-full" 
                  : "h-1"
              }`}
              style={{
                animationDelay: isPlaying ? `${bar * 0.1}s` : "0s",
                height: isPlaying ? '100%' : '20%'
              }}
            />
          ))}
        </div>
      </button>
    </div>
  );
};

export default SoundButton;