import { Box, Button, ButtonGroup, Flex } from '@chakra-ui/react';
import { AiOutlineDownload } from 'react-icons/ai';
import Menu from '../layouts/Menu';
import Footer from '../layouts/Footer';
import pdf from '/CV_MerwilVegas.pdf';

export const Resumen = () => {
  return (
    <Flex
      direction='column'
          minHeight='100vh'
         
    >
      <Menu />

      <Flex
        flex='1'
        flexDir='column'
        gap={{ base: 4, md: 8 }}
        alignItems='center'
        justifyContent='center'
        width='100%'
              px={{ base: 4, md: 4 }}
              py={4}
      >
        <ButtonGroup>
          <Button
            as='a'
            variant='solid'
            size='md'
            leftIcon={<AiOutlineDownload />}
            bg='blue.600'
            color='white'
            href={pdf}
            target='_blank'
            mb={4} // Margen inferior para separar del iframe
          >
            Ver Resumen
          </Button>
        </ButtonGroup>

        {/* Contenedor del PDF */}
        <Box
        //   flex='1'
          width='80%'         
          height='70vh'
          shadow='md'
          rounded='md'
          overflow='hidden'
        //   display='flex'
        >
          <iframe
            src={pdf}
            style={{
              width: '100%',
              height: '100%',
              display: 'block',
              border: 'none',
            //   flex: 1,
            }}
          ></iframe>
        </Box>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default Resumen;
