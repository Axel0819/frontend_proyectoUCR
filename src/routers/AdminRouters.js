import { Routes, Route } from 'react-router-dom'

import Dashboard from '../pages/admin/Dashboard'
import Login from '../pages/admin/Login'

function AdminRouters() {
    return (
        <Routes>
              <Route index element={<Login />} />
              <Route path="dasboard" element={<Dashboard />} />
              <Route path="*" element={ <h1>Not found</h1> }/>
        </Routes>
    )
}

export default AdminRouters

