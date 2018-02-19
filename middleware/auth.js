import { getTokenFromCookie, getTokenFromLocalStorage } from '~/utils/auth'

export default function ({ req, redirect }) {
  if (process.server && !req) return
  const token = process.server ? getTokenFromCookie(req) : getTokenFromLocalStorage()
  if (!token) {
    return redirect('/auth/login')
  }
}
