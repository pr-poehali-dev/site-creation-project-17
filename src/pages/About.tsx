import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const About = () => {
  const services = [
    {
      title: 'Индивидуальные тренировки',
      description: 'Персональные занятия по улучшению навыков в FC Mobile',
      price: '500₽/час',
      icon: 'User',
      features: ['Анализ игры', 'Тактические советы', 'Повышение рейтинга', 'Изучение новых приемов']
    },
    {
      title: 'Групповые мастер-классы',
      description: 'Обучение в группе до 5 человек',
      price: '300₽/час',
      icon: 'Users',
      features: ['Командная работа', 'Турнирная подготовка', 'Обмен опытом', 'Дружеская атмосфера']
    },
    {
      title: 'Анализ матчей',
      description: 'Разбор ваших игр с профессиональными советами',
      price: '200₽/матч',
      icon: 'BarChart3',
      features: ['Видео-разбор', 'Выявление ошибок', 'План улучшений', 'Письменный отчет']
    },
    {
      title: 'Подготовка к турнирам',
      description: 'Специальная программа для соревнований',
      price: '1000₽/неделя',
      icon: 'Trophy',
      features: ['Стратегия турнира', 'Психологическая подготовка', 'Тренировочные матчи', 'Сопровождение']
    }
  ];

  const testimonials = [
    {
      name: 'SkillMaster',
      rating: 2680,
      text: 'Благодаря тренировкам с создателем поднял рейтинг с 1800 до 2680! Отличные советы по тактике.',
      improvement: '+880 рейтинга'
    },
    {
      name: 'FootballKing',
      rating: 2720,
      text: 'Мастер-классы помогли понять командную игру. Теперь выигрываю большинство турниров!',
      improvement: 'Топ-3 в лиге'
    },
    {
      name: 'ChampLeague',
      rating: 2590,
      text: 'Анализ матчей показал все мои слабые места. Работаем над ними и результат уже виден.',
      improvement: '+450 рейтинга'
    }
  ];

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
              <a href="#" className="text-white/80 hover:text-orange-400 transition-colors">Профиль</a>
              <a href="#" className="text-orange-400">О создателе</a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="w-40 h-40 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-6xl font-bold text-black mx-auto mb-8">
            🎮
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 font-orbitron animate-fade-in">
            Алексей "ProCoach" Иванов
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto font-rubik">
            Профессиональный тренер FC Mobile с 5-летним опытом. Помог более 200 игрокам достичь рейтинга 2500+. 
            Мастер спорта по футболу и эксперт в мобильном киберспорте.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg px-6 py-3">
              Рейтинг: 3200+
            </Badge>
            <Badge variant="outline" className="border-green-400 text-green-400 text-lg px-6 py-3">
              5+ лет опыта
            </Badge>
            <Badge variant="outline" className="border-blue-400 text-blue-400 text-lg px-6 py-3">
              200+ учеников
            </Badge>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h3 className="text-4xl font-bold text-white text-center mb-12 font-orbitron">
            🎯 Услуги для новичков
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white font-orbitron flex items-center">
                      <Icon name={service.icon as any} className="mr-3 text-orange-400" size={28} />
                      {service.title}
                    </CardTitle>
                    <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-black font-bold text-lg">
                      {service.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4 font-rubik">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-white/70">
                        <Icon name="Check" className="mr-2 text-green-400" size={16} />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-rubik">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h3 className="text-4xl font-bold text-white text-center mb-12 font-orbitron">
            🌟 Истории успеха
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white font-orbitron">{testimonial.name}</CardTitle>
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold">
                      {testimonial.rating}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4 font-rubik italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-bold">{testimonial.improvement}</span>
                    <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map((star) => (
                        <Icon key={star} name="Star" className="fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievement Stats */}
        <section className="mb-16">
          <h3 className="text-4xl font-bold text-white text-center mb-12 font-orbitron">
            📊 Достижения тренера
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-8">
                <Icon name="Users" className="text-blue-400 mx-auto mb-4" size={48} />
                <div className="text-4xl font-bold text-blue-400 mb-2">200+</div>
                <div className="text-white/80">Учеников</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-8">
                <Icon name="Trophy" className="text-yellow-400 mx-auto mb-4" size={48} />
                <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-white/80">Побед в турнирах</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-8">
                <Icon name="TrendingUp" className="text-green-400 mx-auto mb-4" size={48} />
                <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-white/80">Успешных учеников</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-8">
                <Icon name="Clock" className="text-purple-400 mx-auto mb-4" size={48} />
                <div className="text-4xl font-bold text-purple-400 mb-2">5</div>
                <div className="text-white/80">Лет опыта</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-white mb-6 font-orbitron">
                🚀 Готов начать путь к вершине?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto font-rubik">
                Запишись на первую консультацию бесплатно! Обсудим твои цели и составим план развития.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-rubik animate-glow">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Написать в Telegram
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-rubik">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить
                </Button>
              </div>
              <div className="mt-8 text-white/60">
                <p>📱 Telegram: @ProCoachFC</p>
                <p>📞 Телефон: +7 (999) 123-45-67</p>
                <p>⏰ Работаю: Ежедневно с 10:00 до 22:00</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;