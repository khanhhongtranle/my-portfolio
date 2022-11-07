import {
    Box,
    Container,
    Flex, Grid,
    Heading,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Link from 'next/link'
import ThemeToggleButton from './theme-toggle-button'
import LanguageToggleButton from './language-toggle-button'
const LinkItem = ({ href, path, target, children, ...props }) => {
  console.log(href)
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}
const NavBar = props => {
  const { path } = props
  console.log(props)
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={'#ffffff40'}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Link href="/" scroll={false}>
              <Text
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                fontFamily='M PLUS Rounded 1c", sans-serif'
                fontWeight="bold"
                ml={3}
              >
                Hong T.
              </Text>
            </Link>
          </Heading>
        </Flex>

        {/*<Stack*/}
        {/*    direction={{ base: 'column', md: 'row' }}*/}
        {/*    display={{ base: 'none', md: 'flex' }}*/}
        {/*    width={{ base: 'full', md: 'auto' }}*/}
        {/*    alignItems="center"*/}
        {/*    flexGrow={1}*/}
        {/*    mt={{ base: 4, md: 0 }}*/}
        {/*>*/}
        {/*    <LinkItem href="/works" path={path}>*/}
        {/*        Works*/}
        {/*    </LinkItem>*/}
        {/*    <LinkItem href="/posts" path={path}>*/}
        {/*        Posts*/}
        {/*    </LinkItem>*/}
        {/*    <LinkItem href="/users">*/}
        {/*        Uses*/}
        {/*    </LinkItem>*/}
        {/*</Stack>*/}

        <Box flex={1} align="right">
                <LanguageToggleButton />

                <ThemeToggleButton />


          {/*<Box ml={2} display={{ base: 'inline-block', md: 'none' }}>*/}
          {/*    <Menu isLazy id="navbar-menu">*/}
          {/*        <MenuButton*/}
          {/*            as={IconButton}*/}
          {/*            icon={<HamburgerIcon />}*/}
          {/*            variant="outline"*/}
          {/*            aria-label="Options"*/}
          {/*        />*/}
          {/*        <MenuList>*/}
          {/*            <NextLink href="/" passHref>*/}
          {/*                <MenuItem as={Link}>About</MenuItem>*/}
          {/*            </NextLink>*/}
          {/*            <NextLink href="/works" passHref>*/}
          {/*                <MenuItem as={Link}>Works</MenuItem>*/}
          {/*            </NextLink>*/}
          {/*            <NextLink href="/posts" passHref>*/}
          {/*                <MenuItem as={Link}>Posts</MenuItem>*/}
          {/*            </NextLink>*/}
          {/*            <NextLink href="https://uses.craftz.dog/" passHref>*/}
          {/*                <MenuItem as={Link}>Uses</MenuItem>*/}
          {/*            </NextLink>*/}
          {/*            <MenuItem*/}
          {/*                as={Link}*/}
          {/*                href="https://github.com/craftzdog/craftzdog-homepage"*/}
          {/*            >*/}
          {/*                View Source*/}
          {/*            </MenuItem>*/}
          {/*        </MenuList>*/}
          {/*    </Menu>*/}
          {/*</Box>*/}
        </Box>
      </Container>
    </Box>
  )
}
export default NavBar
