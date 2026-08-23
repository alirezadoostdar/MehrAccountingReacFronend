import { useState } from 'react'
import { getContacts } from '@/Services/contacts/ContactService'
import { IconPlus, IconSearch } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ContactsTable } from './components/ContactsTable'

export function ContactsList() {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [search, setSearch] = useState('')
  const { data, isLoading } = getContacts({
    page,
    pageSize,
    search,
  })

  const contacts = data?.data ?? []
  console.log('contacts', contacts)
  const meta = data?.meta
  console.log('meta', meta)
  const totalPages = Math.ceil((meta?.TotalPages ?? 0) / pageSize)
  console.log('totalPages', totalPages)

  const handleSearch = (value: string) => {
    setSearch(value)
    setPage(1) // Reset to the first page when searching
  }
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
            onChange={(e) => handleSearch(e.target.value)}
            className='pl-9'
          />
        </div>
      </div>

      {/* Table */}
      {isLoading ? (
        <p className='text-sm text-muted-foreground'>Loading...</p>
      ) : (
        <ContactsTable data={contacts} globalFilter={search} />
      )}

      {/* Pagination */}
      <div className='flex items-center justify-between'>
        <p className='text-sm text-muted-foreground'>
          نمایش {(page - 1) * pageSize + 1} تا{' '}
          {Math.min(page * pageSize, meta?.TotalItems ?? 0)} از{' '}
          {meta?.TotalItems ?? 0} رکورد
        </p>
        <div className='flex items-center gap-2'>
          <Button
            variant='outline'
            size='sm'
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
          >
            قبلی
          </Button>
          <span className='text-sm'>
            {page} از {totalPages}
          </span>
          <Button
            variant='outline'
            size='sm'
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages}
          >
            بعدی
          </Button>
        </div>
      </div>
    </div>
  )
}
export default ContactsList
