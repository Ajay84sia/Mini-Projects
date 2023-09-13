// src/components/ProjectCard.js
import React from "react";
import {
  Box,
  Text,
  Image,
  Link,
  Flex,
  Wrap,
  WrapItem,
  Icon,
  Tooltip,
  useColorModeValue
} from "@chakra-ui/react";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { title, description, image, techStacks, repolink, livelink } = project;

  return (
    <Box
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="md"
      bg={useColorModeValue('#e0e7ee', '#0b111b')}
      p={5}
      m={4}
      maxW="400px"
    >
      <Text  fontWeight="semibold" fontSize="xl" textAlign={"center"}>
        {title}
      </Text>
      <Image borderRadius="xl" boxShadow="lg" src={image} mt={2} alt={title} />
      <Text mt={4} textAlign={"justify"}>
        {description}
      </Text>
      <Wrap mt={4} spacing={2}>
        {techStacks.map((tech, index) => (
          <WrapItem key={index}>
            <Box bg="teal.200" color="teal.800" fontWeight="bold" textTransform="capitalize" px={2} py={1} borderRadius="md">
              {tech}
            </Box>
          </WrapItem>
        ))}
      </Wrap>
      <Flex mt={4} justifyContent={"space-around"}>
        <Tooltip label="Github Repo" fontSize="md">
          <Link href={repolink} color={useColorModeValue('teal.600', 'teal.200')} isExternal>
            <Icon as={FaGithub} mr={2} boxSize={6} />
          </Link>
        </Tooltip>

        <Tooltip label="Live Link" fontSize="md">
          <Link href={livelink} color={useColorModeValue('teal.600', 'teal.200')} isExternal>
            <Icon as={FaLink} mr={2} boxSize={6} />
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
