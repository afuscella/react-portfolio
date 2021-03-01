import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { Box } from '@/components/foundation/layout/Container';

import { About } from '@/components/commons/About';
import { Cover } from '@/components/commons/Cover';
import { Footer } from '@/components/commons/Footer';
import { Menu } from '@/components/commons/Menu';
import { Projects } from '@/components/commons/Projects';

import ThemeContext from '@/context/Theme';

export default function Home() {
  const { themeName } = useContext(ThemeContext);
  return (
    <Box
      flex={1}
      backgroundImage={`url(/images/background-${themeName}.svg)`}
      backgroundRepeat="repeat"
      backgroundPosition="center"
    >

      <Menu />
      
      <Cover
        as={motion.section}
        transition={{ delay: 0, duration: 0.5 }}
        variants={{
          show: { opacity: 1, y: '0' },
          hidden: { opacity: 0, y: '20%' },
        }}
        initial="hidden"
        animate="show"
      />

      <About />
      
      <Projects />

      <Footer />

    </Box>
  );
}
