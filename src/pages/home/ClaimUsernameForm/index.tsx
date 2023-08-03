import { Button, Text, TextInput } from "@ignite-ui/react"
import { Form, FormAnnotation } from "./styles"
import { ArrowRight } from "phosphor-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from "next/router"

const ClaimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Mínimo três caracteres" })
    .regex(/^([a-z\\-]+)$/i, { message: "Apenas letras e hifens" })
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameData = z.infer<typeof ClaimUsernameFormSchema>

export function ClaimUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameData>({
    resolver: zodResolver(ClaimUsernameFormSchema),
  })

  const router = useRouter()

  async function handleClaimUsername(data: ClaimUsernameData) {
    const { username } = data

    await router.push(`/register?username=${username}`)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="call.com/"
          placeholder="seu-usuário"
          {...register("username")}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight weight="bold" />
        </Button>
      </Form>

      <FormAnnotation>
        <Text>
          {errors.username ? (
            <span>{errors.username.message}</span>
          ) : (
            "Digite o nome de usuário desejado"
          )}
        </Text>
      </FormAnnotation>
    </>
  )
}
