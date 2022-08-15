import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigator = useNavigate()
  const [cookie] = useCookies(['@iHoldBankStorageCookie'])
  
  if (cookie['@iHoldBankStorageCookie'] === null) {
    navigator('/')

    return;
  }

  return (
    <>
      <header>
        <h1>Home</h1>
      </header>

      <ul>
        <li>{cookie['@iHoldBankStorageCookie']?.user?.name}</li>
      </ul>
    </>
  )
}

export { Home }
