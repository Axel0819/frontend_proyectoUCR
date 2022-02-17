import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AdminRouters from './AdminRouters'
import ClientRouters from './ClientRouters'

export default function AppRouter() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={ <ClientRouters /> }/>
          <Route path="admin/*" element={ <AdminRouters /> }/>
        </Routes>
      </BrowserRouter>
  )
}
