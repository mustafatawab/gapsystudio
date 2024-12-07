import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'Projects', 'Services', 'About', 'Contact'];

  const menuVariants = {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100%' },
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-50 text-white"
      >
        <Menu size={32} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu-overlay"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-40"
          >
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white"
            >
              <X size={32} />
            </motion.button>

            <nav className="h-full flex items-center justify-center">
              <div className="space-y-8">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-4xl font-bold text-white hover:text-gray-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.div>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
