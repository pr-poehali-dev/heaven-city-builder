import { useState } from 'react';
import LandingPage from '@/components/LandingPage';
import GameInterface from '@/components/GameInterface';
import AdminPanel from '@/components/AdminPanel';
import LoginForm from '@/components/LoginForm';

export default function Index() {
  const [currentView, setCurrentView] = useState<'landing' | 'game' | 'admin'>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [gameStats, setGameStats] = useState({
    level: 15,
    coins: 12500,
    wood: 350,
    stone: 280,
    energy: 95,
    buildings: 28,
    islands: 1
  });

  const handleLogin = (username: string, password: string) => {
    setIsLoggedIn(true);
    setCurrentView('game');
  };

  const handleStartGame = () => {
    setCurrentView('game');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  const handleAdminAccess = () => {
    setCurrentView('admin');
  };

  const handleBackToGame = () => {
    setCurrentView('game');
  };

  if (!isLoggedIn && currentView !== 'landing') {
    return (
      <LoginForm 
        onLogin={handleLogin}
        onBackToLanding={handleBackToLanding}
      />
    );
  }

  return (
    <div className="relative">
      {currentView === 'landing' && (
        <LandingPage onStartGame={handleStartGame} />
      )}
      
      {currentView === 'game' && (
        <GameInterface 
          gameStats={gameStats}
          onAdminAccess={handleAdminAccess}
        />
      )}
      
      {currentView === 'admin' && (
        <AdminPanel onBackToGame={handleBackToGame} />
      )}
    </div>
  );
}