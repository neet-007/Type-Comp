import AppButton from "./components/shared/AppButton/AppButton"
import './App.css'
import AppSelect from "./components/shared/AppSelect/AppSelect"
import GameTextContainer from "./components/GameText/GameTextContainer/GameTextContainer"
import { useAppContext } from "./context/Context"
import Card from "./components/Card/Card"
import MainPage from './pages/MainPage/MainPage'
import Navbar from "./components/Navbar/Navbar"
import AuthLayout from "./pages/AuthPage/AuthLayout/AuthLayout"
import Login from "./pages/AuthPage/Login/Login"
import Register from "./pages/AuthPage/Resgister/Register"
import { Routes, Route } from "react-router-dom"
function App() {

  const [themeValue, setTheme] = useAppContext()
  return (
    <main className={themeValue}>
     <Navbar/>
     <Routes>
        <Route element={<AuthLayout/>}>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Route>
        <Route path="" element={''}/>
     </Routes>
    </main>
  )
}

export default App
