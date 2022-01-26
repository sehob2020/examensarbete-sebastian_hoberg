import { HStack, VStack, Text } from '@chakra-ui/layout'
import { FaFacebookF, FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa'
import React from 'react'
import Icon from '@chakra-ui/icon'
import { useMediaQuery } from '@chakra-ui/media-query'

function Social() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <VStack>
            <Text fontWeight="thin" fontSize="1xl" letterSpacing="5px" pb="9px">hoberg.sebastian@gmail.com</Text>
            <HStack spacing={isNotSmallerScreen ? "24" : "0"} flexDirection={isNotSmallerScreen ? "row" : "column"}>
                <Icon as={FaLinkedin} boxSize="50" />
                <Icon as={FaGithub} boxSize="50" />
                <Icon as={FaFacebookF} boxSize="50" />
                <Icon as={FaGoogle} boxSize="50" />
            </HStack>
        </VStack>
    )
}

export default Social;
