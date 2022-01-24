import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex, VStack, Heading, Spacer, UnorderedList, ListItem, HStack } from '@chakra-ui/layout';
import { Button, ButtonGroup, Link } from '@chakra-ui/react'
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';

function App() {

  return (
    <BrowserRouter>
      <VStack p={5} h="full" w="full">
          <Nav />
          <Header />
        <Flex w="100%">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Flex>
      </VStack>
    </BrowserRouter>
  );
}

export default App;
