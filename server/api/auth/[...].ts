import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'

export interface ServerError extends Error {
  statusCode: number
  statusMessage: string
}

export default NuxtAuthHandler({
  pages: {
    signIn: '/auth/login',
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: 'Credentials',
      async authorize (credentials: any) {
        try {
          const login = await $fetch('/api/auth/login', {
            method: 'POST',
            body: {
              username: credentials?.username,
              password: credentials?.password
            }
          })
          return login
        } catch (error: ServerError | unknown) {
          // 에러처리
          if (error) {
            // 에러가 존재하는경우
            const err: ServerError = error as ServerError
            // 메시지를 담아서 에러처리
            throw createError(err.statusMessage)
          }
          return null
        }
      }
    })
  ]
})
