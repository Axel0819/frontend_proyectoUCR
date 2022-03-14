import { Routes, Route } from 'react-router-dom'
import ClientLayout from '../components/client/layouts/ClientLayout'

import HomePage from '../pages/client/HomePage'
import AboutUsPage from '../pages/client/AboutUsPage'
import CoursesPage from '../pages/client/CoursesPage'
import PricesPage from '../pages/client/PricesPage'
import { CoursePage } from '../pages/client/CoursePage'

function ClientRouters() {
    return (
        <Routes>
          <Route path="/" element={<ClientLayout />}>
            <Route index element={<HomePage />} />
            <Route path="aboutus" element={<AboutUsPage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="course/:id" element={<CoursePage />} />
            <Route path="prices" element={<PricesPage />} />
            <Route path="*" element={ <h1>Not found</h1> }/>
          </Route>
        </Routes>
    )
}

export default ClientRouters