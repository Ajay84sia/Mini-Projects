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
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/267668957-98f17152-1fb8-4405-bd92-404a9e2d5492.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230913%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230913T132657Z&X-Amz-Expires=300&X-Amz-Signature=369736c5f4215026ba1026be295c0d2ab0ec1f71f965242f8b487bd6ffb90ff8&X-Amz-SignedHeaders=host&actor_id=98752820&key_id=0&repo_id=690878901",
      description: "This app gives random jokes and Shayari based on the word you provide. A world of humor and heartfelt emotions, right at your fingertips.",
      techStacks: ["Python"],
      repolink: "https://github.com/Ajay84sia/Mini-Projects/tree/main/codebase/rockPaperScissor",
      livelink: "https://replit.com/@Ajay84sia/RockPaperandScissor?v=1",
    },
    {
      title: "Joke & Shayari App",
      image:
        "https://private-user-images.githubusercontent.com/98752820/267659087-4c914397-d4f8-4544-8ed3-7f4f97677417.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ2MTIwMjYsIm5iZiI6MTY5NDYxMTcyNiwicGF0aCI6Ii85ODc1MjgyMC8yNjc2NTkwODctNGM5MTQzOTctZDRmOC00NTQ0LThlZDMtN2Y0Zjk3Njc3NDE3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA5MTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwOTEzVDEzMjg0NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM0YmNkMTU4ZWEyZjgwZGQwM2M3YWViMGYyNGQ5ZWNiMWM2ODY5MDQ2MGI1NGM0ZTI2YzZjNjZlMjllOTM1NjkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Nf9BwFjT9nQPJ1UMKyJ6t-wA13r_EU-8boPvQEQoYNg",
      description: "This app gives random jokes and Shayari based on the word you provide. A world of humor and heartfelt emotions, right at your fingertips.",
      techStacks: ["html", "css", "javascript", "open-ai"],
      repolink: "https://github.com/Ajay84sia/Mini-Projects/tree/main/codebase/Joke%26Shayari",
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
    {
      title: "URL Shortener",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/268304910-663e378c-a521-4ff0-b15d-80fcff2eea3c.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230915%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230915T141050Z&X-Amz-Expires=300&X-Amz-Signature=a43d77caace164f2371dcc91c8a94c4ceb1878136d4a5d8f274125f02ecd3373&X-Amz-SignedHeaders=host&actor_id=98752820&key_id=0&repo_id=690878901",
      description: "Your shortcut to shorter, smarter URLs! Simplify your links and boost engagement with our URL Shortener app. Say goodbye to long, website links and hello to sleek, shareable links in seconds.",
      techStacks: ["react", "javascript","node.js", "mongodb"],
      repolink: "https://github.com/Ajay84sia/Mini-Projects/tree/main/codebase/URL_Shortener",
      livelink: "https://slice-url.netlify.app/",
    },
    {
      title: "Weather App",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/268306048-5e3917f8-c269-44df-a89b-bc43319a6897.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230915%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230915T141514Z&X-Amz-Expires=300&X-Amz-Signature=79eef5352f9ba776b8ffc5658b7308cee0bd0b145fc740390f14268e81ad902d&X-Amz-SignedHeaders=host&actor_id=98752820&key_id=0&repo_id=690878901",
      description: "Your personal meteorologist in your pocket! Stay ahead of the forecast with our sleek Weather App, providing you with instant weather updates and insights at your fingertips.",
      techStacks: ["html", "bootstrap","javascript","rapid-API"],
      repolink: "https://github.com/Ajay84sia/Mini-Projects/tree/main/codebase/WeatherApp",
      livelink: "https://weatheralertapp.netlify.app/",
    },
    {
      title: "BMI Calculator",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/268306671-2131b29b-e358-49c9-9caa-ab206ed092e5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230915%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230915T141713Z&X-Amz-Expires=300&X-Amz-Signature=265fef6f6e493b3fd0660d392989247f296fefd8a9a1d1c003b98bdd3c598345&X-Amz-SignedHeaders=host&actor_id=98752820&key_id=0&repo_id=690878901",
      description: "Your ultimate BMI Calculator! Quickly assess your wellness and track your progress effortlessly with our user-friendly app. Your path to a healthier you starts here!",
      techStacks: ["angular", "typescript","tailwind CSS"],
      repolink: "https://github.com/Ajay84sia/Mini-Projects/tree/main/codebase/BMI_Calculator",
      livelink: "https://slice-url.netlify.app/",
    },
    {
      title: "Todo App",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/268307596-7effeb0f-03d6-48d6-923b-bd5a6acf430f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230915%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230915T142029Z&X-Amz-Expires=300&X-Amz-Signature=5f28dcf6ea4c4d5709a3bb949c458889e419b077bf31a4457f4ce48078c010f0&X-Amz-SignedHeaders=host&actor_id=98752820&key_id=0&repo_id=690878901",
      description: "Start your daily tasks with our Todo App, your ultimate todo app. Streamline your to-dos, boost organization, and simplify life one task at a time. Effortlessly achieve your goals!",
      techStacks: ["angular", "typescript","tailwind CSS"],
      repolink: "https://github.com/Ajay84sia/Mini-Projects/tree/main/codebase/Todo%20App",
      livelink: "https://ajay84sia-angular-todos.netlify.app/",
    },
  ];

  return (
    <Box p={4}  bg={useColorModeValue('#edf2f8', '#444654')}>
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
