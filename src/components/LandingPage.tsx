import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface LandingPageProps {
  onStartGame: () => void;
}

export default function LandingPage({ onStartGame }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space via-slate-900 to-slate-800 text-white font-orbitron">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/img/773326ec-21ed-44ca-b1b5-7b934b247dd7.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-space/90 via-transparent to-deep-space/50" />
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyber-blue to-primary bg-clip-text text-transparent animate-pulse">
            НЕБЕСНЫЙ ГОРОД
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300">
            Создай свою космическую империю в облаках
          </p>
          <p className="text-lg mb-12 text-slate-400 max-w-2xl mx-auto">
            Стройте футуристические города на парящих островах, собирайте ресурсы, развивайте технологии и торгуйте с другими игроками в реалистичном 3D мире.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-cyber-blue hover:bg-cyan-600 text-black font-bold px-8 py-4 text-lg"
              onClick={onStartGame}
            >
              <Icon name="Rocket" className="mr-2" size={20} />
              НАЧАТЬ ИГРУ
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black px-8 py-4 text-lg"
            >
              <Icon name="Play" className="mr-2" size={20} />
              ТРЕЙЛЕР
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyber-blue">
            ВОЗМОЖНОСТИ ИГРЫ
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Icon name="Building" className="h-12 w-12 text-cyber-blue mb-4" />
                <CardTitle className="text-xl text-cyber-blue">Строительство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Создавайте уникальные футуристические здания и развивайте инфраструктуру своих островов.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Icon name="Users" className="h-12 w-12 text-cyber-blue mb-4" />
                <CardTitle className="text-xl text-cyber-blue">Мультиплеер</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Торгуйте с другими игроками, создавайте гильдии и участвуйте в космических сражениях.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Icon name="Zap" className="h-12 w-12 text-cyber-blue mb-4" />
                <CardTitle className="text-xl text-cyber-blue">Развитие</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Прокачивайте технологии, открывайте новые острова и расширяйте свою империю.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}