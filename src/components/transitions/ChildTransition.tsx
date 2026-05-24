// src/components/transitions/ChildTransition.tsx
import { type ReactNode, type FC } from 'react';
import { motion } from 'framer-motion';

interface ChildTransitionProps {
  children: ReactNode;
  delay?: number;
}

const ChildTransition: FC<ChildTransitionProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ChildTransition;