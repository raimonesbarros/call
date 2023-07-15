import { app_review } from "@assets/png"
import { Heading, Text } from "@ignite-ui/react"
import { Container, Hero, Preview } from "./styles"
import Image from "next/image"

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text>
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
      </Hero>

      <Preview>
        <Image src={app_review} height={400} alt="" quality={100} priority />
      </Preview>
    </Container>
  )
}
