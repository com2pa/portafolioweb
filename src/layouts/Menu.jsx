'use client';

import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
export function Menu() {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();

  useEffect(() => {
    if (location?.pathname) {
      const currentNavItem = NAV_ITEMS.find(
        (item) => item.href === location.pathname
      );
      document.title = currentNavItem ? currentNavItem.label : 'Mi Aplicación';
    }
  }, [location]);

  return (
    <>
      <Outlet />
      <Box>
        <Flex
          bg={useColorModeValue('gray.100', 'gray.900')}
          color={useColorModeValue('gray.700', 'gray.200')}
          minH={'60px'}
          py={{ base: 2, md: 5 }}
          px={{ base: 4 }}
          align={'center'}
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon
                    w={3}
                    h={3}
                  />
                ) : (
                  <HamburgerIcon
                    w={5}
                    h={5}
                  />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{
              base: 'center',
              md: 'space-between',
              lg: 'space-between',
            }}
          >
            <Heading
              fontSize={{ base: 'md', md: 'lg' }}
              color='red.600'
              shadow='dark-lg'
              p='1'
              rounded='sm'
              bg='white'
            >
              Mvegas
            </Heading>
            <Flex
              display={{ base: 'none', md: 'flex' }}
              ml={10}
            >
              <DesktopNav />
            </Flex>
          </Flex>
        </Flex>
        <Collapse
          in={isOpen}
          animateOpacity
        >
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
}

const DesktopNav = () => (
  <Flex direction={'row'}>
    {NAV_ITEMS.map((navItem) => (
      <Box key={navItem.label}>
        <Popover
          trigger={'hover'}
          placement={'bottom-start'}
        >
          <PopoverTrigger>
            <Box
              as='a'
              p={2}
              href={navItem.href ?? '#'}
              fontSize={{ md: '12', lg: '20' }}
              fontWeight={500}
            >
              {navItem.label}
            </Box>
          </PopoverTrigger>
        </Popover>
      </Box>
    ))}
  </Flex>
);

const MobileNav = () => (
  <Stack
    bg={useColorModeValue('white', 'gray.800')}
    p={4}
    display={{ md: 'none' }}
  >
    {NAV_ITEMS.map((navItem) => (
      <MobileNavItem
        key={navItem.label}
        {...navItem}
      />
    ))}
  </Stack>
);

const MobileNavItem = ({ label, href }) => (
  <Stack spacing={4}>
    <Box
      py={2}
      as='a'
      href={href ?? '#'}
      _hover={{
        textDecoration: 'none',
        bgColor: useColorModeValue('#FFD700', 'white.200'),
      }}
    >
      <Text fontWeight={600}>{label}</Text>
    </Box>
  </Stack>
);
MobileNavItem.propTypes = {
  label: PropTypes.string.isRequired, 
  href: PropTypes.string,
};
const NAV_ITEMS = [
  { label: 'Inicio', href: '/mi-app/' },
  { label: 'Conoceme', href: '/mi-app/conoceme' },
  { label: 'Proyectos', href: '/mi-app/proyectos' },
  { label: 'Resumen', href: '/mi-app/resumen' },
];

export default Menu;
