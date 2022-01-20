import { HStack, VStack, Text } from '@chakra-ui/layout'
import { FaFacebookF, FaGoogle, FaSpotify, FaLinkedin } from 'react-icons/fa'
import React from 'react'
import Icon from '@chakra-ui/icon'

function Social() {
    return (
        <VStack>
            <Text fontWeight="thin" fontSize="1xl" letterSpacing="2px" pb="9px">A genuinely nice guy</Text>
            <HStack spacing="24">
                <Icon as={FaLinkedin} boxSize="50" />
                <Icon as={FaFacebookF} boxSize="50" />
                <Icon as={FaGoogle} boxSize="50" />
                <Icon as={FaSpotify} boxSize="50" />
            </HStack>
        </VStack>
    )
}

export default Social;
