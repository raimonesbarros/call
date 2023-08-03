import { app_review } from "@assets/png"
import { Heading, Text } from "@ignite-ui/react"
import { Container, Hero, Preview } from "./styles"
import Image from "next/image"
import { ClaimUserForm } from "./ClaimUsernameForm"
import { NextSeo } from "next-seo"

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
      />

      <Container>
        <Hero>
          <Heading as="h1" size="4xl">
            Agendamento descomplicado
          </Heading>
          <Text>
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>

          <ClaimUserForm />
        </Hero>

        <Preview>
          <Image
            src={app_review}
            height={400}
            quality={100}
            priority
            alt="Calendário simbolizando aplicação em funcionamento"
          />
        </Preview>
      </Container>
    </>
  )
}
