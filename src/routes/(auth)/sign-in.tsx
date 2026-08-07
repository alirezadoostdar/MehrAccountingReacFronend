import { z } from 'zod'
import { createFileRoute } from '@tanstack/react-router'
import { redirect } from '@tanstack/react-router'
import { LogIn } from '@/pages/auth/sign-in'
import { useAuthStore } from '@/stores/auth-store'

const searchSchema = z.object({
  redirect: z.string().optional(),
})

export const Route = createFileRoute('/(auth)/sign-in')({
  beforeLoad: () => {
    const token = useAuthStore.getState().auth.accessToken
    console.log('Sign-in route beforeLoad, token:', token)
    if (token) {
      throw redirect({ to: '/dashboard' })
    }
  },

  component: LogIn,
  validateSearch: searchSchema,
})
