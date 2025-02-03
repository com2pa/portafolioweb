import { Box, Flex } from '@chakra-ui/react';
import Habilidades from './Habilidades';
import Menu from '../layouts/Menu';
import Github from './Github';
import Footer from '../layouts/Footer';

export const About = () => {
  return (
    <>
      <Menu />
      <Box
        bg='gray.50'
        minH='100vh'
        p={8}
      >
        {/* <Container
          maxW='container.lg'
          py={8}
        > */}
        <Flex
          flexDir='column'
          gap={8}
        >
          <Habilidades />
          <Github />
        </Flex>
        {/* </Container> */}
      </Box>
      <Footer />
    </>
  );
};

export default About;
