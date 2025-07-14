import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [currentView, setCurrentView] = useState<'landing' | 'game' | 'admin'>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gameStats, setGameStats] = useState({
    level: 15,
    coins: 12500,
    wood: 350,
    stone: 280,
    energy: 95,
    buildings: 28,
    islands: 1
  });

  const handleLogin = () => {
    if (username && password) {
      setIsLoggedIn(true);
      setCurrentView('game');
    }
  };

  const buildings = [
    { name: 'Жилой модуль', cost: { wood: 50, stone: 30, energy: 10 }, income: 25 },
    { name: 'Энергостанция', cost: { wood: 80, stone: 120, energy: 0 }, income: 0 },
    { name: 'Шахта ресурсов', cost: { wood: 60, stone: 100, energy: 20 }, income: 0 },
    { name: 'Торговый центр', cost: { wood: 100, stone: 150, energy: 30 }, income: 50 },
    { name: 'Киберферма', cost: { wood: 200, stone: 250, energy: 50 }, income: 100 },
    { name: 'Космопорт', cost: { wood: 500, stone: 800, energy: 200 }, income: 200 }
  ];

  const islands = [
    { name: 'Альфа-Станция', unlocked: true, cost: 0 },
    { name: 'Бета-Колония', unlocked: false, cost: 50000 },
    { name: 'Гамма-Аванпост', unlocked: false, cost: 100000 }
  ];

  const renderLanding = () => (
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
              onClick={() => setCurrentView('game')}
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

  const renderGame = () => (
    <div className="min-h-screen bg-gradient-to-br from-deep-space to-slate-900 text-white font-orbitron">
      {/* Header */}
      <div className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-cyber-blue">НЕБЕСНЫЙ ГОРОД</h1>
              <Badge variant="outline" className="border-cyber-blue text-cyber-blue">
                Уровень {gameStats.level}
              </Badge>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Icon name="Coins" className="h-5 w-5 text-yellow-400" />
                <span className="text-yellow-400 font-bold">{gameStats.coins.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="TreePine" className="h-5 w-5 text-green-400" />
                <span className="text-green-400">{gameStats.wood}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mountain" className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">{gameStats.stone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Zap" className="h-5 w-5 text-blue-400" />
                <span className="text-blue-400">{gameStats.energy}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="city" className="w-full">
          <TabsList className="grid grid-cols-5 w-full max-w-md mb-8 bg-slate-800">
            <TabsTrigger value="city">Город</TabsTrigger>
            <TabsTrigger value="build">Стройка</TabsTrigger>
            <TabsTrigger value="islands">Острова</TabsTrigger>
            <TabsTrigger value="trade">Торговля</TabsTrigger>
            <TabsTrigger value="guild">Гильдия</TabsTrigger>
          </TabsList>

          <TabsContent value="city" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyber-blue">Обзор города</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div 
                      className="w-full h-64 bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: 'url(/img/773326ec-21ed-44ca-b1b5-7b934b247dd7.jpg)' }}
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Зданий построено:</span>
                      <span className="text-cyber-blue font-bold">{gameStats.buildings}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Островов открыто:</span>
                      <span className="text-cyber-blue font-bold">{gameStats.islands}</span>
                    </div>
                    <Separator className="bg-slate-700" />
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Доходность в час:</span>
                        <span className="text-gold font-bold">+1,250 монет</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Производство энергии:</span>
                        <span className="text-blue-400 font-bold">+45 энергии</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="build" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyber-blue">Строительство</CardTitle>
                <CardDescription>Выберите здание для постройки</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {buildings.map((building, index) => (
                    <Card key={index} className="bg-slate-900/50 border-slate-600">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-cyber-blue">{building.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="flex items-center">
                              <Icon name="TreePine" className="h-4 w-4 mr-1 text-green-400" />
                              {building.cost.wood}
                            </span>
                            <span className="flex items-center">
                              <Icon name="Mountain" className="h-4 w-4 mr-1 text-gray-400" />
                              {building.cost.stone}
                            </span>
                            <span className="flex items-center">
                              <Icon name="Zap" className="h-4 w-4 mr-1 text-blue-400" />
                              {building.cost.energy}
                            </span>
                          </div>
                          {building.income > 0 && (
                            <div className="text-sm text-gold">
                              Доход: +{building.income} монет/час
                            </div>
                          )}
                        </div>
                        <Button 
                          size="sm" 
                          className="w-full bg-cyber-blue hover:bg-cyan-600 text-black"
                          disabled={
                            gameStats.wood < building.cost.wood ||
                            gameStats.stone < building.cost.stone ||
                            gameStats.energy < building.cost.energy
                          }
                        >
                          Построить
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="islands" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyber-blue">Острова</CardTitle>
                <CardDescription>Расширьте свою империю</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {islands.map((island, index) => (
                    <Card key={index} className={`${island.unlocked ? 'bg-slate-900/50 border-cyber-blue' : 'bg-slate-900/30 border-slate-600'}`}>
                      <CardHeader>
                        <CardTitle className={`${island.unlocked ? 'text-cyber-blue' : 'text-slate-500'}`}>
                          {island.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {island.unlocked ? (
                          <div className="space-y-2">
                            <Badge variant="outline" className="border-green-400 text-green-400">
                              Активен
                            </Badge>
                            <Button size="sm" className="w-full bg-cyber-blue hover:bg-cyan-600 text-black">
                              Перейти на остров
                            </Button>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Цена:</span>
                              <span className="text-gold font-bold">{island.cost.toLocaleString()} монет</span>
                            </div>
                            <Button 
                              size="sm" 
                              className="w-full"
                              disabled={gameStats.coins < island.cost}
                              variant={gameStats.coins >= island.cost ? 'default' : 'secondary'}
                            >
                              {gameStats.coins >= island.cost ? 'Купить остров' : 'Недостаточно монет'}
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trade" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyber-blue">Торговля</CardTitle>
                <CardDescription>Торгуйте с другими игроками</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Icon name="Store" className="h-16 w-16 text-cyber-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Торговая площадка</h3>
                  <p className="text-slate-400 mb-4">Функция в разработке</p>
                  <Button disabled>Открыть рынок</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guild" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyber-blue">Гильдия</CardTitle>
                <CardDescription>Объединяйтесь с другими игроками</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Icon name="Users" className="h-16 w-16 text-cyber-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Система гильдий</h3>
                  <p className="text-slate-400 mb-4">Функция в разработке</p>
                  <Button disabled>Создать гильдию</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );

  const renderAdmin = () => (
    <div className="min-h-screen bg-gradient-to-br from-deep-space to-slate-900 text-white font-orbitron">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-cyber-blue">АДМИН ПАНЕЛЬ</h1>
          <Button 
            variant="outline" 
            onClick={() => setCurrentView('game')}
            className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black"
          >
            <Icon name="ArrowLeft" className="mr-2" size={16} />
            Назад в игру
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-cyber-blue">Игроки онлайн</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-400">1,247</div>
              <p className="text-slate-400">+12% за последний час</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-cyber-blue">Всего игроков</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-400">45,892</div>
              <p className="text-slate-400">Зарегистрированных пользователей</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-cyber-blue">Серверы</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-400">8/10</div>
              <p className="text-slate-400">Активных серверов</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="players" className="w-full">
          <TabsList className="grid grid-cols-4 w-full max-w-md mb-8 bg-slate-800">
            <TabsTrigger value="players">Игроки</TabsTrigger>
            <TabsTrigger value="economy">Экономика</TabsTrigger>
            <TabsTrigger value="content">Контент</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
          </TabsList>

          <TabsContent value="players">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyber-blue">Управление игроками</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input 
                    placeholder="Поиск игрока..." 
                    className="bg-slate-900 border-slate-600"
                  />
                  <div className="space-y-2">
                    {['CosmicBuilder', 'SpaceTrader', 'SkyArchitect', 'NebulaKing'].map((player, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-900/50 rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-cyber-blue rounded-full flex items-center justify-center">
                            <Icon name="User" size={16} className="text-black" />
                          </div>
                          <div>
                            <div className="font-bold">{player}</div>
                            <div className="text-sm text-slate-400">Уровень {15 + index}</div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">Профиль</Button>
                          <Button size="sm" variant="destructive">Бан</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="economy">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyber-blue">Экономика игры</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-4">Баланс ресурсов</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Монеты в обороте:</span>
                        <span className="text-gold">12,450,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Дерево добыто:</span>
                        <span className="text-green-400">892,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Камень добыт:</span>
                        <span className="text-gray-400">654,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Энергия произведена:</span>
                        <span className="text-blue-400">1,234,000</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4">Настройки цен</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Цена острова 2:</span>
                        <Input 
                          type="number" 
                          defaultValue="50000" 
                          className="w-24 bg-slate-900 border-slate-600"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Цена острова 3:</span>
                        <Input 
                          type="number" 
                          defaultValue="100000" 
                          className="w-24 bg-slate-900 border-slate-600"
                        />
                      </div>
                      <Button size="sm" className="w-full bg-cyber-blue hover:bg-cyan-600 text-black">
                        Обновить цены
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyber-blue">Управление контентом</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Icon name="FileText" className="h-16 w-16 text-cyber-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Система контента</h3>
                  <p className="text-slate-400 mb-4">Функция в разработке</p>
                  <Button disabled>Добавить контент</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyber-blue">Настройки сервера</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-4">Общие настройки</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Максимум игроков:</span>
                        <Input 
                          type="number" 
                          defaultValue="10000" 
                          className="w-24 bg-slate-900 border-slate-600"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Режим обслуживания:</span>
                        <Button size="sm" variant="outline">Выключен</Button>
                      </div>
                    </div>
                  </div>
                  <Separator className="bg-slate-700" />
                  <div>
                    <h3 className="font-bold mb-4">Игровые настройки</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Скорость добычи ресурсов:</span>
                        <Input 
                          type="number" 
                          step="0.1"
                          defaultValue="1.0" 
                          className="w-24 bg-slate-900 border-slate-600"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Множитель опыта:</span>
                        <Input 
                          type="number" 
                          step="0.1"
                          defaultValue="1.0" 
                          className="w-24 bg-slate-900 border-slate-600"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );

  if (!isLoggedIn && currentView !== 'landing') {
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
              onClick={handleLogin}
              className="w-full bg-cyber-blue hover:bg-cyan-600 text-black font-bold"
            >
              Войти в игру
            </Button>
            <div className="text-center">
              <Button 
                variant="link" 
                className="text-cyber-blue"
                onClick={() => setCurrentView('landing')}
              >
                Назад на главную
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative">
      {currentView === 'landing' && renderLanding()}
      {currentView === 'game' && renderGame()}
      {currentView === 'admin' && renderAdmin()}
      
      {/* Admin Access Button */}
      {isLoggedIn && currentView === 'game' && (
        <Button
          onClick={() => setCurrentView('admin')}
          className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white"
          size="sm"
        >
          <Icon name="Settings" className="mr-2" size={16} />
          Админ
        </Button>
      )}
    </div>
  );
}