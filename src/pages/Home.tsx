// src/pages/Home.tsx
import React from 'react';
import { motion } from 'framer-motion';
// Fallback inline Hero component to avoid missing module import
const Hero: React.FC = () => (
  <section style={{ padding: '4rem 1rem', textAlign: 'center' }}>
    <h1>Welcome</h1>
    <p>Portfolio coming soon.</p>
  </section>
);

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
    </motion.div>
  );
};

export default Home;