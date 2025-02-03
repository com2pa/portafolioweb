import {
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  Box,
  Link,
} from '@chakra-ui/react';
import Saludo from '../assets/saludo.svg';
import Persona from '../assets/persona.svg';
import { FaGithub } from 'react-icons/fa';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import Footer from '../layouts/Footer';
import Menu from '../layouts/Menu';
import { motion } from 'framer-motion';
import Type from '../layouts/Type';
export const Home = () => {
  return (
    <>
      <Menu />
      <Flex
        flexDir='column'
        gap={{ base: 4, md: 8 }}
        p={{ base: 4, md: 8 }}
      >
        {/* Sección 1 */}
        <Flex
          as='section'
          justifyContent='center'
          height='100vh'
          w='100%'
          flexDir={{ base: 'column', md: 'row' }}
          bgGradient='linear(to-r, blue.100, blue.300, blue.500)' // Fondo con degradado
          p={{ base: 4, md: 8 }}
          borderRadius='lg'
        >
          {/* Lado del Texto */}
          <Flex
            w={{ base: '100%', md: '50%' }}
            h='100%'
            justifyContent='center'
            alignItems='center'
            flexDir='column'
            textAlign='center'
          >
            {['Hola !', 'Soy Merwil Vegas'].map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Heading
                  fontSize={{ base: 28, md: 50 }}
                  fontWeight='bold'
                  textAlign='center'
                  color='white'
                  textShadow='2px 2px 4px rgba(0,0,0,0.3)' // Sombra de texto sutil
                >
                  {text}
                </Heading>
              </motion.div>
            ))}

            <HStack
              p={{ base: '8', md: '12' }}
              color='white'
              fontSize={{ base: '24', md: '32', lg: '50' }}
            >
              <Type />
            </HStack>
          </Flex>

          {/* Lado de la Imagen */}
          <Flex
            w={{ base: '100%', md: '50%' }}
            h='100%'
            justifyContent='center'
            alignItems='center'
          >
            <motion.div
              whileHover={{ scale: 1.05 }} // Efecto de zoom al pasar el mouse
              transition={{ duration: 0.3 }}
            >
              <Image
                src={Saludo}
                alt='Ilustración de saludo'
                borderRadius='lg'
                shadow='xl'
              />
            </motion.div>
          </Flex>
        </Flex>

        {/* Sección 2 */}

        <Flex
          as='section'
          w='100%'
          h='100vh'
          bgGradient='linear(to-r, gray.100, gray.200, gray.300)'
          justifyContent='center'
          alignItems='center'
          flexDir={{ base: 'column', md: 'row' }}
          p={8}
          borderRadius='lg'
          shadow='lg'
        >
          {/* Contenedor de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box
              w={{ base: '100%', md: '60%' }}
              textAlign='center'
              p={{ base: 6, md: 12 }}
              bg='white'
              borderRadius='md'
              shadow='md'
            >
              <Heading
                fontSize={{ base: '1rem', md: '1.2rem' }}
                color='blue.600'
              >
                DÉJAME PRESENTARME
              </Heading>
              {[
                'Me enamoré de la tecnología estando en la universidad en el laboratorio de robótica, donde pude aplicar programación, mecánica y electrónica.',
                'Me gusta mucho JavaScript.',
                'Mis campos de interés son la creación de nuevas tecnologías y productos web.',
                'Siempre que sea posible, aplico mi pasión por desarrollar productos con Node.js y frameworks modernos como React.js.',
              ].map((paragraph, index) => (
                <Text
                  key={index}
                  fontSize={{ base: '0.9rem', md: '1.2rem' }}
                  color='gray.700'
                  mt={2}
                  textAlign='justify'
                >
                  {paragraph}
                </Text>
              ))}
            </Box>
          </motion.div>

          {/* Contenedor de Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Flex
              w={{ base: '100%', md: '40%' }}
              justifyContent='center'
              mt={{ base: 8, md: 0 }}
            >
              <Image
                src={Persona}
                alt='Ilustración de persona'
                width={{ base: 150, md: 300 }}
                borderRadius='full'
                shadow='lg'
              />
            </Flex>
          </motion.div>
        </Flex>

        {/* Sección 3 */}
        <Flex
          as='section'
          w='100%'
          bgGradient='linear(to-r, blue.700, blue.500)'
          justifyContent='center'
          flexDir='column'
          pt={{ base: 6, md: 10 }}
          pb={8}
          textAlign='center'
          color='white'
          borderTopRadius='3xl'
          shadow='xl'
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Heading
              fontSize={{ base: '1.2rem', md: '1.5rem' }}
              fontWeight='bold'
            >
              ENCUÉNTRAME EN
            </Heading>
            <Text
              fontSize={{ base: '1rem', md: '1.3rem' }}
              mt={2}
            >
              Siéntete libre de conectarte conmigo
            </Text>
            <Text
              fontSize={{ base: '1rem', md: '1.3rem' }}
              fontWeight='bold'
              mt={1}
            >
              com2pa@gmail.com
            </Text>
          </motion.div>

          {/* Iconos de Redes Sociales */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Flex
              p={6}
              gap={6}
              justifyContent='center'
            >
              <Link
                href='https://github.com/com2pa'
                isExternal
              >
                <IconButton
                  aria-label='GitHub'
                  colorScheme='whiteAlpha'
                  isRound
                  size='lg'
                  _hover={{ bg: 'whiteAlpha.700', transform: 'scale(1.1)' }}
                  transition='0.3s'
                  icon={<FaGithub fontSize={40} />}
                />
              </Link>
              <Link
                href='https://www.linkedin.com/in/merwilvegas/'
                isExternal
              >
                <IconButton
                  aria-label='LinkedIn'
                  colorScheme='whiteAlpha'
                  isRound
                  size='lg'
                  _hover={{ bg: 'whiteAlpha.700', transform: 'scale(1.1)' }}
                  transition='0.3s'
                  icon={<TiSocialLinkedinCircular fontSize={40} />}
                />
              </Link>
            </Flex>
          </motion.div>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default Home;
