import { getTokenFromCookie, getTokenFromLocalStorage } from '~/utils/auth'

/** https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback */
function isAuthorized (store) {
  return false
}

export default function ({ req, redirect, app, store }) {
  if (process.server && !req) return
  if (!isAuthorized(store)) {
    console.log(false)
  }
  const route = app.context.route
  const path = route.fullPath
  const token = process.server ? getTokenFromCookie(req) : getTokenFromLocalStorage()
  console.log('Auth ** {{path}} .:: {{token}}'.replace('{{token}}', token).replace('{{path}}', path))
  if (!token) {
    return redirect('/auth/login')
  }
}
