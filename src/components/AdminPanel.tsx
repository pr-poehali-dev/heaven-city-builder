import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface AdminPanelProps {
  onBackToGame: () => void;
}

export default function AdminPanel({ onBackToGame }: AdminPanelProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space to-slate-900 text-white font-orbitron">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-cyber-blue">АДМИН ПАНЕЛЬ</h1>
          <Button 
            variant="outline" 
            onClick={onBackToGame}
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
}