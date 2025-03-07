
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Timer, Trophy, RotateCcw, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const emojis = ['🚀', '🌈', '🔥', '💡', '🎮', '🎯', '🧩', '💻', '⚡', '🔮'];

const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [bestScore, setBestScore] = useState<{ [key: string]: number }>({
    easy: localStorage.getItem('bestScoreEasy') ? parseInt(localStorage.getItem('bestScoreEasy') || '0') : 0,
    medium: localStorage.getItem('bestScoreMedium') ? parseInt(localStorage.getItem('bestScoreMedium') || '0') : 0,
    hard: localStorage.getItem('bestScoreHard') ? parseInt(localStorage.getItem('bestScoreHard') || '0') : 0,
  });

  // Initialize game
  useEffect(() => {
    initializeGame();
  }, [difficulty]);

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (gameStarted && !gameComplete) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [gameStarted, gameComplete]);

  const initializeGame = () => {
    let gameEmojis;
    if (difficulty === 'easy') {
      gameEmojis = emojis.slice(0, 6);
    } else if (difficulty === 'medium') {
      gameEmojis = emojis.slice(0, 8);
    } else {
      gameEmojis = emojis;
    }
    
    const duplicatedEmojis = [...gameEmojis, ...gameEmojis];
    const shuffledEmojis = duplicatedEmojis.sort(() => Math.random() - 0.5);
    
    const newCards = shuffledEmojis.map((emoji, index) => ({
      id: index,
      emoji,
      isFlipped: false,
      isMatched: false,
    }));
    
    setCards(newCards);
    setFlippedCards([]);
    setMoves(0);
    setGameComplete(false);
    setTimer(0);
    setGameStarted(false);
  };

  const handleCardClick = (id: number) => {
    // Start the game on first card click
    if (!gameStarted) {
      setGameStarted(true);
    }
    
    // Ignore if game is complete or card is already flipped/matched
    if (gameComplete || cards[id].isFlipped || cards[id].isMatched) {
      return;
    }
    
    // Ignore if two cards are already flipped
    if (flippedCards.length === 2) {
      return;
    }

    // Flip the card
    const updatedCards = [...cards];
    updatedCards[id].isFlipped = true;
    setCards(updatedCards);
    
    // Add to flipped cards
    const updatedFlippedCards = [...flippedCards, id];
    setFlippedCards(updatedFlippedCards);
    
    // Check for match if two cards are flipped
    if (updatedFlippedCards.length === 2) {
      setMoves(prevMoves => prevMoves + 1);
      
      const [firstCardId, secondCardId] = updatedFlippedCards;
      const firstCard = updatedCards[firstCardId];
      const secondCard = updatedCards[secondCardId];
      
      if (firstCard.emoji === secondCard.emoji) {
        // Match found
        updatedCards[firstCardId].isMatched = true;
        updatedCards[secondCardId].isMatched = true;
        setCards(updatedCards);
        setFlippedCards([]);
        
        // Check for game completion
        const allMatched = updatedCards.every(card => card.isMatched);
        if (allMatched) {
          handleGameComplete();
        } else {
          toast.success("Match found! 🎉");
        }
      } else {
        // No match, flip cards back after delay
        setTimeout(() => {
          updatedCards[firstCardId].isFlipped = false;
          updatedCards[secondCardId].isFlipped = false;
          setCards(updatedCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const handleGameComplete = () => {
    setGameComplete(true);
    setGameStarted(false);
    
    // Calculate score (lower is better)
    const score = moves;
    
    // Update best score if current score is better
    const currentBestScore = bestScore[difficulty] || 0;
    if (currentBestScore === 0 || score < currentBestScore) {
      const newBestScore = { ...bestScore, [difficulty]: score };
      setBestScore(newBestScore);
      localStorage.setItem(`bestScore${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`, score.toString());
      toast.success("New best score! 🏆");
    }
    
    toast("Game Complete! 🎉", {
      description: `You completed the game in ${moves} moves and ${timer} seconds.`,
      action: {
        label: "Play Again",
        onClick: () => initializeGame(),
      },
    });
  };

  const getGridClass = () => {
    if (difficulty === 'easy') {
      return 'grid-cols-3 md:grid-cols-4';
    } else if (difficulty === 'medium') {
      return 'grid-cols-4';
    } else {
      return 'grid-cols-4 md:grid-cols-5';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3 relative inline-block">
            <span className="gradient-text">Memory Match</span>
            <Sparkles className="absolute -top-4 -right-6 h-5 w-5 text-code-yellow animate-pulse" />
          </h1>
          <p className="text-muted-foreground mb-6">Flip cards to find matching pairs!</p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Button 
              onClick={() => setDifficulty('easy')} 
              variant={difficulty === 'easy' ? 'default' : 'outline'}
              className="rounded-full"
            >
              Easy
            </Button>
            <Button 
              onClick={() => setDifficulty('medium')} 
              variant={difficulty === 'medium' ? 'default' : 'outline'}
              className="rounded-full"
            >
              Medium
            </Button>
            <Button 
              onClick={() => setDifficulty('hard')} 
              variant={difficulty === 'hard' ? 'default' : 'outline'}
              className="rounded-full"
            >
              Hard
            </Button>
            <Button 
              onClick={initializeGame} 
              variant="outline"
              className="rounded-full"
            >
              <RotateCcw className="mr-1 h-4 w-4" /> Restart
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
            <Badge variant="outline" className="px-3 py-1 flex items-center gap-1">
              <Timer className="h-4 w-4" /> {timer} seconds
            </Badge>
            <Badge variant="outline" className="px-3 py-1 flex items-center gap-1">
              <Star className="h-4 w-4" /> {moves} moves
            </Badge>
            {bestScore[difficulty] > 0 && (
              <Badge variant="secondary" className="px-3 py-1 flex items-center gap-1">
                <Trophy className="h-4 w-4" /> Best: {bestScore[difficulty]} moves
              </Badge>
            )}
          </div>
        </div>
        
        <div className={`grid ${getGridClass()} gap-3 md:gap-4 justify-center`}>
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="relative h-20 sm:h-24 md:h-28 cursor-pointer"
              onClick={() => handleCardClick(card.id)}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: card.isFlipped ? 180 : 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: card.isFlipped ? 1 : 1.05 }}
            >
              <div 
                className={`absolute inset-0 rounded-xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl transform backface-hidden ${
                  card.isMatched 
                    ? 'bg-gradient-to-r from-code-green/20 to-code-blue/20 border-2 border-code-green/30' 
                    : 'bg-gradient-to-r from-code-blue/10 to-code-purple/10 border border-white/10'
                }`}
                style={{ backfaceVisibility: 'hidden' }}
              >
                <span className="opacity-0">?</span>
              </div>
              <div 
                className="absolute inset-0 rounded-xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl transform rotateY-180 backface-hidden bg-white shadow-md"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                {card.emoji}
              </div>
            </motion.div>
          ))}
        </div>
        
        {gameComplete && (
          <div className="text-center mt-8">
            <Button onClick={initializeGame} className="rounded-full">
              Play Again
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemoryGame;
