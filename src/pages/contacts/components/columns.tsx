import { type ColumnDef } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { type ContactListItem } from '@/Services/contacts/types/contactListItem'

export function useContactColumns(): ColumnDef<ContactListItem>[] {
  const { t } = useTranslation('contacts')

  return [
    { accessorKey: 'id', header: t('columns.id') },
    { accessorKey: 'name', header: t('columns.name') },
    { accessorKey: 'address', header: t('columns.address') },
    { accessorKey: 'email', header: t('columns.email') },
    { accessorKey: 'phone', header: t('columns.phone') },
    { accessorKey: 'mobile', header: t('columns.mobile') },
    { accessorKey: 'city', header: t('columns.city') },
    { accessorKey: 'state', header: t('columns.state') },
    { accessorKey: 'zone', header: t('columns.zone') },
    { accessorKey: 'zipCode', header: t('columns.zipCode') },
  ]
}
