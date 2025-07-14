import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
  onBackToLanding: () => void;
}

export default function LoginForm({ onLogin, onBackToLanding }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (username && password) {
      onLogin(username, password);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space to-slate-900 text-white font-orbitron flex items-center justify-center">
      <Card className="w-full max-w-md bg-slate-800/50 border-slate-700">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-cyber-blue">ВХОД В ИГРУ</CardTitle>
          <CardDescription>Введите данные для входа</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Имя пользователя"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-slate-900 border-slate-600"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-slate-900 border-slate-600"
            />
          </div>
          <Button 
            onClick={handleSubmit}
            className="w-full bg-cyber-blue hover:bg-cyan-600 text-black font-bold"
          >
            Войти в игру
          </Button>
          <div className="text-center">
            <Button 
              variant="link" 
              className="text-cyber-blue"
              onClick={onBackToLanding}
            >
              Назад на главную
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}