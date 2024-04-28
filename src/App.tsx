import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './page/Home'
import Signup from './page/page1/Signup'
import NotFound from './page/NotFound'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/page1" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

function App() {
    return <RouterProvider router={router} />
}

export default App
