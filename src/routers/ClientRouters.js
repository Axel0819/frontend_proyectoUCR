import { Routes, Route } from 'react-router-dom'
import ClientLayout from '../components/ClientLayout'

import Courses from '../pages/client/Courses'
import Home from '../pages/client/Home'

function ClientRouters() {
    return (
        <Routes>
          <Route path="/" element={<ClientLayout />}>
            <Route index element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path="*" element={ <h1>Not found</h1> }/>
          </Route>
        </Routes>
    )
}

export default ClientRouters