import React from 'react';
import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Circle, Stack, Flex, Box, Text, } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useMediaQuery } from '@chakra-ui/media-query';

import Header from './components/Header';

function App() {

    const {colorMode} = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
          <Header />
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"} 
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text" >Sebastian Hoberg</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>Studying front end developer.</Text>
                    <Button mt={8} colorScheme="blue" onClick={() => 
                    window.open("https://google.com")
                }>Download CV</Button>

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} 
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius="full"
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src="https://talearnings.com/wp-content/uploads/2019/05/5438_-_Software_Developer-512.png" />
            </Flex>

        </Stack>
    )
}

export default App;