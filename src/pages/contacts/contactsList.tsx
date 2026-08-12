import { useState } from 'react'
import { getContacts } from '@/Services/contacts/ContactService'
import { IconPlus, IconSearch } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ContactsTable } from './components/ContactsTable'

export function ContactsList() {
  const [search, setSearch] = useState('')
  const { data = [], isLoading } = getContacts()

  return (
    <div className='space-y-4 p-6'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-semibold'>Contacts</h1>
          <p className='text-sm text-muted-foreground'>
            Manage your contacts and clients
          </p>
        </div>
        <Button>
          <IconPlus className='mr-2 h-4 w-4' />
          Add contact
        </Button>
      </div>

      {/* Search toolbar */}
      <div className='flex items-center gap-2'>
        <div className='relative max-w-sm flex-1'>
          <IconSearch className='absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
          <Input
            placeholder='Search contacts...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='pl-9'
          />
        </div>
      </div>

      {/* Table */}
      {isLoading ? (
        <p className='text-sm text-muted-foreground'>Loading...</p>
      ) : (
        <ContactsTable data={data} globalFilter={search} />
      )}
    </div>
  )
}
export default ContactsList
