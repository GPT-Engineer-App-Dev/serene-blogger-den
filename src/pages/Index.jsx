import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" padding={4} align="center">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          My Blog
        </Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">About</Link>
          <Link href="#" color="white">Blog</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Container maxW="container.xl" mt={10}>
        <Flex direction={{ base: "column", md: "row" }} spacing={10}>
          {/* Blog Posts Section */}
          <Box flex="3">
            <VStack spacing={8} align="stretch">
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Blog Post Title</Heading>
                <Text mt={4}>This is a summary of the blog post. Click to read more...</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Another Blog Post</Heading>
                <Text mt={4}>This is another summary of a blog post. Click to read more...</Text>
              </Box>
            </VStack>
          </Box>

          {/* Sidebar */}
          <Box flex="1" ml={{ md: 10 }} mt={{ base: 10, md: 0 }}>
            <Heading fontSize="lg" mb={4}>Recent Posts</Heading>
            <VStack spacing={4} align="stretch">
              <Link href="#">Recent Post 1</Link>
              <Link href="#">Recent Post 2</Link>
              <Link href="#">Recent Post 3</Link>
            </VStack>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4} mt={10}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Text>© 2023 My Blog. All rights reserved.</Text>
            <HStack spacing={4}>
              <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;