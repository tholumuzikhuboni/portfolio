
import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Star, GitFork, ExternalLink, Github, Code, BookOpen, Layers, Terminal, Sparkles, Atom, Zap, Database, Rocket, CircleCheck } from "lucide-react";
import Navbar from "@/components/Navbar";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  created_at: string;
  updated_at: string;
}

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { toast } = useToast();
  const itemsPerPage = 6;
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const username = "tholumuzikhuboni";
  
  const fetchRepositories = async (): Promise<Repository[]> => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }
      return response.json();
    } catch (error) {
      console.error("Error fetching repositories:", error);
      throw error;
    }
  };

  const { data: repositories, isLoading, isError } = useQuery({
    queryKey: ["repositories", username],
    queryFn: fetchRepositories,
  });

  useEffect(() => {
    if (isError) {
      toast({
        title: "Error loading repositories",
        description: "Failed to load GitHub repositories. Please try again later.",
        variant: "destructive",
      });
    }
  }, [isError, toast]);

  useEffect(() => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  const totalPages = repositories ? Math.ceil(repositories.length / itemsPerPage) : 0;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRepos = repositories ? repositories.slice(startIndex, startIndex + itemsPerPage) : [];

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: "bg-yellow-400",
      TypeScript: "bg-blue-500",
      HTML: "bg-orange-600",
      CSS: "bg-blue-600",
      Python: "bg-green-600",
      Java: "bg-red-600",
      "C#": "bg-purple-600",
      PHP: "bg-indigo-600",
    };
    
    return colors[language] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-background pb-20 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-code-blue/15 via-code-purple/20 to-code-pink/15 blur-3xl animate-pulse" style={{ animationDuration: '15s' }} />
        <div className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-code-yellow/15 via-code-green/20 to-code-blue/15 blur-3xl animate-pulse" style={{ animationDuration: '18s', animationDelay: '2s' }} />
        <div className="absolute top-[40%] right-[40%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-code-red/5 via-code-purple/10 to-code-yellow/5 blur-3xl animate-pulse" style={{ animationDuration: '20s', animationDelay: '1s' }} />
        
        {/* Additional floating particles - increased count */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={`particle-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-br from-code-blue to-code-purple animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.3,
              animationDuration: `${8 + Math.random() * 12}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Enhanced ping dots - added more */}
        <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-code-green/60 animate-ping shadow-lg shadow-code-green/30" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[60%] right-[25%] w-3 h-3 rounded-full bg-code-yellow/60 animate-ping shadow-lg shadow-code-yellow/30" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] left-[40%] w-2 h-2 rounded-full bg-code-blue/60 animate-ping shadow-lg shadow-code-blue/30" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        <div className="absolute top-[35%] right-[40%] w-2 h-2 rounded-full bg-code-pink/60 animate-ping shadow-lg shadow-code-pink/30" style={{ animationDuration: '3.5s', animationDelay: '0.7s' }} />
        <div className="absolute bottom-[40%] right-[15%] w-3 h-3 rounded-full bg-code-purple/60 animate-ping shadow-lg shadow-code-purple/30" style={{ animationDuration: '4.5s', animationDelay: '1.2s' }} />
        <div className="absolute top-[15%] right-[35%] w-2 h-2 rounded-full bg-code-red/60 animate-ping shadow-lg shadow-code-red/30" style={{ animationDuration: '2.8s', animationDelay: '0.3s' }} />
        <div className="absolute bottom-[20%] right-[40%] w-3 h-3 rounded-full bg-code-blue/60 animate-ping shadow-lg shadow-code-blue/30" style={{ animationDuration: '3.2s', animationDelay: '1.2s' }} />
        <div className="absolute top-[75%] left-[20%] w-2 h-2 rounded-full bg-code-pink/60 animate-ping shadow-lg shadow-code-pink/30" style={{ animationDuration: '3.8s', animationDelay: '0.9s' }} />
        <div className="absolute top-[45%] left-[25%] w-3 h-3 rounded-full bg-code-yellow/60 animate-ping shadow-lg shadow-code-yellow/30" style={{ animationDuration: '4.2s', animationDelay: '1.5s' }} />
        <div className="absolute top-[85%] right-[15%] w-2 h-2 rounded-full bg-code-green/60 animate-ping shadow-lg shadow-code-green/30" style={{ animationDuration: '3.6s', animationDelay: '1.4s' }} />
        <div className="absolute top-[10%] left-[45%] w-3 h-3 rounded-full bg-code-blue/60 animate-ping shadow-lg shadow-code-blue/30" style={{ animationDuration: '4.3s', animationDelay: '0.6s' }} />
        <div className="absolute bottom-[15%] left-[60%] w-2 h-2 rounded-full bg-code-purple/60 animate-ping shadow-lg shadow-code-purple/30" style={{ animationDuration: '3.4s', animationDelay: '1.1s' }} />
        
        {/* Enhanced code symbols - added more */}
        <div className="absolute top-[25%] left-[30%] text-code-green/30 font-mono text-2xl animate-float shadow-lg shadow-code-green/10" style={{ animationDuration: '6s' }}>{'<>'}</div>
        <div className="absolute bottom-[35%] right-[30%] text-code-blue/30 font-mono text-2xl animate-float shadow-lg shadow-code-blue/10" style={{ animationDuration: '7s', animationDelay: '1s' }}>{'/>'}</div>
        <div className="absolute top-[45%] right-[20%] text-code-purple/30 font-mono text-2xl animate-float shadow-lg shadow-code-purple/10" style={{ animationDuration: '8s', animationDelay: '2s' }}>{'{ }'}</div>
        <div className="absolute top-[30%] left-[60%] text-code-yellow/30 font-mono text-2xl animate-float shadow-lg shadow-code-yellow/10" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>{'()'}</div>
        <div className="absolute bottom-[25%] left-[20%] text-code-pink/30 font-mono text-2xl animate-float shadow-lg shadow-code-pink/10" style={{ animationDuration: '7.5s', animationDelay: '1.5s' }}>{'[]'}</div>
        <div className="absolute top-[55%] left-[70%] text-code-green/30 font-mono text-2xl animate-float shadow-lg shadow-code-green/10" style={{ animationDuration: '6.5s', animationDelay: '1.2s' }}>{'='}</div>
        <div className="absolute bottom-[55%] right-[50%] text-code-blue/30 font-mono text-2xl animate-float shadow-lg shadow-code-blue/10" style={{ animationDuration: '7.2s', animationDelay: '0.8s' }}>{'&&'}</div>
        <div className="absolute top-[70%] right-[65%] text-code-purple/30 font-mono text-2xl animate-float shadow-lg shadow-code-purple/10" style={{ animationDuration: '8.3s', animationDelay: '1.3s' }}>{'||'}</div>
        <div className="absolute top-[38%] left-[38%] text-code-yellow/30 font-mono text-2xl animate-float shadow-lg shadow-code-yellow/10" style={{ animationDuration: '6.8s', animationDelay: '0.7s' }}>{'!='}</div>
        <div className="absolute bottom-[45%] right-[25%] text-code-red/30 font-mono text-2xl animate-float shadow-lg shadow-code-red/10" style={{ animationDuration: '7.7s', animationDelay: '1.8s' }}>{'let'}</div>
        <div className="absolute top-[62%] left-[52%] text-code-green/30 font-mono text-2xl animate-float shadow-lg shadow-code-green/10" style={{ animationDuration: '5.9s', animationDelay: '1.1s' }}>{'if()'}</div>
        <div className="absolute bottom-[65%] left-[75%] text-code-blue/30 font-mono text-2xl animate-float shadow-lg shadow-code-blue/10" style={{ animationDuration: '6.7s', animationDelay: '0.9s' }}>{'==='}</div>
        
        <div className="hidden lg:block absolute top-[15%] left-[5%] text-code-green/20 font-mono text-7xl animate-float" style={{ animationDuration: '25s' }}>&#123;</div>
        <div className="hidden lg:block absolute bottom-[15%] right-[5%] text-code-purple/20 font-mono text-7xl animate-float" style={{ animationDuration: '28s', animationDelay: '3s' }}>&#125;</div>
        <div className="hidden lg:block absolute top-[25%] right-[15%] text-code-blue/20 font-mono text-5xl animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}>&lt;/&gt;</div>
        <div className="hidden lg:block absolute bottom-[35%] left-[15%] text-code-yellow/20 font-mono text-5xl animate-float" style={{ animationDuration: '22s', animationDelay: '1.5s' }}>;;</div>
        <div className="hidden lg:block absolute top-[40%] right-[30%] text-code-pink/20 font-mono text-5xl animate-float" style={{ animationDuration: '24s', animationDelay: '2.8s' }}>function()</div>
        <div className="hidden lg:block absolute bottom-[55%] left-[35%] text-code-green/20 font-mono text-5xl animate-float" style={{ animationDuration: '26s', animationDelay: '1.2s' }}>return</div>
        
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {Array.from({ length: 45 }).map((_, i) => (
            <div 
              key={`matrix-${i}`}
              className="absolute font-mono animate-fall"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                color: [
                  'rgba(94, 234, 212, 0.6)',
                  'rgba(252, 211, 77, 0.6)',
                  'rgba(125, 211, 252, 0.6)',
                  'rgba(251, 113, 133, 0.6)',
                  'rgba(216, 180, 254, 0.6)',
                ][Math.floor(Math.random() * 5)],
                textShadow: '0 0 5px currentColor',
                animationDuration: `${15 + Math.random() * 20}s`,
                fontSize: `${Math.floor(Math.random() * 14) + 10}px`,
                opacity: 0.2 + Math.random() * 0.3
              }}
            >
              {['0', '1', '<>', '/>', '{}', '[]', '()', '=>', '!=', '+=', '||', '&&', 'JS', 'TS', 'let', 'var', 'const', 'map', 'filter', 'reduce', 'React', 'Node', 'API', 'async', 'await', 'import', 'export'][Math.floor(Math.random() * 27)]}
            </div>
          ))}
        </div>
        
        {/* Enhanced Lucide icons in background - added more Star and Atom icons */}
        <div className="absolute top-[40%] left-[10%] text-code-blue/20 animate-float" style={{ animationDuration: '18s' }}>
          <Database size={32} />
        </div>
        <div className="absolute bottom-[35%] right-[10%] text-code-green/20 animate-float" style={{ animationDuration: '22s', animationDelay: '2s' }}>
          <Rocket size={32} />
        </div>
        <div className="absolute top-[60%] left-[25%] text-code-purple/20 animate-float" style={{ animationDuration: '20s', animationDelay: '1s' }}>
          <Atom size={40} />
        </div>
        <div className="absolute top-[20%] right-[25%] text-code-yellow/20 animate-float" style={{ animationDuration: '19s', animationDelay: '3s' }}>
          <Zap size={32} />
        </div>
        <div className="absolute bottom-[45%] left-[35%] text-code-pink/20 animate-float" style={{ animationDuration: '21s', animationDelay: '1.5s' }}>
          <Terminal size={38} />
        </div>
        <div className="absolute top-[50%] right-[35%] text-code-blue/20 animate-float" style={{ animationDuration: '23s', animationDelay: '2.5s' }}>
          <BookOpen size={32} />
        </div>
        <div className="absolute bottom-[25%] right-[30%] text-code-green/20 animate-float" style={{ animationDuration: '19s', animationDelay: '0.8s' }}>
          <Layers size={35} />
        </div>
        <div className="absolute top-[30%] left-[45%] text-code-yellow/20 animate-float" style={{ animationDuration: '24s', animationDelay: '1.7s' }}>
          <Star size={42} />
        </div>
        <div className="absolute bottom-[60%] right-[15%] text-code-purple/20 animate-float" style={{ animationDuration: '22s', animationDelay: '3.2s' }}>
          <Sparkles size={36} />
        </div>
        <div className="absolute top-[80%] right-[40%] text-code-red/20 animate-float" style={{ animationDuration: '20s', animationDelay: '2.1s' }}>
          <CircleCheck size={34} />
        </div>
        {/* Additional Star and Atom icons */}
        <div className="absolute top-[15%] left-[65%] text-code-yellow/20 animate-float" style={{ animationDuration: '21s', animationDelay: '2.3s' }}>
          <Star size={48} />
        </div>
        <div className="absolute bottom-[75%] right-[45%] text-code-purple/20 animate-float" style={{ animationDuration: '23s', animationDelay: '1.2s' }}>
          <Atom size={46} />
        </div>
        <div className="absolute top-[65%] right-[22%] text-code-yellow/20 animate-float" style={{ animationDuration: '19s', animationDelay: '2.7s' }}>
          <Star size={38} />
        </div>
        <div className="absolute bottom-[30%] left-[55%] text-code-blue/20 animate-float" style={{ animationDuration: '22s', animationDelay: '1.9s' }}>
          <Atom size={42} />
        </div>
        <div className="absolute top-[85%] left-[30%] text-code-green/20 animate-float" style={{ animationDuration: '20s', animationDelay: '3.1s' }}>
          <Star size={44} />
        </div>
      </div>
      
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 relative z-10" ref={projectsRef}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 gradient-text font-mono">Projects</h1>
          </div>
          
          <div className="space-y-6">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="h-72 animate-pulse bg-muted/50">
                    <div className="h-full flex items-center justify-center">
                      <Code className="h-12 w-12 text-muted-foreground/20" />
                    </div>
                  </Card>
                ))}
              </div>
            ) : repositories && repositories.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedRepos.map((repo) => (
                  <ProjectCard key={repo.id} repo={repo} getLanguageColor={getLanguageColor} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Github className="mx-auto h-16 w-16 text-muted-foreground/30 mb-4" />
                <h3 className="text-xl font-medium mb-2">No repositories found</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  No GitHub repositories could be found. Check the username or try again later.
                </p>
              </div>
            )}
          </div>
          
          {repositories && repositories.length > itemsPerPage && (
            <Pagination className="mt-10">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => currentPage > 1 ? setCurrentPage(currentPage - 1) : undefined} 
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                {[...Array(totalPages)].map((_, i) => {
                  const page = i + 1;
                  if (
                    page === 1 || 
                    page === totalPages || 
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink 
                          isActive={page === currentPage}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  } else if (
                    (page === currentPage - 2 && currentPage > 3) ||
                    (page === currentPage + 2 && currentPage < totalPages - 2)
                  ) {
                    return <PaginationItem key={page}><PaginationEllipsis /></PaginationItem>;
                  }
                  return null;
                })}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => currentPage < totalPages ? setCurrentPage(currentPage + 1) : undefined} 
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </main>
    </div>
  );
};

const ProjectCard = ({ repo, getLanguageColor }: { repo: Repository, getLanguageColor: (lang: string) => string }) => {
  const languageBadgeClass = repo.language ? getLanguageColor(repo.language) : "bg-gray-500";
  
  return (
    <Card className="h-full flex flex-col group transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg overflow-hidden border-t-2 border-t-transparent hover:border-t-code-purple relative">
      <div className="absolute inset-0 bg-gradient-radial from-code-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold font-mono truncate flex items-center gap-2">
          <Code className="h-5 w-5 text-code-purple group-hover:text-code-blue transition-colors duration-300" />
          <span className="truncate">{repo.name}</span>
        </CardTitle>
        <CardDescription className="line-clamp-2 h-10">
          {repo.description || "No description provided"}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow pb-2">
        <div className="flex flex-wrap gap-2 mb-3">
          {repo.topics && repo.topics.slice(0, 3).map(topic => (
            <Badge key={topic} variant="secondary" className="text-xs">
              {topic}
            </Badge>
          ))}
          {repo.language && (
            <Badge className={`${languageBadgeClass} text-white text-xs`}>
              {repo.language}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5" />
            <span>{repo.stargazers_count}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="h-3.5 w-3.5" />
            <span>{repo.forks_count}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <div className="w-full flex gap-2">
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 text-xs relative z-10"
            asChild
          >
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1 h-3.5 w-3.5" />
              View Code
            </a>
          </Button>
          
          {repo.homepage && (
            <Button 
              size="sm" 
              variant="default" 
              className="flex-1 text-xs bg-gradient-to-r from-code-blue to-code-purple hover:from-code-purple hover:to-code-blue relative z-10"
              asChild
            >
              <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-3.5 w-3.5" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={`flex h-9 w-9 items-center justify-center text-muted-foreground ${className}`}
    {...props}
  >
    ...
  </span>
);

export default Projects;
