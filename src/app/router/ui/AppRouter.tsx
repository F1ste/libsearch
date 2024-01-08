import { Routes, Route, Navigate } from "react-router-dom"
import MainPage from "../../../pages/MainPage"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="single" element={<>single</>} />

        </Routes>
    )
}