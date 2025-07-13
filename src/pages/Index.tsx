import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const recentMatches = [
    {
      id: 1,
      player: "ProGamer2024",
      opponent: "Bot",
      score: "3:1",
      type: "vs Bot",
      time: "15 мин назад",
    },
    {
      id: 2,
      player: "FootballKing",
      opponent: "SkillMaster",
      score: "2:0",
      type: "1v1",
      time: "1 час назад",
    },
    {
      id: 3,
      player: "ChampionLeague",
      opponent: "Bot",
      score: "4:2",
      type: "vs Bot",
      time: "2 часа назад",
    },
  ];

  const topPlayers = [
    { name: "ProGamer2024", rating: 2850, wins: 127, matches: 145 },
    { name: "FootballKing", rating: 2720, wins: 98, matches: 120 },
    { name: "SkillMaster", rating: 2680, wins: 89, matches: 108 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-orange-600">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="Trophy" className="text-orange-400" size={32} />
              <h1 className="text-2xl font-bold text-white font-orbitron">
                FC MOBILE
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-white/80 hover:text-orange-400 transition-colors"
              >
                Матчи
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-orange-400 transition-colors"
              >
                Рейтинги
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-orange-400 transition-colors"
              >
                Турниры
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-orange-400 transition-colors"
              >
                Профили
              </a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Добавить матч
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold text-white mb-6 font-orbitron animate-fade-in">
            ПОКАЖИ СВОИ
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 animate-pulse-scale">
              {" "}
              НАВЫКИ
            </span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto font-rubik animate-fade-in">
            Загружай результаты матчей FC Mobile, соревнуйся с игроками,
            участвуй в турнирах и становись чемпионом!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-rubik animate-glow hover:scale-105 transition-transform duration-300"
            >
              <Icon name="Plus" className="mr-2" size={20} />
              Загрузить результат
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
            >
              <Icon name="BarChart3" className="mr-2" size={20} />
              Посмотреть статистику
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Matches */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white">
              🔥 Последние матчи
            </h3>
            <Button
              variant="ghost"
              className="text-white hover:text-orange-400"
            >
              Все матчи <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentMatches.map((match) => (
              <Card
                key={match.id}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-orange-500/20 text-orange-300"
                    >
                      {match.type}
                    </Badge>
                    <span className="text-white/60 text-sm">{match.time}</span>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-semibold mb-2">
                      {match.player}
                    </div>
                    <div className="text-2xl font-bold text-orange-400 mb-2">
                      {match.score}
                    </div>
                    <div className="text-white/60">{match.opponent}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Players */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-8">👑 Топ игроки</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {topPlayers.map((player, index) => (
              <Card
                key={player.name}
                className="bg-white/10 backdrop-blur-sm border-white/20"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white flex items-center">
                      <span className="text-2xl mr-3">
                        {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                      </span>
                      {player.name}
                    </CardTitle>
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold">
                      {player.rating}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-white/80">
                      <span>Побед:</span>
                      <span className="text-green-400 font-semibold">
                        {player.wins}
                      </span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Матчей:</span>
                      <span className="text-blue-400 font-semibold">
                        {player.matches}
                      </span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Винрейт:</span>
                      <span className="text-yellow-400 font-semibold">
                        {Math.round((player.wins / player.matches) * 100)}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            ⚡ Возможности платформы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/30 transition-colors">
                <Icon name="Gamepad2" className="text-orange-400" size={32} />
              </div>
              <h4 className="text-white font-semibold mb-2">
                Матчи против ботов
              </h4>
              <p className="text-white/60 text-sm">
                Тренируйся против ИИ и улучшай навыки
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                <Icon name="Users" className="text-blue-400" size={32} />
              </div>
              <h4 className="text-white font-semibold mb-2">1v1 матчи</h4>
              <p className="text-white/60 text-sm">
                Сражайся с реальными игроками
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
                <Icon name="Trophy" className="text-green-400" size={32} />
              </div>
              <h4 className="text-white font-semibold mb-2">Турниры</h4>
              <p className="text-white/60 text-sm">
                Участвуй в соревнованиях и выигрывай призы
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors">
                <Icon name="BarChart3" className="text-purple-400" size={32} />
              </div>
              <h4 className="text-white font-semibold mb-2">Статистика</h4>
              <p className="text-white/60 text-sm">
                Отслеживай свой прогресс и результаты
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60">
            © 2024 FC Mobile Community. Создано для истинных фанатов футбола ⚽
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
