import React from 'react';
import { HStack, VStack, Text } from '@chakra-ui/layout'
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode } from 'react-icons/fa'
import { IconName, SiNextdotjs, SiChakraui, SiTypescript, SiExpress, SiMongodb } from "react-icons/si";
import Icon from '@chakra-ui/icon'

function About() {
  return (
    <VStack display="flex" alignItems="center" justifyContent="center" h="full" w="100%">
      <Text pb="20px" letterSpacing="5px">Frontend Developer - EC Utbildning Helsingborg 2020 - 2022</Text>
      <HStack spacing="24">
        <Icon as={FaHtml5} boxSize="50" />
        <Icon as={FaCss3} boxSize="50" />
        <Icon as={FaJs} boxSize="50" />
        <Icon as={SiTypescript} boxSize="50" />
        <Icon as={FaReact} boxSize="50" />
        <Icon as={FaNode} boxSize="50" />
        <Icon as={SiNextdotjs} boxSize="50" />
        <Icon as={SiChakraui} boxSize="50" />
        <Icon as={SiExpress} boxSize="50" />
        <Icon as={SiMongodb} boxSize="50" />
      </HStack>
    </VStack>
  );
}

export default About;
