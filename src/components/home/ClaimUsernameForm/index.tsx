import { Button, TextInput } from "@ignite-ui/react"
import { Form } from "./styles"
import { ArrowRight } from "phosphor-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const ClaimUsernameFormSchema = z.object({
  username: z.string(),
})

type ClaimUsernameData = z.infer<typeof ClaimUsernameFormSchema>

export function ClaimUserForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameData>()

  async function handleClaimUsername(data: ClaimUsernameData) {
    console.log(data)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        size="sm"
        prefix="call.com/"
        placeholder="seu-usuário"
        {...register("username")}
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight weight="bold" />
      </Button>
    </Form>
  )
}
