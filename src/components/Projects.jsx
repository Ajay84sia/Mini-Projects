import React from "react";
import ProjectsGrid from "./ProjectsGrid";
import { Box, Center, Heading , useColorModeValue} from "@chakra-ui/react";

const Projects = () => {
  const projectData = [
    {
      title: "Joke & Shayari App",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/267646989-14bde366-56f6-4fdd-b71b-884cc375283f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230913%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230913T121401Z&X-Amz-Expires=300&X-Amz-Signature=7028c5722f4921885a59103b4ecfe7661dfd9cf9164b7bf1ee4c78b5ce2575db&X-Amz-SignedHeaders=host&actor_id=98752820&key_id=0&repo_id=690878901",
      description: "This app gives random jokes and Shayari based on the word you provide. A world of humor and heartfelt emotions, right at your fingertips.",
      techStacks: ["html", "css", "javascript", "open-ai"],
      repolink: "https://github.com/Ajay84sia/Mini-Projects/tree/main/codebase/code-converter",
      livelink: "https://joke-n-shayari.netlify.app/",
    },
    {
      title: "Code Converter App",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/267646989-14bde366-56f6-4fdd-b71b-884cc375283f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230913%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230913T121401Z&X-Amz-Expires=300&X-Amz-Signature=7028c5722f4921885a59103b4ecfe7661dfd9cf9164b7bf1ee4c78b5ce2575db&X-Amz-SignedHeaders=host&actor_id=98752820&key_id=0&repo_id=690878901",
      description: "This app helps you to transform your code effortlessly! Say goodbye to syntax errors with our Code Converter app. Convert, debug, and check quality of your code with just a click.",
      techStacks: ["react", "javascript","node.js", "open-ai"],
      repolink: "https://github.com/Ajay84sia/Mini-Projects/tree/main/codebase/code-converter",
      livelink: "https://ajay84sia-code-converter.netlify.app/",
    },
  ];

  return (
    <Box p={4}  bg={useColorModeValue('#edf2f8', '#0f1624')}>
      <Heading as="h1" size="xl" mb={4} textAlign={"center"}>
        Mini Projects
      </Heading>
      <Center>
        <ProjectsGrid projects={projectData} />
      </Center>
    </Box>
  );
};

export default Projects;
