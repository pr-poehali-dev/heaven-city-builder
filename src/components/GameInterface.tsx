import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface GameStats {
  level: number;
  coins: number;
  wood: number;
  stone: number;
  energy: number;
  buildings: number;
  islands: number;
}

interface GameInterfaceProps {
  gameStats: GameStats;
  onAdminAccess: () => void;
}

export default function GameInterface({ gameStats, onAdminAccess }: GameInterfaceProps) {
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

  return (
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

      {/* Admin Access Button */}
      <Button
        onClick={onAdminAccess}
        className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white"
        size="sm"
      >
        <Icon name="Settings" className="mr-2" size={16} />
        Админ
      </Button>
    </div>
  );
}