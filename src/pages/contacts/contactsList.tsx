import { useState } from 'react'
import { getContacts } from '@/Services/contacts/ContactService'
import { IconPlus, IconSearch } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { ContactsTable } from './components/ContactsTable'
import { ContactsProvider } from './components/contacts-provider'

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
    <ContactsProvider>
      <Header fixed>
        <Search className='me-auto' />
        <ThemeSwitch />
        <ConfigDrawer />
        <ProfileDropdown />
      </Header>

      <Main className='flex flex-1 flex-col gap-4 sm:gap-6'>
        <div className='flex flex-wrap items-end justify-between gap-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>User List</h2>
            <p className='text-muted-foreground'>
              Manage your users and their roles here.
            </p>
          </div>
          {/* <UsersPrimaryButtons /> */}
        </div>
        <ContactsTable data={contacts} search={search} navigate={navigate} />
      </Main>
    </ContactsProvider>
  )
}
export default ContactsList
