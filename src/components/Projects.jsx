import React from "react";
import ProjectsGrid from "./ProjectsGrid";
import { Box, Center, Heading , useColorModeValue} from "@chakra-ui/react";

const Projects = () => {
  const projectData = [
    {
      title: "Calculator",
      image:
        "https://user-images.githubusercontent.com/98752820/257031561-fa0bc6c3-e0d8-4690-9611-591a6fd9bfe4.png",
      description: "Calculations made simple ! Our Calculator App helps you to calculate effortlessly. From basic math to complex equations.",
      techStacks:  ["html", "css", "javascript"],
      repolink: "https://github.com/Ajay84sia/Mini-Projects/tree/main/codebase/Calculator",
      livelink: "https://ajay84sia-calculator.netlify.app/",
    },
    {
      title: "Rock, Paper & Scissor game",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/268484581-269e6926-a30f-4502-8aad-097e8dedb9f6.png",
      description: "This app gives random jokes and Shayari based on the word you provide. A world of humor and heartfelt emotions, right at your fingertips.",
      techStacks: ["Python"],
      repolink: "https://github.com/Ajay84sia/Mini-Projects/tree/main/codebase/rockPaperScissor",
      livelink: "https://replit.com/@Ajay84sia/RockPaperandScissor?v=1",
    },
    {
      title: "Joke & Shayari App",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/268484102-39d527e6-e50e-4174-b940-d9fb530d4fb8.png",
      description: "This app gives random jokes and Shayari based on the word you provide. A world of humor and heartfelt emotions, right at your fingertips.",
      techStacks: ["html", "css", "javascript", "open-ai"],
      repolink: "https://github.com/Ajay84sia/Mini-Projects/tree/main/codebase/Joke%26Shayari",
      livelink: "https://joke-n-shayari.netlify.app/",
    },
    {
      title: "Code Converter App",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/268484707-9a1530f8-39c7-491f-a64b-fe499b3a136c.png",
      description: "This app helps you to transform your code effortlessly! Say goodbye to syntax errors with our Code Converter app. Convert, debug, and check quality of your code with just a click.",
      techStacks: ["react", "javascript","node.js", "open-ai"],
      repolink: "https://github.com/Ajay84sia/Mini-Projects/tree/main/codebase/code-converter",
      livelink: "https://ajay84sia-code-converter.netlify.app/",
    },
    {
      title: "URL Shortener",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/268484752-b659af1a-55a7-44df-a5e7-cb67252cc2de.png",
      description: "Your shortcut to shorter, smarter URLs! Simplify your links and boost engagement with our URL Shortener app. Say goodbye to long, website links and hello to sleek, shareable links in seconds.",
      techStacks: ["react", "javascript","node.js", "mongodb"],
      repolink: "https://github.com/Ajay84sia/Mini-Projects/tree/main/codebase/URL_Shortener",
      livelink: "https://slice-url.netlify.app/",
    },
    {
      title: "Weather App",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/268484877-7d254e28-af45-48c8-af9d-8ce33067627c.png",
      description: "Your personal meteorologist in your pocket! Stay ahead of the forecast with our sleek Weather App, providing you with instant weather updates and insights at your fingertips.",
      techStacks: ["html", "bootstrap","javascript","rapid-API"],
      repolink: "https://github.com/Ajay84sia/Mini-Projects/tree/main/codebase/WeatherApp",
      livelink: "https://weatheralertapp.netlify.app/",
    },
    {
      title: "BMI Calculator",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/268483995-80b8fd78-e395-4a6a-924a-aeaef29cc050.png",
      description: "Your ultimate BMI Calculator! Quickly assess your wellness and track your progress effortlessly with our user-friendly app. Your path to a healthier you starts here!",
      techStacks: ["angular", "typescript","tailwind CSS"],
      repolink: "https://github.com/Ajay84sia/Mini-Projects/tree/main/codebase/BMI_Calculator",
      livelink: "https://slice-url.netlify.app/",
    },
    {
      title: "Todo App",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/268484987-a29a37d5-2d7e-4079-94c7-4dbb3b2b88d1.png",
      description: "Start your daily tasks with our Todo App, your ultimate todo app. Streamline your to-dos, boost organization, and simplify life one task at a time. Effortlessly achieve your goals!",
      techStacks: ["angular", "typescript","tailwind CSS"],
      repolink: "https://github.com/Ajay84sia/Mini-Projects/tree/main/codebase/Todo%20App",
      livelink: "https://ajay84sia-angular-todos.netlify.app/",
    },
    {
      title: "Stopwatch",
      image:
        "https://github.com/Ajay84sia/Mini-Projects/assets/98752820/21331c3c-96c4-4075-9022-6e3ca71cdd74",
      description: "Your precision timekeeper on the go! Whether you're tracking workouts, measuring cooking times, or managing your day, our Stopwatch App has you covered. ",
      techStacks: ["html", "css","javascript"],
      repolink: "https://github.com/Ajay84sia/Mini-Projects/tree/main/codebase/Stopwatch",
      livelink: "https://web-stopwatch.netlify.app/",
    },
    {
      title: "Github User's Profile",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/268988867-bd02484f-b3c6-4246-8dae-ae369feb0f78.png",
      description: "Explore GitHub user's profile with ease and style! This website offers a user-friendly search interface and supports both light and dark themes for a personalized experience.",
      techStacks: ["React", "Javascript","Tailwind CSS"],
      repolink: "https://github.com/Ajay84sia/Mini-Projects/tree/main/codebase/github-userdata",
      livelink: "https://git-user-data.netlify.app/",
    },
    {
      title: "Infinite Scrolling App",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/272486899-913de7bb-6de9-4fb0-9d78-e3ce35ff3ad0.png",
      description: "Experience a revolutionary browsing journey with our Infinite Scrolling App. Dive into a continuous stream of captivating content, ensuring endless excitement and exploration at your fingertips.",
      techStacks: ["React", "Javascript","Tailwind CSS"],
      repolink: "https://github.com/Ajay84sia/Mini-Projects/tree/main/codebase/infinite-scroll",
      livelink: "https://unlimited-scroll.netlify.app/",
    },
    {
      title: "QR Code Generator",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/272486612-131d14a1-4b4d-4a23-81d0-e71ce75ec043.png",
      description: "Unlock instant connections with our QR Code Generator app. Seamlessly share information, transforming words into meaningful links, and elevate your communication effortlessly.",
      techStacks: ["React", "Javascript","Tailwind CSS"],
      repolink: "https://github.com/Ajay84sia/Mini-Projects/tree/main/codebase/qr-code-generator",
      livelink: "https://quickqr-generator.netlify.app/",
    },
  ];

  return (
    <Box p={4} pt={"12vh"} bg={useColorModeValue('#edf2f8', '#444654')}>
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
