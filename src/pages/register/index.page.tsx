import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react"
import { Container, Form, FormError, Header, Label } from "./styles"
import { ArrowRight } from "phosphor-react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { api } from "src/lib/axios"
import { AxiosError } from "axios"
import { NextSeo } from "next-seo"

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "O usuário precisa ter pelo menos 3 letras" })
    .regex(/^([a-z\\-]+)$/i, { message: "Apenas letras e hifens" })
    .transform((username) => username.toLowerCase()),
  name: z
    .string()
    .min(3, { message: "O nome precisa ter pelo menos 3 letras" }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const router = useRouter()

  useEffect(() => {
    if (router.query.username) {
      setValue("username", String(router.query.username))
    }
  }, [router.query?.username, setValue])

  async function handleRegister(data: RegisterFormData) {
    try {
      await api.post("/users", {
        name: data.name,
        username: data.username,
      })

      await router.push("/register/connect-calendar")
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        alert(error.response.data.message)
        return
      }
      console.log(error)
    }
  }

  return (
    <>
      <NextSeo title="Crie uma conta | Call" />

      <Container>
        <Header>
          <Heading as="strong">Bem-vindo(a) ao call!</Heading>
          <Text>
            Precisamos de algumas informações para criar o seu perfil! Ah, você
            pode editar essas informações depois.
          </Text>

          <MultiStep size={4} currentStep={1} />
        </Header>

        <Form as="form" onSubmit={handleSubmit(handleRegister)}>
          <Label>
            <Text size="sm">Nome de usuário</Text>
            <TextInput
              prefix="call.com/"
              placeholder="seu-usuario"
              {...register("username")}
            />
            {errors.username && (
              <FormError size="sm">{errors.username.message}</FormError>
            )}
          </Label>

          <Label>
            <Text size="sm">Nome completo</Text>
            <TextInput placeholder="Seu nome" {...register("name")} />
            {errors.name && (
              <FormError size="sm">{errors.name.message}</FormError>
            )}
          </Label>

          <Button type="submit" disabled={isSubmitting}>
            Próximo passo
            <ArrowRight weight="bold" />
          </Button>
        </Form>
      </Container>
    </>
  )
}
