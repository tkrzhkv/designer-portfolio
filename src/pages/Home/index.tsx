import { Stack, Text, Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Stack h="100vh" bg="orange.400" color="black" p="40px">
      <Box w="400px">
        <Text color="black" fontSize="44px" fontWeight="bold">
          Hi, I'm Nika <br />
          and I am Graphic designer. <br />I creating the logo, branding
        </Text>
      </Box>
    </Stack>
  );
};

export default Home;
