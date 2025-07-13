import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Profile = () => {
  const userStats = {
    name: 'ProGamer2024',
    level: 42,
    rating: 2850,
    totalMatches: 145,
    wins: 127,
    losses: 18,
    goals: 324,
    assists: 89,
    cleanSheets: 23,
    currentStreak: 7,
    joinDate: '15 января 2024'
  };

  const recentMatches = [
    { opponent: 'SkillMaster', score: '3:1', result: 'win', date: '13 июля', type: '1v1' },
    { opponent: 'Bot Elite', score: '2:0', result: 'win', date: '12 июля', type: 'vs Bot' },
    { opponent: 'FootballKing', score: '1:2', result: 'loss', date: '11 июля', type: '1v1' },
    { opponent: 'Bot Hard', score: '4:0', result: 'win', date: '10 июля', type: 'vs Bot' },
    { opponent: 'ChampLeague', score: '2:1', result: 'win', date: '9 июля', type: '1v1' }
  ];

  const achievements = [
    { title: 'Новичок', description: 'Сыграл первый матч', icon: 'Play', unlocked: true },
    { title: 'Серия побед', description: '5 побед подряд', icon: 'TrendingUp', unlocked: true },
    { title: 'Голеадор', description: '100+ голов', icon: 'Target', unlocked: true },
    { title: 'Мастер', description: 'Рейтинг 2500+', icon: 'Crown', unlocked: true },
    { title: 'Легенда', description: 'Рейтинг 3000+', icon: 'Star', unlocked: false },
    { title: 'Чемпион', description: 'Выиграл турнир', icon: 'Trophy', unlocked: false }
  ];

  const winRate = Math.round((userStats.wins / userStats.totalMatches) * 100);
  const nextLevelExp = (userStats.level + 1) * 100;
  const currentExp = userStats.level * 100 + 75;
  const expProgress = (currentExp % 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-orange-600">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="Trophy" className="text-orange-400" size={32} />
              <h1 className="text-2xl font-bold text-white font-orbitron">FC MOBILE</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-white/80 hover:text-orange-400 transition-colors">Главная</a>
              <a href="#" className="text-white/80 hover:text-orange-400 transition-colors">Матчи</a>
              <a href="#" className="text-orange-400">Профиль</a>
              <a href="#" className="text-white/80 hover:text-orange-400 transition-colors">О создателе</a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Добавить матч
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-4xl font-bold text-black">
                  {userStats.name.charAt(0)}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-4xl font-bold text-white font-orbitron mb-2">{userStats.name}</h2>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg px-4 py-2">
                      Рейтинг: {userStats.rating}
                    </Badge>
                    <Badge variant="outline" className="border-white text-white text-lg px-4 py-2">
                      Уровень {userStats.level}
                    </Badge>
                    <Badge variant="outline" className="border-green-400 text-green-400 text-lg px-4 py-2">
                      Серия: {userStats.currentStreak}
                    </Badge>
                  </div>
                  <p className="text-white/60 mb-4">В игре с {userStats.joinDate}</p>
                  <div className="w-full max-w-md mx-auto md:mx-0">
                    <div className="flex justify-between text-sm text-white/80 mb-2">
                      <span>Опыт до уровня {userStats.level + 1}</span>
                      <span>{expProgress}/100</span>
                    </div>
                    <Progress value={expProgress} className="h-3" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">{userStats.wins}</div>
              <div className="text-white/80">Побед</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">{userStats.losses}</div>
              <div className="text-white/80">Поражений</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">{winRate}%</div>
              <div className="text-white/80">Винрейт</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{userStats.goals}</div>
              <div className="text-white/80">Голов</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Matches */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white font-orbitron flex items-center">
                <Icon name="Clock" className="mr-2 text-orange-400" size={24} />
                Последние матчи
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMatches.map((match, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${match.result === 'win' ? 'bg-green-400' : 'bg-red-400'}`}></div>
                      <div>
                        <div className="text-white font-semibold">{match.opponent}</div>
                        <div className="text-white/60 text-sm">{match.type}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold">{match.score}</div>
                      <div className="text-white/60 text-sm">{match.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white font-orbitron flex items-center">
                <Icon name="Award" className="mr-2 text-orange-400" size={24} />
                Достижения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg border ${
                      achievement.unlocked 
                        ? 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-yellow-400/30' 
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon 
                        name={achievement.icon as any} 
                        className={achievement.unlocked ? 'text-yellow-400' : 'text-white/40'} 
                        size={24} 
                      />
                      <div className="flex-1">
                        <div className={`font-semibold ${achievement.unlocked ? 'text-white' : 'text-white/40'}`}>
                          {achievement.title}
                        </div>
                        <div className={`text-sm ${achievement.unlocked ? 'text-white/80' : 'text-white/30'}`}>
                          {achievement.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Stats */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mt-8">
          <CardHeader>
            <CardTitle className="text-white font-orbitron flex items-center">
              <Icon name="BarChart3" className="mr-2 text-orange-400" size={24} />
              Подробная статистика
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">{userStats.assists}</div>
                <div className="text-white/80">Передач</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">{userStats.cleanSheets}</div>
                <div className="text-white/80">Сухих матчей</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">{Math.round(userStats.goals / userStats.totalMatches * 10) / 10}</div>
                <div className="text-white/80">Голов за матч</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;