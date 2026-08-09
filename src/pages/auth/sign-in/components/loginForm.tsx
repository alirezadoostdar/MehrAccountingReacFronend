import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { login } from '@/Services/users/UserService'
import type { LoginRequest } from '@/Services/users/types/loginRequest'
import { Loader2, LogIn } from 'lucide-react'
import { toast } from 'sonner'
import { useAuthStore } from '@/stores/auth-store'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/password-input'

const formSchema = z.object({
  username: z
    .string()
    .min(1, 'Please enter your username.')
    .max(5, 'Username must be at most 5 characters long.'),
  password: z.string().min(1, 'Please enter your password.'),
})

interface UserLoginFormProps extends React.HTMLAttributes<HTMLFormElement> {
  redirectTo?: string
}

export function LogInForm({
  className,
  redirectTo,
  ...props
}: UserLoginFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: '', password: '' },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const loginRequest: LoginRequest = {
        username: data.username,
        password: data.password,
      }
      console.log('Login request:', loginRequest)
      const result = await login(loginRequest)
      /*       useAuthStore.setAuthToken(result.token) */
      toast.success('Login successful!')
      console.log('Login successful:', result)
    } catch (err) {
      console.error('Login failed:', err)
    } finally {
      console.log('Login request completed')
    }
  }
  /* const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({}) */

  /*   function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const result = formSchema.safeParse({ username, password })

    if (!result.success) {
      const fieldErrors: Record<string, string> = {}

      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as string] = issue.message
      })

      setErrors(fieldErrors)
      return
    }
    setErrors({})
    console.log({ username, password })
  } */

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('grid gap-3', className)}
        {...props}
      >
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder='Username' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder='*********' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='mt-2' disabled={isLoading}>
          {isLoading ? <Loader2 className='animate-spin' /> : <LogIn />}
          Log In
        </Button>
      </form>
    </Form>
  )
}
