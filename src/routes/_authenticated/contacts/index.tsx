import { createFileRoute } from '@tanstack/react-router'
import { ContactsList } from '@/pages/contacts/contactsList'

export const Route = createFileRoute('/_authenticated/contacts/')({
  component: ContactsList,
})
