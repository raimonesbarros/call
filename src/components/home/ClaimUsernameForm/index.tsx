import { Button, TextInput } from "@ignite-ui/react"
import { Form } from "./styles"
import { ArrowRight } from "phosphor-react"

export function ClaimUserForm() {
  return (
    <Form as='form'>
      <TextInput size="sm" prefix="call.com/" placeholder="seu-usuário" />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight weight="bold" />
      </Button>
    </Form>
  )
}
