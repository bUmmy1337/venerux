
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Server, Zap, Shield, HeadphonesIcon, Clock, Users, Globe, Award, Star, ArrowRight, Play, Gamepad2, Trophy, Rocket, Monitor, HardDrive, Cpu, MemoryStick } from "lucide-react";

const Index = () => {
  const plans = [
    {
      name: "Нептун",
      emoji: "🔵",
      location: "Франкфурт",
      processor: "Intel Core i9-12900K",
      price: "0",
      ram: "1 ГБ",
      cpu: "100%",
      storage: "5 ГБ",
      slots: "Неограниченно",
      description: "Ледяной гигант максимальной мощности!",
      popular: false,
      isFree: true
    },
    {
      name: "Астероид",
      emoji: "🌑",
      location: "Франкфурт",
      processor: "Ryzen 9 3900",
      price: "1",
      priceRub: "80₽",
      ram: "1 ГБ",
      cpu: "100%",
      storage: "10 ГБ",
      slots: "Неограниченно",
      description: "Малое небесное тело больших возможностей.",
      popular: false
    },
    {
      name: "Луна",
      emoji: "🌙",
      location: "Москва",
      processor: "AMD EPYC 7551P",
      price: "3",
      priceRub: "240₽",
      ram: "2 ГБ",
      cpu: "200%",
      storage: "25 ГБ",
      slots: "Неограниченно",
      description: "Естественный спутник для ваших проектов!",
      popular: false
    },
    {
      name: "Галактика",
      emoji: "🌌",
      location: "Франкфурт",
      processor: "Ryzen 9 3900",
      price: "3.5",
      priceRub: "280₽",
      ram: "4 ГБ",
      cpu: "250%",
      storage: "40 ГБ",
      slots: "Неограниченно",
      description: "Спиральная структура вашего проекта!",
      popular: true
    },
    {
      name: "Юпитер",
      emoji: "🪐",
      location: "Москва",
      processor: "AMD EPYC 7551P",
      price: "6",
      priceRub: "480₽",
      ram: "4 ГБ",
      cpu: "400%",
      storage: "50 ГБ",
      slots: "Неограниченно",
      description: "Газовый гигант производительности!",
      popular: false
    },
    {
      name: "Квазар",
      emoji: "💫",
      location: "Франкфурт",
      processor: "Ryzen 9 3900",
      price: "7",
      priceRub: "560₽",
      ram: "8 ГБ",
      cpu: "500%",
      storage: "80 ГБ",
      slots: "Неограниченно",
      description: "Сверхмассивная энергия для серьезных задач!",
      popular: false
    },
    {
      name: "Вселенная",
      emoji: "🌠",
      location: "Франкфурт",
      processor: "Ryzen 9 3900",
      price: "12",
      priceRub: "960₽",
      ram: "16 ГБ",
      cpu: "750%",
      storage: "160 ГБ",
      slots: "Неограниченно",
      description: "Бесконечные возможности космоса!",
      popular: false
    },
    {
      name: "Большой Взрыв",
      emoji: "💥",
      location: "Франкфурт",
      processor: "Ryzen 9 3900",
      price: "20",
      priceRub: "1600₽",
      ram: "24 ГБ",
      cpu: "1000%",
      storage: "220 ГБ",
      slots: "Неограниченно",
      description: "Рождение новой вселенной серверов!",
      popular: false
    }
  ];

  const features = [
    {
      icon: Server,
      title: "Мощные серверы",
      description: "Высокопроизводительное оборудование для стабильной игры"
    },
    {
      icon: Zap,
      title: "Мгновенная настройка",
      description: "Ваш сервер будет готов к игре за 5 минут"
    },
    {
      icon: Shield,
      title: "Максимальная защита",
      description: "DDoS защита и регулярные резервные копии"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 поддержка",
      description: "Наша команда готова помочь в любое время"
    }
  ];

  const testimonials = [
    {
      name: "Алексей",
      text: "Отличный хостинг! Сервер работает стабильно, поддержка быстро отвечает.",
      rating: 5
    },
    {
      name: "Мария",
      text: "Пользуюсь уже полгода, очень довольна качеством и ценой.",
      rating: 5
    },
    {
      name: "Дмитрий",
      text: "Лучший хостинг для Minecraft в России! Рекомендую всем.",
      rating: 5
    }
  ];

  const stats = [
    { number: "10K+", label: "Активных серверов", icon: Server },
    { number: "50K+", label: "Довольных игроков", icon: Users },
    { number: "99.9%", label: "Время работы", icon: Clock },
    { number: "24/7", label: "Техподдержка", icon: HeadphonesIcon }
  ];

  const gameTypes = [
    {
      name: "Vanilla",
      description: "Классическое выживание",
      icon: Gamepad2,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Paper",
      description: "Оптимизированное и стабильное ядро майнкрафт",
      icon: Rocket,
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Purpur",
      description: "Ядро с интересными и захватывающими игровыми функциями",
      icon: Trophy,
      color: "from-red-500 to-pink-600"
    },
    {
      name: "Forge",
      description: "Разнообразные модификации игры",
      icon: Star,
      color: "from-purple-500 to-violet-600"
    }
  ];

  const locations = [
    {
      name: "Москва",
      flag: "🇷🇺",
      ping: "< 10ms",
      description: "Низкий пинг для игроков из России"
    },
    {
      name: "Франкфурт",
      flag: "🇩🇪",
      ping: "< 50ms",
      description: "Стабильное соединение по всей Европе"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 font-unbounded">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                VENERUX
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                  Возможности
                </a>
                <a href="#pricing" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                  Тарифы
                </a>
                <a href="#locations" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                  Локации
                </a>
                <a href="#game-types" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                  Широкий выбор ядер
                </a>
                <a href="#testimonials" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                  Отзывы
                </a>
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 font-bold">
                  НАЧАТЬ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 animate-fade-in tracking-tight">
              КОСМИЧЕСКИЙ 
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent animate-glow">
                MINECRAFT
              </span>
              <br />
              ХОСТИНГ
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in font-medium">
              Отправьтесь в космическое путешествие с VENERUX — исследуйте вселенную серверов 
              от планет до квазаров. Запустите свой сервер за 5 минут!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4 font-bold tracking-wide">
                <Rocket className="w-5 h-5 mr-2" />
                ЗАПУСТИТЬ В КОСМОС
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 text-lg px-8 py-4 font-bold">
                ИССЛЕДОВАТЬ ГАЛАКТИКУ
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Enhanced decorative elements */}
        <div className="absolute top-1/2 left-4 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-30 animate-float blur-sm"></div>
        <div className="absolute top-1/3 right-8 w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-30 animate-float blur-sm" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full opacity-40 animate-float blur-sm" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-14 h-14 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-35 animate-float blur-sm" style={{animationDelay: '3s'}}></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-in-left" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              НАШИ <span className="text-orange-500">ЛОКАЦИИ</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Серверы в лучших дата-центрах мира для минимального пинга
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-300 hover:scale-105 animate-bounce-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">{location.flag}</div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{location.name}</h3>
                  <div className="text-3xl font-bold text-orange-500 mb-2">{location.ping}</div>
                  <p className="text-gray-600 font-medium">{location.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              ПОЧЕМУ ВЫБИРАЮТ <span className="text-orange-500">VENERUX</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Мы предоставляем лучший игровой опыт благодаря современным технологиям и заботе о клиентах
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-300 hover:scale-105 animate-bounce-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 font-medium">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Game Types Section */}
      <section id="game-types" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              РЕЖИМЫ <span className="text-orange-500">ИГРЫ</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Поддерживаем все популярные режимы игры Minecraft
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameTypes.map((gameType, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-300 hover:scale-105 animate-slide-in-right overflow-hidden" style={{animationDelay: `${index * 0.15}s`}}>
                <CardContent className="p-6 text-center">
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-r ${gameType.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <gameType.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{gameType.name}</h3>
                  <p className="text-gray-600 font-medium">{gameType.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              КОСМИЧЕСКИЕ <span className="text-orange-500">ТАРИФЫ</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              От планет до вселенной — выберите свою орбиту
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-4 ring-orange-500 scale-105 shadow-2xl' : 'shadow-lg'} hover:shadow-xl transition-all duration-300 animate-bounce-in`} style={{animationDelay: `${index * 0.1}s`}}>
                {plan.popular && (
                  <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-4 py-1 text-sm">
                    ПОПУЛЯРНЫЙ
                  </Badge>
                )}
                <CardHeader className="text-center pb-6">
                  <div className="text-5xl mb-4">{plan.emoji}</div>
                  <CardTitle className="text-xl font-black">{plan.name}</CardTitle>
                  <div className="mt-4">
                    {plan.isFree ? (
                      <span className="text-3xl font-black text-green-500">БЕСПЛАТНО</span>
                    ) : (
                      <>
                        <span className="text-3xl font-black text-orange-500">${plan.price}</span>
                        <span className="text-gray-600 font-bold">/мес</span>
                        <div className="text-sm text-gray-500 font-medium">({plan.priceRub})</div>
                      </>
                    )}
                  </div>
                  <div className="flex items-center justify-center mt-2 text-sm text-gray-600 font-medium">
                    <Monitor className="w-4 h-4 mr-1" />
                    {plan.location}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-center text-gray-600 font-medium text-sm italic">"{plan.description}"</p>
                  
                  <div className="text-xs text-gray-500 text-center font-medium">{plan.processor}</div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center">
                      <MemoryStick className="w-4 h-4 text-orange-500 mr-2" />
                      <span className="font-bold">{plan.ram}</span>
                    </div>
                    <div className="flex items-center">
                      <Cpu className="w-4 h-4 text-orange-500 mr-2" />
                      <span className="font-bold">{plan.cpu}</span>
                    </div>
                    <div className="flex items-center">
                      <HardDrive className="w-4 h-4 text-orange-500 mr-2" />
                      <span className="font-bold">{plan.storage}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-orange-500 mr-2" />
                      <span className="font-bold text-xs">{plan.slots}</span>
                    </div>
                  </div>
                  
                  <Button className={`w-full py-3 font-bold ${plan.popular ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg' : plan.isFree ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-800 hover:bg-gray-900'}`}>
                    ВЫБРАТЬ ТАРИФ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              ЧТО ГОВОРЯТ НАШИ <span className="text-orange-500">КЛИЕНТЫ</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-300 animate-slide-in-left" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="pt-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-orange-400 text-orange-400 mr-1" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 font-medium text-lg">"{testimonial.text}"</p>
                  <p className="font-bold text-orange-500 text-lg">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              ГОТОВЫ К ЗАПУСКУ?
            </h2>
            <p className="text-xl mb-8 opacity-90 font-medium max-w-2xl mx-auto">
              Присоединяйтесь к космической одиссее VENERUX и откройте новые миры
            </p>
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 text-xl px-12 py-4 font-black shadow-xl">
              <Rocket className="w-6 h-6 mr-3" />
              ЗАПУСТИТЬ В КОСМОС
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-3xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-6">
                VENERUX
              </h3>
              <p className="text-gray-400 font-medium">
                Надежный хостинг Minecraft серверов с лучшей производительностью.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">УСЛУГИ</h4>
              <ul className="space-y-3 text-gray-400 font-medium">
                <li>Minecraft хостинг</li>
                <li>VPS серверы</li>
                <li>Техническая поддержка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">ПОДДЕРЖКА</h4>
              <ul className="space-y-3 text-gray-400 font-medium">
                <li>База знаний</li>
                <li>Тикет система</li>
                <li>Discord сообщество</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">КОНТАКТЫ</h4>
              <ul className="space-y-3 text-gray-400 font-medium">
                <li>support@venerux.ru</li>
                <li>+7 (800) 123-45-67</li>
                <li>Telegram: @venerux</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 font-medium">
            <p>&copy; 2024 VENERUX. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
