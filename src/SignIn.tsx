import { useCookies } from 'react-cookie'

import { Link } from 'react-router-dom'

function SignIn() {
  const [_, setCookie] = useCookies(['@iHoldBankStorageCookie'])

  function handleRegisterAnCookie() {
    var date = new Date()
    date.setTime(date.getTime() + 60 * 1000) // 2 minute

    const options = {
      path: '/',
      expires: date,
    }

    const data = {
      user: {
        name: 'Ag',
        email: 'antoniogabriel2k20@gmail.com',
      },
    }

    setCookie('@iHoldBankStorageCookie', data, options)
  }

  return (
    <>
      <header>
        <h1>SignIn Page</h1>
      </header>

      <button onClick={handleRegisterAnCookie}>Register an cookie</button>

      <br /> <br />
      
      <Link to="/dashboard">Go to dashboard</Link>
    </>
  )
}

export { SignIn }
