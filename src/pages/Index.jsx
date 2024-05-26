import { Box, Container, Flex, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => (
  <Box as="nav" bg="gray.800" color="white" py={4}>
    <Container maxW="container.lg">
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <Stack direction="row" spacing={4}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </Stack>
      </Flex>
    </Container>
  </Box>
);

const Footer = () => (
  <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
    <Container maxW="container.lg">
      <Flex justify="space-between" align="center">
        <Text>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
        <Stack direction="row" spacing={4}>
          <Link href="https://facebook.com" isExternal><FaFacebook /></Link>
          <Link href="https://twitter.com" isExternal><FaTwitter /></Link>
          <Link href="https://instagram.com" isExternal><FaInstagram /></Link>
        </Stack>
      </Flex>
    </Container>
  </Box>
);

const Sidebar = () => (
  <Box as="aside" w={{ base: "100%", md: "25%" }} p={4} bg="gray.100">
    <Heading as="h3" size="md" mb={4}>Recent Posts</Heading>
    <VStack align="start" spacing={2}>
      <Link href="#">Post 1</Link>
      <Link href="#">Post 2</Link>
      <Link href="#">Post 3</Link>
    </VStack>
  </Box>
);

const MainContent = () => (
  <Box as="main" w={{ base: "100%", md: "75%" }} p={4}>
    <Heading as="h2" size="lg" mb={4}>Welcome to My Blog</Heading>
    <Text mb={4}>This is the main section where blog posts will be displayed.</Text>
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
  </Box>
);

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.lg" display="flex" flexDirection={{ base: "column", md: "row" }} py={8}>
        <MainContent />
        <Sidebar />
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;