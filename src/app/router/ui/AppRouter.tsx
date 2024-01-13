import { Routes, Route } from "react-router-dom"
import MainPage from "src/pages/MainPage"
import { NotFoundPage } from "src/pages/NotFoundPage"
import { SingleBookPage } from "src/pages/SingleBookPage"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/libsearch" element={<MainPage />} />
            <Route path="/libsearch/book/:book" element={<SingleBookPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}