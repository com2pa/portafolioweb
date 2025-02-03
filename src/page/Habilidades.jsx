'use client';

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow='lg' // Agregar sombra más pronunciada para dar profundidad
      borderWidth='1px'
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('blue.600', 'gray.500')}
      borderRadius={'1.25rem'} // Bordes más redondeados
      _hover={{ shadow: 'xl' }} // Sombra más grande al pasar el mouse
      transition='all 0.3s ease' // Animación suave
    >
      {children}
    </Box>
  );
}

// Validación de las props
PriceWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export const ThreeTierPricing = () => {
  return (
    <Box py={12}>
      <VStack
        spacing={4}
        textAlign='center'
      >
        <Heading
          as='h1'
          fontSize='4xl'
          color='blue.600'
        >
          Mis Habilidades
        </Heading>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign='center'
        justify='center'
        spacing={{ base: 6, lg: 12 }} // Aumentado espaciado entre las tarjetas
        py={10}
      >
        {/* Card 1 */}
        <PriceWrapper>
          <Box
            py={6}
            px={12}
            borderBottomWidth='1px'
            borderBottomColor={useColorModeValue('blue.600', 'gray.500')}
          >
            <Text
              fontWeight='600'
              fontSize='2xl'
              color='blue.600'
            >
              Front End Development
            </Text>
            <Text
              fontSize='sm'
              color='gray.500'
            >
              Me gusta codificar cosas desde cero y darle vida a las ideas en el
              navegador.
            </Text>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={6}
            borderBottomRadius={'xl'}
          >
            <List
              spacing={4}
              textAlign='start'
              px={12}
            >
              <ListItem>
                <ListIcon
                  as={FaCheckCircle}
                  color='blue.600'
                />
                HTML
              </ListItem>
              <ListItem>
                <ListIcon
                  as={FaCheckCircle}
                  color='blue.600'
                />
                CSS
              </ListItem>
              <ListItem>
                <ListIcon
                  as={FaCheckCircle}
                  color='blue.600'
                />
                JavaScript
              </ListItem>
            </List>
            <Box
              w='80%'
              pt={7}
            >
              <HStack justifyContent='center'>
                <Text
                  fontSize='sm'
                  fontWeight='600'
                >
                  Herramientas
                </Text>
              </HStack>
            </Box>
            <List
              spacing={4}
              textAlign='start'
              px={12}
            >
              <ListItem>
                <ListIcon
                  as={FaCheckCircle}
                  color='blue.600'
                />
                React
              </ListItem>
              <ListItem>
                <ListIcon
                  as={FaCheckCircle}
                  color='blue.600'
                />
                Chakra-ui
              </ListItem>
            </List>
          </VStack>
        </PriceWrapper>
        {/* Card 2 */}
        <PriceWrapper>
          <Box
            py={6}
            px={12}
            borderBottomWidth='1px'
            borderBottomColor={useColorModeValue('blue.600', 'gray.500')}
          >
            <Text
              fontWeight='600'
              fontSize='2xl'
              color='blue.600'
            >
              Back End Development
            </Text>
            <Text
              fontSize='sm'
              color='gray.500'
            >
              Me gusta construir servidores rápidos y seguros en combinación con
              bases de datos robustas.
            </Text>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={6}
            borderBottomRadius={'xl'}
          >
            <Box
              w='80%'
              pt={7}
            >
              <HStack justifyContent='center'>
                <Text
                  fontSize='sm'
                  fontWeight='600'
                >
                  Lenguajes
                </Text>
              </HStack>
            </Box>
            <List
              spacing={4}
              textAlign='start'
              px={12}
            >
              <ListItem>
                <ListIcon
                  as={FaCheckCircle}
                  color='blue.600'
                />
                JavaScript, NoSQL
              </ListItem>
            </List>
            <Box
              w='80%'
              pt={7}
            >
              <HStack justifyContent='center'>
                <Text
                  fontSize='sm'
                  fontWeight='600'
                >
                  Herramientas
                </Text>
              </HStack>
            </Box>
            <List
              spacing={4}
              textAlign='start'
              px={12}
            >
              <ListItem>
                <ListIcon
                  as={FaCheckCircle}
                  color='blue.600'
                />
                Node Js
              </ListItem>
              <ListItem>
                <ListIcon
                  as={FaCheckCircle}
                  color='blue.600'
                />
                Express
              </ListItem>
              <ListItem>
                <ListIcon
                  as={FaCheckCircle}
                  color='blue.600'
                />
                MongoDB
              </ListItem>
            </List>
          </VStack>
        </PriceWrapper>
        {/* Card 3 */}
        <PriceWrapper>
          <Box
            py={6}
            px={12}
            borderBottomWidth='1px'
            borderBottomColor={useColorModeValue('blue.600', 'gray.500')}
          >
            <Text
              fontWeight='600'
              fontSize='2xl'
              color='blue.600'
            >
              Tests
            </Text>
            <Text
              fontSize='sm'
              color='gray.500'
            >
              La depuración y la detección de errores se pueden realizar con
              pruebas.
            </Text>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={6}
            borderBottomRadius={'xl'}
          >
            <Box
              w='80%'
              pt={7}
            >
              <HStack justifyContent='center'>
                <Text
                  fontSize='sm'
                  fontWeight='600'
                >
                  Herramientas
                </Text>
              </HStack>
            </Box>
            <List
              spacing={4}
              textAlign='start'
              px={12}
            >
              <ListItem>
                <ListIcon
                  as={FaCheckCircle}
                  color='blue.600'
                />
                Jest
              </ListItem>
            </List>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
};

export default ThreeTierPricing;
