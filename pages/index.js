import {
  Box,
  Button,
  Container,
  Heading,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'
import Link from 'next/link'
import { IoLogoLinkedin, IoLogoGithub, IoMail } from 'react-icons/io5'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale))
      // Will be passed to the page component as props
    }
  }
}
const Home = () => {
  const { t } = useTranslation('home')
  return (
    <Container paddingX={0} paddingY={10} maxW="container.lg">
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        {t('GREETING')}
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
              {t('FULL_NAME')}
          </Heading>
          <p>Software Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          ></Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          {t('WORK')}
        </Heading>
        <Paragraph>{t('WORK_DESCRIPTION')}</Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button colorScheme="teal">{t('MY_PORTFOLIO')}</Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          {t('BIO')}
        </Heading>
        <Container maxW={'100%'} paddingX={'16px'}>
          <BioSection>
            <BioYear>2020 - 2022</BioYear>
            {t('BIO_2020_2022')}
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            {t('BIO_2021')}
          </BioSection>
          <BioSection>
            <BioYear>2022 {t('TO_PRESENT')}</BioYear>
            {t('BIO_2022')}
          </BioSection>
        </Container>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          {t('CONTACT_ME')}
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/khanhhongtranle" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                khanhhongtranle
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/khanhhongtranle/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Hong Tran
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:khanhhong.tranle@gmail.com" target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={<IoMail />}>
                khanhhong.tranle@gmail.com
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  )
}
export default Home
