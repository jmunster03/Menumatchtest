import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import logoImage from 'figma:asset/a86556e1d5e0c830297ad65a6f3ba3aca815142c.png';

interface LoadingAnimationProps {
  onComplete?: () => void;
}

export function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          // Wait for swipe animation to complete before calling onComplete
          if (onComplete) {
            setTimeout(onComplete, 800);
          }
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center rounded-[40px]"
      initial={{ y: 0 }}
      animate={{ y: isComplete ? "-100%" : 0 }}
      transition={{ 
        duration: 0.7, 
        ease: [0.65, 0, 0.35, 1]
      }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1
          }}
          className="relative"
        >
          {/* Outer glow with pulse */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.2, 0.4]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-white rounded-full blur-3xl"
          />
          
          {/* Circle background with border */}
          <motion.div
            className="relative bg-white rounded-full p-12 shadow-2xl border-4 border-white/50"
            animate={{
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Logo with mix-blend to remove white background */}
            <img
              src={logoImage}
              alt="Menu Match"
              className="w-48 h-auto mix-blend-multiply"
            />
          </motion.div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="w-64 bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm"
        >
          <motion.div
            className="h-full bg-white rounded-full shadow-lg"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="text-white/80 flex items-center gap-2"
        >
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
          >
            .
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
