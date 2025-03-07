
import React, { useState } from 'react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { 
  Sparkles, 
  Laugh, 
  Coffee, 
  Pizza, 
  Cat, 
  Heart, 
  Music, 
  BugPlay, 
  Dna, 
  Wand2,
  Ghost
} from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type EasterEggType = 'joke' | 'fact' | 'message' | 'cat' | 'coffee' | 'music' | 'bug' | 'dna' | 'magic' | 'ghost';

interface EasterEggProps {
  type: EasterEggType;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center-left' | 'center-right' | 'random';
  visibleOnHover?: boolean;
  className?: string;
}

const EasterEgg: React.FC<EasterEggProps> = ({ 
  type, 
  position = 'random', 
  visibleOnHover = false,
  className
}) => {
  const [clicked, setClicked] = useState(false);
  
  // Content based on type
  const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "Why did the web developer walk out of a restaurant? The menu had tables with no <tbody>!",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
    "Why don't programmers like nature? It has too many bugs and no debugging tool!",
    "Why did the developer go broke? Because they lost their cache!",
  ];
  
  const facts = [
    "The first computer bug was an actual moth found in a Harvard Mark II computer in 1947.",
    "The QWERTY keyboard layout was designed to slow typists down to prevent jamming of mechanical typewriter keys.",
    "The average person blinks 15-20 times per minute, but when using a computer, they blink only 5-7 times per minute.",
    "The first computer mouse was made of wood and invented by Doug Engelbart in 1964.",
    "The world's first website went live on August 6, 1991. It was dedicated to information on the World Wide Web project.",
  ];
  
  const messages = [
    "You found a secret message! You're awesome!",
    "Hidden message detected: Keep coding, you're doing great!",
    "Secret unlocked: You have exceptional attention to detail!",
    "Easter egg found! Your curiosity is your superpower.",
    "You discovered a hidden gem! That's the spirit of exploration.",
  ];
  
  const catFacts = [
    "Cats spend 70% of their lives sleeping!",
    "A group of cats is called a 'clowder'.",
    "Cats have 32 muscles in each ear.",
    "A cat's purr vibrates at a frequency that promotes bone density and healing.",
    "Cats can't taste sweetness due to a genetic mutation.",
  ];

  const coffeeNotes = [
    "Coffee is the second most traded commodity in the world, after oil.",
    "A coffee tree can live up to 100 years!",
    "The word 'coffee' comes from the Arabic word 'qahwah'.",
    "Brazil produces approximately 40% of the world's coffee supply.",
    "It takes about 42 coffee beans to make an espresso.",
  ];

  const musicFacts = [
    "The world's longest concert lasted for 639 hours.",
    "The song 'Happy Birthday' was the first song ever played in space.",
    "Monaco's national orchestra is bigger than its army.",
    "The longest recorded applause lasted for 80 minutes.",
    "The first CD ever made contained Beethoven's 9th Symphony.",
  ];

  const codeBugs = [
    "The 'Millennium Bug' or Y2K problem cost over $300 billion to fix.",
    "The first computer bug was a moth caught in a Harvard Mark II relay in 1947.",
    "The Mars Climate Orbiter was lost due to a unit conversion error in code.",
    "A single misplaced semicolon caused a rocket to self-destruct in 1962.",
    "The 2003 Northeast blackout was partially caused by a software bug.",
  ];

  const dnaNotes = [
    "If unwound, the DNA in all your cells would stretch 10 billion miles.",
    "Humans share about 60% of their DNA with bananas.",
    "Your DNA could stretch from Earth to the Sun and back ~600 times.",
    "Only about 2% of human DNA codes for proteins.",
    "Humans share about 98.8% of their DNA with chimpanzees.",
  ];

  const magicNotes = [
    "The word 'abracadabra' was originally believed to have healing powers.",
    "The oldest known magic trick is the cups and balls, dating back to Roman times.",
    "Harry Houdini's real name was Erik Weisz.",
    "Penn & Teller have performed together for over 45 years.",
    "The Magic Circle was founded in London in 1905.",
  ];

  const ghostFacts = [
    "The word 'ghost' comes from the Old English 'gast', meaning 'spirit'.",
    "In ancient Rome, ghosts were believed to be tied to the location of their burial.",
    "The first ghost story is considered to be in the Epic of Gilgamesh, written around 2100 BC.",
    "The most haunted place in the world is considered to be the Borley Rectory in England.",
    "In Japanese culture, ghosts are called 'yurei' and are believed to be spirits trapped in our world.",
  ];

  // Get content based on type
  const getContent = () => {
    switch(type) {
      case 'joke':
        return jokes[Math.floor(Math.random() * jokes.length)];
      case 'fact':
        return facts[Math.floor(Math.random() * facts.length)];
      case 'message':
        return messages[Math.floor(Math.random() * messages.length)];
      case 'cat':
        return catFacts[Math.floor(Math.random() * catFacts.length)];
      case 'coffee':
        return coffeeNotes[Math.floor(Math.random() * coffeeNotes.length)];
      case 'music':
        return musicFacts[Math.floor(Math.random() * musicFacts.length)];
      case 'bug':
        return codeBugs[Math.floor(Math.random() * codeBugs.length)];
      case 'dna':
        return dnaNotes[Math.floor(Math.random() * dnaNotes.length)];
      case 'magic':
        return magicNotes[Math.floor(Math.random() * magicNotes.length)];
      case 'ghost':
        return ghostFacts[Math.floor(Math.random() * ghostFacts.length)];
      default:
        return messages[0];
    }
  };

  // Get icon based on type
  const getIcon = () => {
    switch(type) {
      case 'joke':
        return <Laugh className="h-full w-full" />;
      case 'fact':
        return <Sparkles className="h-full w-full" />;
      case 'message':
        return <Heart className="h-full w-full" />;
      case 'cat':
        return <Cat className="h-full w-full" />;
      case 'coffee':
        return <Coffee className="h-full w-full" />;
      case 'music':
        return <Music className="h-full w-full" />;
      case 'bug':
        return <BugPlay className="h-full w-full" />;
      case 'dna':
        return <Dna className="h-full w-full" />;
      case 'magic':
        return <Wand2 className="h-full w-full" />;
      case 'ghost':
        return <Ghost className="h-full w-full" />;
      default:
        return <Sparkles className="h-full w-full" />;
    }
  };

  // Get position class
  const getPositionClass = () => {
    if (position === 'random') {
      const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center-left', 'center-right'];
      position = positions[Math.floor(Math.random() * positions.length)] as typeof position;
    }
    
    switch(position) {
      case 'top-left':
        return 'absolute top-4 left-4';
      case 'top-right':
        return 'absolute top-4 right-4';
      case 'bottom-left':
        return 'absolute bottom-4 left-4';
      case 'bottom-right':
        return 'absolute bottom-4 right-4';
      case 'center-left':
        return 'absolute top-1/2 -translate-y-1/2 left-4';
      case 'center-right':
        return 'absolute top-1/2 -translate-y-1/2 right-4';
      default:
        return 'absolute top-4 right-4';
    }
  };

  // Get color class based on type
  const getColorClass = () => {
    switch(type) {
      case 'joke':
        return 'text-yellow-500';
      case 'fact':
        return 'text-blue-500';
      case 'message':
        return 'text-pink-500';
      case 'cat':
        return 'text-orange-400';
      case 'coffee':
        return 'text-amber-700';
      case 'music':
        return 'text-indigo-500';
      case 'bug':
        return 'text-green-500';
      case 'dna':
        return 'text-purple-500';
      case 'magic':
        return 'text-violet-500';
      case 'ghost':
        return 'text-blue-300';
      default:
        return 'text-code-purple';
    }
  };

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1000);
    
    toast(getContent(), {
      description: `You found a hidden ${type}!`,
      duration: 5000,
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleClick}
            className={cn(
              getPositionClass(),
              getColorClass(),
              "w-5 h-5 opacity-0 hover:opacity-100 focus:opacity-100 transition-opacity duration-300",
              clicked && "animate-ping",
              visibleOnHover ? "group-hover:opacity-30" : "",
              className
            )}
            aria-label={`Easter egg: ${type}`}
          >
            {getIcon()}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">Click me!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default EasterEgg;
