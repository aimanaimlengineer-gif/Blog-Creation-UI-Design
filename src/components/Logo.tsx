import { motion } from 'motion/react';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          width="40"
          height="40"
          rx="8"
          fill="url(#gradient)"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M12 14C12 13.4477 12.4477 13 13 13H19C19.5523 13 20 13.4477 20 14V14C20 14.5523 19.5523 15 19 15H13C12.4477 15 12 14.5523 12 14V14Z"
          fill="white"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        />
        <motion.path
          d="M12 20C12 19.4477 12.4477 19 13 19H27C27.5523 19 28 19.4477 28 20V20C28 20.5523 27.5523 21 27 21H13C12.4477 21 12 20.5523 12 20V20Z"
          fill="white"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        />
        <motion.path
          d="M12 26C12 25.4477 12.4477 25 13 25H23C23.5523 25 24 25.4477 24 26V26C24 26.5523 23.5523 27 23 27H13C12.4477 27 12 26.5523 12 26V26Z"
          fill="white"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        />
        <motion.circle
          cx="26"
          cy="14"
          r="2"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ delay: 0.6, duration: 2, repeat: Infinity }}
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
