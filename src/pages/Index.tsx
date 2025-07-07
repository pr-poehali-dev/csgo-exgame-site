import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [adminForm, setAdminForm] = useState({
    name: "",
    nickname: "",
    age: "",
    experience: "",
    steamProfile: "",
  });

  const handleAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет интеграция с Telegram
    alert(
      "Заявка отправлена! Уведомление отправлено в Telegram @suport_exgame",
    );
    setAdminForm({
      name: "",
      nickname: "",
      age: "",
      experience: "",
      steamProfile: "",
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("IP адрес скопирован в буфер обмена!");
    });
  };

  const banList = [
    {
      name: "Player1",
      steamId: "STEAM_0:1:123456",
      reason: "Читы",
      date: "2024-01-15",
      admin: "Admin1",
    },
    {
      name: "Player2",
      steamId: "STEAM_0:0:789012",
      reason: "Токсичность",
      date: "2024-01-14",
      admin: "Admin2",
    },
    {
      name: "Player3",
      steamId: "STEAM_0:1:345678",
      reason: "Спам",
      date: "2024-01-13",
      admin: "Admin1",
    },
  ];

  const privileges = [
    {
      name: "VIP ULTRA",
      price: "400₽",
      duration: "месяц",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      name: "VIP PREMIUM",
      price: "250₽",
      duration: "месяц",
      color: "bg-gradient-to-r from-purple-400 to-purple-600",
    },
    {
      name: "VIP БОМЖ",
      price: "130₽",
      duration: "месяц",
      color: "bg-gradient-to-r from-green-400 to-green-600",
    },
    {
      name: "Админ (обычный)",
      price: "350₽",
      duration: "месяц",
      color: "bg-gradient-to-r from-red-400 to-red-600",
    },
    {
      name: "Bunnyhop",
      price: "100₽",
      duration: "месяц",
      color: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
  ];

  const servers = [
    {
      name: "Паблик",
      map: "de_mirage_dusk",
      ip: "185.194.107.196:27415",
      players: "32/32",
      status: "online",
      type: "Классический",
    },
    {
      name: "AWP Сервер",
      map: "awp_lego_2",
      ip: "185.194.107.195:27315",
      players: "16/16",
      status: "online",
      type: "AWP Only",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-orange-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="Target" className="text-orange-500" size={32} />
              <h1 className="text-3xl font-bold text-white font-['Orbitron']">
                EXGAME
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge
                variant="outline"
                className="border-green-500 text-green-500"
              >
                <Icon name="Circle" className="w-2 h-2 mr-1 fill-current" />
                Онлайн: 47/64
              </Badge>
              <Badge
                variant="outline"
                className="border-orange-500 text-orange-500"
              >
                cs_dust2
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl font-bold mb-6 font-['Orbitron'] bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              EXGAME SERVER
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Лучший CS:GO сервер с уникальными возможностями и справедливой
              администрацией
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-orange-500 text-white px-4 py-2">
                <Icon name="Shield" className="w-4 h-4 mr-2" />
                Античит
              </Badge>
              <Badge className="bg-green-500 text-white px-4 py-2">
                <Icon name="Crown" className="w-4 h-4 mr-2" />
                VIP Система
              </Badge>
              <Badge className="bg-blue-500 text-white px-4 py-2">
                <Icon name="Users" className="w-4 h-4 mr-2" />
                Активное комьюнити
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="servers" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800 border border-orange-500/20">
            <TabsTrigger
              value="servers"
              className="data-[state=active]:bg-orange-500"
            >
              Серверы
            </TabsTrigger>
            <TabsTrigger
              value="privileges"
              className="data-[state=active]:bg-orange-500"
            >
              Привилегии
            </TabsTrigger>
            <TabsTrigger
              value="banlist"
              className="data-[state=active]:bg-orange-500"
            >
              Бан-лист
            </TabsTrigger>
            <TabsTrigger
              value="admin"
              className="data-[state=active]:bg-orange-500"
            >
              Заявка на админа
            </TabsTrigger>
          </TabsList>

          {/* Servers Tab */}
          <TabsContent value="servers" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon
                    name="Server"
                    className="w-5 h-5 mr-2 text-orange-500"
                  />
                  Список серверов
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Выберите сервер для игры. Нажмите на IP адрес, чтобы
                  скопировать его
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {servers.map((server, index) => (
                    <Card
                      key={index}
                      className="bg-gray-700/50 border-gray-600 hover:border-orange-500/50 transition-all duration-300"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-white text-lg">
                            {server.name}
                          </CardTitle>
                          <Badge
                            className={
                              server.status === "online"
                                ? "bg-green-500"
                                : "bg-red-500"
                            }
                          >
                            <Icon
                              name="Circle"
                              className="w-2 h-2 mr-1 fill-current"
                            />
                            {server.status === "online" ? "Онлайн" : "Оффлайн"}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Map" className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{server.map}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Тип:</span>
                            <Badge
                              variant="outline"
                              className="border-orange-500 text-orange-500"
                            >
                              {server.type}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Игроки:</span>
                            <span className="text-white font-mono">
                              {server.players}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">IP адрес:</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(server.ip)}
                              className="text-orange-500 hover:text-orange-400 hover:bg-orange-500/10 font-mono"
                            >
                              <Icon name="Copy" className="w-4 h-4 mr-2" />
                              {server.ip}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privileges Tab */}
          <TabsContent value="privileges" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {privileges.map((privilege, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/50 border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  <CardHeader>
                    <div
                      className={`w-full h-3 rounded-t-lg ${privilege.color}`}
                    ></div>
                    <CardTitle className="text-white text-center">
                      {privilege.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">
                      {privilege.price}
                    </div>
                    <div className="text-gray-400 mb-4">
                      за {privilege.duration}
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Купить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-gray-800/50 border-gray-700 mt-8">
              <CardContent className="text-center py-6">
                <p className="text-gray-300 mb-2">
                  Купить привилегии можно в Telegram:
                </p>
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  <Icon name="Send" className="w-4 h-4 mr-2" />
                  @suport_exgame
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ban List Tab */}
          <TabsContent value="banlist" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="Ban" className="w-5 h-5 mr-2 text-red-500" />
                  Список заблокированных игроков
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700">
                      <TableHead className="text-gray-300">Имя</TableHead>
                      <TableHead className="text-gray-300">Steam ID</TableHead>
                      <TableHead className="text-gray-300">Причина</TableHead>
                      <TableHead className="text-gray-300">Дата</TableHead>
                      <TableHead className="text-gray-300">Админ</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {banList.map((ban, index) => (
                      <TableRow key={index} className="border-gray-700">
                        <TableCell className="text-white">{ban.name}</TableCell>
                        <TableCell className="text-gray-300 font-mono text-sm">
                          {ban.steamId}
                        </TableCell>
                        <TableCell>
                          <Badge variant="destructive">{ban.reason}</Badge>
                        </TableCell>
                        <TableCell className="text-gray-300">
                          {ban.date}
                        </TableCell>
                        <TableCell className="text-gray-300">
                          {ban.admin}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Admin Application Tab */}
          <TabsContent value="admin" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon
                    name="UserCheck"
                    className="w-5 h-5 mr-2 text-green-500"
                  />
                  Заявка на администратора
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Заполните форму для подачи заявки на должность администратора
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAdminSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">
                        Имя
                      </label>
                      <Input
                        value={adminForm.name}
                        onChange={(e) =>
                          setAdminForm({ ...adminForm, name: e.target.value })
                        }
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">
                        Ник в игре
                      </label>
                      <Input
                        value={adminForm.nickname}
                        onChange={(e) =>
                          setAdminForm({
                            ...adminForm,
                            nickname: e.target.value,
                          })
                        }
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="Ваш игровой ник"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">
                        Возраст
                      </label>
                      <Input
                        type="number"
                        value={adminForm.age}
                        onChange={(e) =>
                          setAdminForm({ ...adminForm, age: e.target.value })
                        }
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="Ваш возраст"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">
                        Steam профиль
                      </label>
                      <Input
                        value={adminForm.steamProfile}
                        onChange={(e) =>
                          setAdminForm({
                            ...adminForm,
                            steamProfile: e.target.value,
                          })
                        }
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="Ссылка на Steam профиль"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      Опыт в администрации
                    </label>
                    <Textarea
                      value={adminForm.experience}
                      onChange={(e) =>
                        setAdminForm({
                          ...adminForm,
                          experience: e.target.value,
                        })
                      }
                      className="bg-gray-700 border-gray-600 text-white"
                      placeholder="Расскажите о своем опыте администрирования серверов"
                      rows={4}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                  >
                    <Icon name="Send" className="w-4 h-4 mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-orange-500/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 EXGAME Server. Все права защищены.
          </p>
          <p className="text-gray-500 mt-2">Для связи: @suport_exgame</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
