'use client';

import { useState, useEffect } from 'react';

export default function ClockApp() {
  const [time, setTime] = useState(new Date());
  const [format24, setFormat24] = useState(true);
  const [showSeconds, setShowSeconds] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    if (!format24) {
      const period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      return `${hours.toString().padStart(2, '0')}:${minutes}${showSeconds ? ':' + seconds : ''} ${period}`;
    }

    return `${hours.toString().padStart(2, '0')}:${minutes}${showSeconds ? ':' + seconds : ''}`;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="clock-container max-w-md w-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-700 rounded-3xl p-12 shadow-2xl">
        <div className="text-center">
          <div className="text-emerald-400 text-sm tracking-[4px] mb-2 font-medium">
            LIVE TIME
          </div>

          <div className="text-[5.5rem] font-mono font-light tracking-tighter mb-2 text-white">
            {formatTime(time)}
          </div>

          <div className="text-xl text-zinc-400 mb-8">
            {formatDate(time)}
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setFormat24(!format24)}
              className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-full text-sm transition-all active:scale-95"
            >
              {format24 ? '12-Hour' : '24-Hour'}
            </button>

            <button
              onClick={() => setShowSeconds(!showSeconds)}
              className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-full text-sm transition-all active:scale-95"
            >
              {showSeconds ? 'Hide Seconds' : 'Show Seconds'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
