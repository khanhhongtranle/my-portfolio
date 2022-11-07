import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import NavBar from '../navbar'
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hong T.'s portfolio website" />
        <meta name="author" content="Hong T." />
        <title>Hong T. - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}
export default Main
