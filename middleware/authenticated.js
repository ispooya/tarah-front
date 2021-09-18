export default function ({ $auth, redirect, route }) {
  // allowed routes when user is not authenticated
  const allowedRouts = ['/login', '/signup']

  if (allowedRouts.indexOf(route.path) === -1) {
    // this middleware not working if allowed to access route without login
    if (!$auth.$state.loggedIn) {
      return redirect('/login')
    }
  }
}
