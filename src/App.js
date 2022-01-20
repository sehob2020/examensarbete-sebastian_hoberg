import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex, VStack, Heading, Spacer, UnorderedList, ListItem, HStack } from '@chakra-ui/layout';
import { Button, ButtonGroup, Link } from '@chakra-ui/react'
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Header from './components/Header';
import Profile from './components/Profile';
import Social from './components/Social';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from './pages/About';

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5} h="full">
      <Flex w="100%" >
        {/* <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">Web Development</Heading> */}
        <Spacer></Spacer>
            <HStack display="flex" flexDirection="row" as="nav">
              <Button>Home</Button>
              <Button>About</Button>
              <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>

                {/* <BrowserRouter>
                  <Routes>
                    <Route exact path="/" element={<App />} />
                    <Route path="/about" element={<About />} />
                </Routes>
              </BrowserRouter> */}

            </HStack>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
