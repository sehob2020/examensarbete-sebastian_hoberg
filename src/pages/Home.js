import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex, VStack, Heading, Spacer, UnorderedList, ListItem, HStack } from '@chakra-ui/layout';
import { Button, ButtonGroup, Link } from '@chakra-ui/react'
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

import Social from '../components/Social';

function Home() {

  return (
      <HStack display="flex" alignItems="center" justifyContent="center" h="full" w="100%">
        <Social />
      </HStack>
  );
}

export default Home;
