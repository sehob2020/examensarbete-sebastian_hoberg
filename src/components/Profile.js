import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'

function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="32" py="7">
                <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                    1+
                </Heading>
                <Text fontSize="2xl" color="gray.400" w="250px">Years of Experience</Text>
            </Box>
        </Flex>
    )
}

export default Profile;
