import { CookiesProvider } from 'react-cookie'
import { BrowserRouter } from 'react-router-dom'

import { Routers } from './Routes'

function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </CookiesProvider>
  )
}

export default App
