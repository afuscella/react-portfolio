import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import { Text } from '@/components/foundation/Text';
import { DarkMode } from '@/components/commons/DarkMode';

import { Code } from '@/themes/Icons/Code';

import { MenuWrapper } from './styles';

export function Menu() {
  const links = [{
    id: 1,
    text: 'Portfólio',
    section: 'menu__section'
  }, {
    id: 2,
    text: 'About',
    section: 'about__section'
  }, {
    id: 3,
    text: 'Projects',
    section: 'projects__section'
  }];

  return (
    <MenuWrapper.Menu
      id="menu__section"
      as={motion.nav}
      transition={{ delay: 0.5, duration: 0.5 }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="show"
    >
      <MenuWrapper.LeftSide>
        <Code />
      </MenuWrapper.LeftSide>

      <MenuWrapper.CentralSide>
        {links.map((link) => (

          <Link
            key={link.id}
            activeClass="active"
            to={link.section}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Text variant='smallestException' tag='span'>
              {link.text}
            </Text>
          </Link>

        ))}
      </MenuWrapper.CentralSide>

      <MenuWrapper.RightSide>
        <DarkMode />
      </MenuWrapper.RightSide>

    </MenuWrapper.Menu>
  );
}
