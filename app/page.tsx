import { Button } from "@/components/ui/button"
import { Play, Youtube } from "lucide-react"

// Spotify Icon Component
const SpotifyIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.32 11.28-1.08 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[20rem] font-black text-primary/5 leading-none tracking-tighter">PODCAST</h1>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header - only show on mobile */}
        <header className="text-center mb-8 lg:hidden">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
              Contenido de Desarrollo Personal
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-4">El próximo paso</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            by <span className="text-accent font-semibold">Joaco Tomé</span>
          </p>
        </header>

        <main className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto relative">
            {/* Desktop layout */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-12 items-center min-h-[80vh]">
              {/* Left side - Spotify link */}
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-green-500">Escucha en</h3>
                  <a
                    href="https://open.spotify.com/show/528Kkz5QuO6SsQ4WQpEd2X?si=83c296e5b80f46e4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-6 px-8 rounded-xl transition-all duration-300 hover:scale-105 text-lg shadow-lg"
                    >
                      <SpotifyIcon />
                      Spotify
                    </Button>
                  </a>
                </div>
              </div>

              {/* Center - Clickable Phone mockup */}
              <div className="flex justify-center">
                <a
                  href="https://open.spotify.com/show/528Kkz5QuO6SsQ4WQpEd2X?si=83c296e5b80f46e4"
            target="_blank"
            rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="relative float-animation">
                    {/* Phone frame */}
                    <div className="relative w-80 h-[650px] bg-card border-8 border-border rounded-[3rem] phone-glow overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                      {/* Screen */}
                      <div className="absolute inset-4 bg-background rounded-[2rem] overflow-hidden">
                        {/* Status bar */}
                        <div className="flex justify-between items-center px-6 py-3 text-xs text-muted-foreground">
                          <span>9:41</span>
                          <div className="flex gap-1">
                            <div className="w-4 h-2 bg-primary rounded-sm"></div>
                            <div className="w-4 h-2 bg-primary rounded-sm"></div>
                            <div className="w-4 h-2 bg-primary rounded-sm"></div>
                            <div className="w-6 h-2 bg-primary rounded-sm"></div>
                          </div>
                        </div>

                        {/* Podcast interface */}
                        <div className="px-6 py-4 space-y-6">
                          {/* Podcast cover */}
                          <div className="flex justify-center">
                            <div className="w-52 h-52 rounded-2xl overflow-hidden shadow-2xl">
                              <img
                                src="/podcast-cover.png"
                                alt="El próximo paso podcast cover"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          <div className="text-center space-y-2">
                            <h4 className="font-bold text-foreground text-lg">No podés saltearte capítulos</h4>
                            <p className="text-muted-foreground text-sm">El próximo paso • Episodio 4</p>
                          </div>

                          <div className="space-y-2">
                            <div className="w-full bg-muted rounded-full h-1">
                              <div className="bg-primary h-1 rounded-full w-1/4"></div>
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>4:10</span>
                              <span>16:40</span>
                            </div>
                          </div>

                          {/* Controls */}
                          <div className="flex justify-center items-center gap-8">
                            <button className="w-8 h-8 text-muted-foreground">
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                              </svg>
                            </button>
                            <button className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg pulse-glow">
                              <Play className="w-8 h-8 ml-1" fill="currentColor" />
                            </button>
                            <button className="w-8 h-8 text-muted-foreground">
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 18h2V6h-2zm-3.5-6L4 6v12z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Home indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-border rounded-full"></div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-red-500">Mira en</h3>
                  <div className="w-full max-w-sm">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-4">
                      <iframe
                        src="https://www.youtube.com/embed/OLweDbBeCDQ?start=67"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <a
                      href="https://www.youtube.com/@joaco_tome"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 bg-transparent shadow-lg"
                      >
                        <Youtube className="w-6 h-6 mr-3" />
                        Ver más videos
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile layout */}
            <div className="lg:hidden w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-balance">Conversaciones que te hacen avanzar</h2>
                  <p className="text-lg text-muted-foreground text-balance leading-relaxed">
                      Reflexiones honestas sobre cómo crecer, equivocarse y seguir escribiendo tu propia historia.
                  </p>
                </div>

                {/* Social links */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground mb-6">Escucha donde prefieras:</h3>

                  {/* Primary Spotify button */}
                  <a
                    href="https://open.spotify.com/show/528Kkz5QuO6SsQ4WQpEd2X?si=83c296e5b80f46e4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <SpotifyIcon />
                      Escuchar en Spotify
                    </Button>
                  </a>

                  {/* Secondary YouTube button */}
                  <a
                    href="https://www.youtube.com/@joaco_tome"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 bg-transparent shadow-lg"
                    >
                      <Youtube className="w-6 h-6 mr-3" />
                      Ver en YouTube
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right side - Phone mockup */}
              <div className="flex justify-center order-1 lg:order-2">
                <a
                  href="https://open.spotify.com/show/528Kkz5QuO6SsQ4WQpEd2X?si=83c296e5b80f46e4"
          target="_blank"
          rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="relative float-animation">
                    {/* Phone frame */}
                    <div className="relative w-72 h-[600px] bg-card border-8 border-border rounded-[3rem] phone-glow overflow-hidden">
                      {/* Screen */}
                      <div className="absolute inset-4 bg-background rounded-[2rem] overflow-hidden">
                        {/* Status bar */}
                        <div className="flex justify-between items-center px-6 py-3 text-xs text-muted-foreground">
                          <span>9:41</span>
                          <div className="flex gap-1">
                            <div className="w-4 h-2 bg-primary rounded-sm"></div>
                            <div className="w-4 h-2 bg-primary rounded-sm"></div>
                            <div className="w-4 h-2 bg-primary rounded-sm"></div>
                            <div className="w-6 h-2 bg-primary rounded-sm"></div>
                          </div>
                        </div>

                        {/* Podcast interface */}
                        <div className="px-6 py-4 space-y-6">
                          {/* Podcast cover */}
                          <div className="flex justify-center">
                            <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl">
                              <img
                                src="/podcast-cover.png"
                                alt="El próximo paso podcast cover"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          <div className="text-center space-y-2">
                            <h4 className="font-bold text-foreground text-lg">No podés saltearte capítulos</h4>
                            <p className="text-muted-foreground text-sm">El próximo paso • Episodio 4</p>
                          </div>

                          <div className="space-y-2">
                            <div className="w-full bg-muted rounded-full h-1">
                              <div className="bg-primary h-1 rounded-full w-1/4"></div>
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>4:10</span>
                              <span>16:40</span>
                            </div>
                          </div>

                          {/* Controls */}
                          <div className="flex justify-center items-center gap-8">
                            <button className="w-8 h-8 text-muted-foreground">
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                              </svg>
                            </button>
                            <button className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
                              <Play className="w-8 h-8 ml-1" fill="currentColor" />
                            </button>
                            <button className="w-8 h-8 text-muted-foreground">
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 18h2V6h-2zm-3.5-6L4 6v12z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Home indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-border rounded-full"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <footer className="text-center py-8 border-t border-border/50 mt-12">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="hidden lg:block">
              <h2 className="text-3xl font-bold text-balance mb-4">El próximo paso</h2>
              <p className="text-lg text-muted-foreground text-balance">
                by <span className="text-accent font-semibold">Joaco Tomé</span> • Conversaciones que te hacen avanzar
              </p>
            </div>
            <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>© 2025 Joaco Tomé • El próximo paso</span>
            </div>
          </div>
      </footer>
      </div>
    </div>
  )
}
