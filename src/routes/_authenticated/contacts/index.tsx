import { createFileRoute } from '@tanstack/react-router'
import contactsList from '@/pages/contacts/contactsList'

export const Route = createFileRoute('/_authenticated/contacts/')({
  component: contactsList,
})
