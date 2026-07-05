import { type ColumnDef } from '@tanstack/react-table'
import { type ContactType } from '../types/ContactTypes'

export const columns: ColumnDef<ContactType>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
]
