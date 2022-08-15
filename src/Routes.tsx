import { Routes, Route } from 'react-router-dom'

import { Home } from './Home'
import { SignIn } from './SignIn'

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<Home />} />
    </Routes>
  )
}
