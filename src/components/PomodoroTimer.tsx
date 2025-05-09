
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Play, Pause, Clock, Reset, Trash } from 'lucide-react';

type TimerState = 'idle' | 'running' | 'paused' | 'finished';

interface TimerSession {
  id: string;
  duration: number;
  startTime: number;
  endTime?: number;
}

const PomodoroTimer: React.FC = () => {
  const { t } = useLanguage();
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [timerState, setTimerState] = useState<TimerState>('idle');
  const [sessions, setSessions] = useState<TimerSession[]>([]);
  const [customTime, setCustomTime] = useState(25);
  const intervalRef = useRef<number | null>(null);
  const currentSessionRef = useRef<TimerSession | null>(null);
  
  useEffect(() => {
    if (timerState === 'running') {
      intervalRef.current = window.setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          // Timer finished
          handleTimerFinish();
        }
      }, 1000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [minutes, seconds, timerState]);
  
  const handleTimerFinish = () => {
    setTimerState('finished');
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    if (currentSessionRef.current) {
      const updatedSession = {
        ...currentSessionRef.current,
        endTime: Date.now(),
      };
      
      setSessions(prev => [...prev, updatedSession]);
      currentSessionRef.current = null;
    }
  };
  
  const startTimer = () => {
    if (timerState === 'idle' || timerState === 'paused') {
      setTimerState('running');
      
      if (timerState === 'idle') {
        // Create a new session
        const newSession = {
          id: Date.now().toString(),
          duration: minutes * 60 + seconds,
          startTime: Date.now(),
        };
        
        currentSessionRef.current = newSession;
      }
    }
  };
  
  const pauseTimer = () => {
    if (timerState === 'running') {
      setTimerState('paused');
      
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  };
  
  const resetTimer = () => {
    setTimerState('idle');
    setMinutes(customTime);
    setSeconds(0);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    currentSessionRef.current = null;
  };
  
  const deleteSession = (id: string) => {
    setSessions(sessions.filter(session => session.id !== id));
  };
  
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0 && value <= 60) {
      setCustomTime(value);
      
      if (timerState === 'idle') {
        setMinutes(value);
      }
    }
  };
  
  const formatTime = (mins: number, secs: number) => {
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="text-6xl font-bold text-electric-blue">
        {formatTime(minutes, seconds)}
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <input
            type="number"
            min="1"
            max="60"
            value={customTime}
            onChange={handleTimeChange}
            className="w-16 p-2 bg-electric-dark border border-electric-blue/30 rounded-md text-white text-center"
            disabled={timerState !== 'idle'}
          />
          <span className="ml-2 text-gray-300">{t('minutesLabel')}</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        {timerState === 'running' ? (
          <Button onClick={pauseTimer} variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white">
            <Pause size={18} className="mr-1" /> {t('pauseButton')}
          </Button>
        ) : (
          <Button onClick={startTimer} variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white">
            <Play size={18} className="mr-1" /> {t('startButton')}
          </Button>
        )}
        
        <Button onClick={resetTimer} variant="outline" className="border-electric-purple text-electric-purple hover:bg-electric-purple hover:text-white">
          <Reset size={18} className="mr-1" /> {t('resetButton')}
        </Button>
      </div>
      
      {sessions.length > 0 && (
        <div className="w-full mt-6">
          <h4 className="text-sm text-gray-300 mb-2">{t('pastSessions')}</h4>
          <div className="max-h-40 overflow-y-auto space-y-2">
            {sessions.map(session => {
              const duration = session.endTime 
                ? Math.floor((session.endTime - session.startTime) / 1000)
                : Math.floor((Date.now() - session.startTime) / 1000);
              
              const minutes = Math.floor(duration / 60);
              const seconds = duration % 60;
              
              return (
                <div key={session.id} className="flex justify-between items-center p-2 bg-electric-dark/50 rounded-md">
                  <div className="flex items-center">
                    <Clock size={16} className="text-electric-blue mr-2" />
                    <span>{formatTime(minutes, seconds)}</span>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-gray-400 hover:text-red-500"
                    onClick={() => deleteSession(session.id)}
                  >
                    <Trash size={16} />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PomodoroTimer;
