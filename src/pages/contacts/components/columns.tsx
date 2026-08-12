import { type ColumnDef } from '@tanstack/react-table'
import { type ContactListItem } from '@/Services/contacts/types/contactListItem'

export const columns: ColumnDef<ContactListItem>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'mobile',
    header: 'Mobile',
  },
  { accessorKey: 'city', header: 'City' },
  { accessorKey: 'state', header: 'State' },
  { accessorKey: 'zone', header: 'Zone' },
  { accessorKey: 'zipCode', header: 'Zip Code' },
]
