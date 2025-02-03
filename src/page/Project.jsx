import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,  
} from '@chakra-ui/react';
import { IoEyeSharp } from 'react-icons/io5';
import Servicio from '../assets/servicioEnfermeria.png';
import Colegio from '../assets/casaDeNiños.png';
import Cita from '../assets/cita.png';
import Menu from '../layouts/Menu';
import Footer from '../layouts/Footer';

const projects = [
  {
    title: 'Enfermería en casa',
    description:
      'Plataforma para gestionar citas con personal de enfermería en casa, enfocada en personas con discapacidades y adultos mayores.',
    image: Servicio,
    liveUrl: 'https://backend-enfermeria.onrender.com/',
    codeUrl: 'https://github.com/com2pa/frontEnd_Enfermeria',
  },
  {
    title: 'Portal web para colegio',
    description:
      'Plataforma para gestionar registros de usuarios (representantes, alumnos y maestros), permitiendo asignaciones y calificaciones.',
    image: Colegio,
    liveUrl: 'https://backcolegio.onrender.com/',
    codeUrl: 'https://github.com/com2pa/backColegio',
  },
  {
    title: 'Servicio de citas',
    description:
      'Plataforma para gestionar citas para servicios como corte de cabello, manicure y pedicure.',
    image: Cita,
    liveUrl: 'https://backcitas.onrender.com',
    codeUrl: 'https://github.com/com2pa/cita',
  },
];

export const Project = () => {
  return (
    <Flex
      direction='column'
      minHeight='100vh'
    >
      <Menu />

      <Flex
        direction='column'
        align='center'
        my={4}
              flex='1'
             justifyContent={'center'}
              
      >
        <Heading
          as='h1'
          size='2xl'
          color='blue.600'
        >
          Proyecto Web
        </Heading>
        <Heading
          as='h4'
          size='md'
          color='blue.500'
          mt={2}
        >
          CRUD - MERN
        </Heading>
      </Flex>

      <Flex
        flex='1'
        px={6}
        my={4}
      >
        <Grid
          //   flex='1'
          templateColumns='repeat(auto-fill, minmax(300px, 1fr))'
          gap={6}
          w='100%'
        >
          {projects.map((project, index) => (
            <GridItem
              key={index}
              w='100%'
              //   h='100%'
              display='flex'
            >
              <Card
                h='100%'
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
                _hover={{
                  boxShadow: '0 0 15px rgba(0, 123, 255, 0.3)',
                  transition: '0.3s ease-in-out',
                  cursor: 'pointer',
                  transform: 'translateY(-5px)',
                }}
              >
                <CardBody
                  display='flex'
                  flexDirection='column'
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    objectFit='cover'
                    borderRadius='md'
                  />
                  <Stack
                    mt={4}
                    spacing={3}
                    flex='1'
                  >
                    <Heading size='md'>{project.title}</Heading>
                    <Text>{project.description}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup
                    flexDir={'column'}
                    spacing={2}
                    justifyContent={'center'}
                  >
                    <Button
                      as='a'
                      variant='solid'
                      colorScheme='blue'
                      href={project.liveUrl}
                      target='_blank'
                      leftIcon={<IoEyeSharp />}
                    >
                      Ver en línea
                    </Button>
                    <Button
                      as='a'
                      variant='ghost'
                      colorScheme='blue'
                      href={project.codeUrl}
                      target='_blank'
                      leftIcon={<IoEyeSharp />}
                    >
                      Código GitHub
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default Project;
