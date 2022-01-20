import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex, VStack, Heading, Spacer, UnorderedList, ListItem, HStack } from '@chakra-ui/layout';
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Header from './components/Header';
import Profile from './components/Profile';
import Social from './components/Social';

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%" >
        {/* <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">Web Development</Heading> */}
        <Spacer></Spacer>
            <HStack display="flex" flexDirection="row">
                <UnorderedList listStyleType="none" display="flex" >
                    <ListItem ml={2} w="129px" h="37px" borderRadius="50%" background="#232B3A" >Home</ListItem>
                    <ListItem ml={2} w="129px" h="37px" borderRadius="50%" background="#232B3A" >About</ListItem>
                    <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
                </UnorderedList>
            </HStack>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
