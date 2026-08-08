import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const formSchema = z.object({
  username: z
    .string()
    .min(1, 'Please enter your username.')
    .max(5, 'Username must be at most 5 characters long.'),
  password: z.string().min(1, 'Please enter your password.'),
})

export function LogInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: '', password: '' },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <input placeholder='Username' {...field} />
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
                <input placeholder='Password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type='submit'>Submit</button>
      </form>
    </Form>
  )
}
