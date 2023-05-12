export default defineEventHandler(async (event) => {
  // 로그인 구현
  const body = await readBody(event)
  const user = {
    name: process.env.ADMIN_ID,
    password: process.env.ADMIN_PW
  }
  if (body.username == user.name && body.password == user.password) {
    // 인증통과
    console.log('인증통과')
    return {
      username: user.name,
      password: user.password,
      token: Math.random() * 1000000
    }
  }
  console.log('인증실패')
  // 그외는 실패로 판단
  throw createError({
    statusCode: 403,
    statusMessage: 'authentication failed',
  })
})