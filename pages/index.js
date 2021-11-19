import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button,
} from '@chakra-ui/react'

import Container from '../components/Container'

export default function Index() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <Container>
      <Head>
        <title>Super Cuaderno de xKokev</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hola, me llamo Kevin Correa
          <br />
           Estas son algunas de mis anotaciones, sientete libre de usarlas </Heading>
          <Text color={colorSecondary[colorMode]}>Naci en 🇻🇪 soy programador web, actualemte estoy trabajando con algunos proyectos personales que puedes ver en mi repositorio de GitHub</Text>
        </Flex>
      </Stack>
    </Container>
  )
}
