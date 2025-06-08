"use client";

import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Code,
  Palette,
  Smartphone,
  Globe,
  Star,
  Zap,
  Heart,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Eclipse Road | Conectando Marcas a Influencers",
      description:
        "Eclipse Road é um site que apresenta influenciadores digitais, com busca e filtros inteligentes. Feito com HTML, CSS, JavaScript, Node.js e banco de dados.",
      image: "/eclipseroad.png",
      technologies: ["Html", "Css", "JavaScript", "Node.js", "MongoDB"],
      github: "#",
      demo: "https://eclipseroad.com/",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Task Management App",
      description:
        "Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em equipe.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "#",
      demo: "#",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Weather Dashboard",
      description:
        "Dashboard interativo para visualização de dados meteorológicos com gráficos e previsões.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Vue.js", "Chart.js", "API Integration"],
      github: "#",
      demo: "#",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const skills = [
    {
      name: "Frontend",
      icon: Code,
      items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
      name: "Backend",
      icon: Globe,
      items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "API REST"],
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50",
    },
    {
      name: "Design",
      icon: Palette,
      items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"],
      color: "from-pink-400 to-purple-500",
      bgColor: "bg-pink-50",
    },
    {
      name: "Mobile",
      icon: Smartphone,
      items: ["React Native", "Flutter", "iOS", "Android"],
      color: "from-green-400 to-teal-500",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Cursor follower */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/20 backdrop-blur-md supports-[backdrop-filter]:bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-16 items-center justify-between">
          <Link
            href="#"
            className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse"
          >
            ✨ Meu Portfólio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {["Sobre", "Habilidades", "Projetos", "Contato"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-white/80 hover:text-white transition-all duration-300 hover:scale-110 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/40 backdrop-blur-md animate-slide-down">
            <nav className="container py-4 flex flex-col space-y-4">
              {["Sobre", "Habilidades", "Projetos", "Contato"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Image
                src="/gui-redondo.png"
                alt="Foto de perfil"
                width={150}
                height={150}
                className="relative rounded-full border-4 border-white/20 hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white animate-slide-up">
                Olá, eu sou{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-gradient-x">
                  Guilherme
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl animate-slide-up animation-delay-200">
                Desenvolvedor Full Stack apaixonado por criar{" "}
                <span className="text-yellow-400 font-semibold">
                  experiências digitais incríveis
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up animation-delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Mail className="mr-2 h-4 w-4" />
                Entre em Contato
                <Zap className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-black hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
                <Star className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Floating icons */}
            <div className="absolute inset-0 pointer-events-none">
              <Heart className="absolute top-20 left-10 w-6 h-6 text-pink-400 animate-bounce animation-delay-1000" />
              <Rocket className="absolute top-32 right-20 w-8 h-8 text-blue-400 animate-pulse animation-delay-2000" />
              <Star className="absolute bottom-20 left-20 w-5 h-5 text-yellow-400 animate-spin animation-delay-3000" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in">
              Sobre{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Mim
              </span>
            </h2>

            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 animate-slide-up">
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Sou um desenvolvedor full stack com 1 ano de experiência criando
                aplicações web. Tenho paixão por tecnologia e estou sempre em
                busca de aprender novas ferramentas e tendências do mercado.
                Minha stack inclui desenvolvimento frontend com HTML, CSS,
                JavaScript e React, backend com Node.js, além de integração com
                bancos de dados utilizando Prisma.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white border-0 px-4 py-2 text-sm hover:scale-110 transition-transform duration-300">
                  ⚡ 1 ano de experiência
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-400 to-pink-500 text-white border-0 px-4 py-2 text-sm hover:scale-110 transition-transform duration-300">
                  🚀 3+ projetos concluídos
                </Badge>
                <Badge className="bg-gradient-to-r from-yellow-400 to-red-500 text-white border-0 px-4 py-2 text-sm hover:scale-110 transition-transform duration-300">
                  💼 Freelancer
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white animate-fade-in">
              Minhas{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Habilidades
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${skill.color} p-4 mb-4 group-hover:rotate-12 transition-transform duration-500`}
                    >
                      <skill.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">
                      {skill.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skill.items.map((item, itemIndex) => (
                        <Badge
                          key={itemIndex}
                          variant="outline"
                          className="text-xs border-white/30 text-white/80 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white animate-fade-in">
              Meus{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Projetos
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-md border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-4 group animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}
                    ></div>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-white text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="bg-white/10 text-white/90 border-0 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/30 text-black hover:bg-white/10 hover:scale-105 transition-all duration-300"
                        asChild
                      >
                        <Link href={project.github}>
                          <Github className="mr-2 h-4 w-4" />
                          Código
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${project.color} text-white border-0 hover:scale-105 transition-all duration-300 shadow-lg`}
                        asChild
                      >
                        <Link href={project.demo}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white animate-fade-in">
              Entre em{" "}
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                Contato
              </span>
            </h2>
            <p className="text-lg text-white/80 animate-slide-up">
              Estou sempre aberto a novas oportunidades e projetos
              interessantes. Vamos conversar sobre como posso ajudar você! ✨
            </p>

            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 animate-slide-up">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Seu nome"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Seu email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      placeholder="Assunto"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Sua mensagem"
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    <Zap className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                    <Heart className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-6 animate-slide-up animation-delay-400">
              {[
                {
                  icon: Mail,
                  href: "mailto:joao@email.com",
                  color: "from-red-400 to-pink-500",
                },
                {
                  icon: Github,
                  href: "https://github.com",
                  color: "from-gray-400 to-gray-600",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  color: "from-blue-400 to-blue-600",
                },
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="border-white/30 text-black hover:bg-white/10 hover:scale-125 hover:-translate-y-2 transition-all duration-300 group"
                  asChild
                >
                  <Link href={social.href}>
                    <social.icon
                      className={`h-5 w-5 group-hover:bg-gradient-to-r group-hover:${social.color} group-hover:bg-clip-text group-hover:text-black`}
                    />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-black/20 backdrop-blur-md relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <p className="text-sm text-white/60">
            © 2025 Guilherme Vieira. Feito com{" "}
            <Heart className="inline w-4 h-4 text-red-400 animate-pulse" /> e
            muito ☕
          </p>
        </div>
      </footer>
    </div>
  );
}
