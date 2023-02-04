import React from 'react'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useColorMode,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Link
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link as ReactRouterDomLink } from "react-router-dom"

import { Logo } from '@components'

type Link = {
  name: string;
  href: string;
}

const links: Link[] = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About Us',
    href: '/about-us'
  },
  {
    name: 'Services',
    href: '/services'
  },
  {
    name: 'Our Projects',
    href: '/our-projects'
  },
  {
    name: 'Blog',
    href: '/blog'
  },
  {
    name: 'Contact Us',
    href: '/contact-us'
  }
]
const NavLink = ({ name, href }: Link) => (
  <Link
    as={ReactRouterDomLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    to={href}
    >
    {name}
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Logo />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {links.map(({name, href}) => (
                <NavLink key={href} name={name} href={href} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {links.map(({name, href}) => (
                <NavLink key={name} href={href} name={name} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Header
