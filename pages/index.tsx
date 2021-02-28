import React from 'react';
import { motion } from 'framer-motion';

import { Box } from '@/components/foundation/layout/Container';

import { Cover } from '@/components/commons/Cover';
import { Menu } from '@/components/commons/Menu';
import { About } from '@/components/commons/About';
import { Projects } from '@/components/commons/Projects';

export default function Home() {
  return (
    <Box
      flex={1}
      backgroundImage="url(/images/background-light.svg)"
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
    </Box>
  );
}
