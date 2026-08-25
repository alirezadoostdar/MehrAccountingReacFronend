import React, { useState } from "react"
import useDialogState from "@/hooks/use-dialog-state"
import type { ContactListItem } from "@/Services/contacts/types/contactListItem"


type ContactDialogType = 'add' | 'edit' | 'delete'

type ContactsContextType = {
    open: ContactDialogType | null
    setOpen: (str: ContactDialogType | null) => void
    currentRow: ContactListItem | null
    setCurrentRow: React.Dispatch<React.SetStateAction<ContactListItem | null>>
}

const ContactsContext = React.createContext<ContactsContextType | null>(null)

export function ContactsProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useDialogState<ContactDialogType>(null)
    const [currentRow, setCurrentRow] = useState<ContactListItem | null>(null)

    return(
        <ContactsContext value = {{open,setOpen,currentRow,setCurrentRow}}>
            {children}
        </ContactsContext>
    )

}

export const useContacts = () => {
    const contactsContext = React.useContext(ContactsContext)
    if (!contactsContext) {
        throw new Error('useContacts has to be used within <ContactsContext>')
    }
    return contactsContext
}