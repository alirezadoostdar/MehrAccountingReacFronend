import { useState } from 'react'
import { z } from 'zod'

const formSchema = z.object({
  username: z
    .string()
    .min(1, 'Please enter your username.')
    .max(5, 'Username must be at most 5 characters long.'),
  password: z.string().min(1, 'Please enter your password.'),
})

export function LogInForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function handleSubmit(e: React.FormEvent) {
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
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      <button type='submit'>Login</button>
    </form>
  )
}
