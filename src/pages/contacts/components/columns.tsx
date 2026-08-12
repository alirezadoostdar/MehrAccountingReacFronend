import { type ColumnDef } from '@tanstack/react-table'
import { type ContactListItem } from '@/Services/contacts/types/contactListItem'

export const columns: ColumnDef<ContactListItem>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
]
