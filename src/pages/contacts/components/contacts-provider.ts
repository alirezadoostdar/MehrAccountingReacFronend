import React, { useState } from 'react'
import useDialogState from '@/hooks/use-dialog-state'
import { type User } from '../data/schema'

type ContactsDialogType = 'invite' | 'add' | 'edit' | 'delete'

type ContactsContextType = {
  open: ContactsDialogType | null
  setOpen: (str: ContactsDialogType | null) => void
  currentRow: User | null
  setCurrentRow: React.Dispatch<React.SetStateAction<User | null>>
}

const ContactsContext = React.createContext<ContactsContextType | null>(null)

export function ContactsProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useDialogState<ContactsDialogType>(null)
  const [currentRow, setCurrentRow] = useState<User | null>(null)

  return (
    <ContactsContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </ContactsContext>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useContacts = () => {
  const contactsContext = React.useContext(ContactsContext)

  if (!contactsContext) {
    throw new Error('useContacts has to be used within <ContactsContext>')
  }

  return contactsContext
}
