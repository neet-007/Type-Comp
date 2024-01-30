import AppButton from "./components/shared/AppButton/AppButton"
import './App.css'
import AppSelect from "./components/shared/AppSelect/AppSelect"
import GameTextContainer from "./components/GameText/GameTextContainer/GameTextContainer"
import { useAppContext } from "./context/Context"
import { Routes, Route } from "react-router-dom"
import { lazyLoad } from "./utils/lazyLoad"
import { Suspense } from "react"
import Card from "./components/Card/Card" 
import { useLogout } from "./lib/reactQuery/queriesAndMutaions"
//import MainPage from './pages/MainPage/MainPage'
//import Navbar from "./components/Navbar/Navbar"
//import AuthLayout from "./pages/AuthPage/AuthLayout/AuthLayout"
//import Login from "./pages/AuthPage/Login/Login"
//import Register from "./pages/AuthPage/Resgister/Register"
//import GamePage from "./pages/GamePage/GamePage"
//import Footer from "./components/Footer/Footer"
//import Help from "./pages/Help/Help"
//import Profile from "./pages/Profile/Profile"
//import MakeProfile from "./pages/Profile/MakeProfile/MakeProfile"

const MainPage = lazyLoad("../pages/MainPage/MainPage", null)
const Navbar = lazyLoad("../components/Navbar/Navbar", null)
const AuthLayout = lazyLoad("../pages/AuthPage/AuthLayout/AuthLayout", null)
const Login = lazyLoad("../pages/AuthPage/Login/Login", null)
const Register = lazyLoad("../pages/AuthPage/Resgister/Register", null)
const GamePage = lazyLoad("../pages/GamePage/GamePage", null)
const Profile = lazyLoad("../pages/Profile/Profile", null)
const MakeProfile = lazyLoad("../pages/Profile/MakeProfile/MakeProfile", null)
const Help = lazyLoad("../pages/Help/Help", null)
const Footer = lazyLoad("../components/Footer/Footer", null)
function App() {
  const {theme, user} = useAppContext()
  const {mutateAsync:logout} = useLogout()
  const [themeValue, setTheme ] = theme
  return (
    <main className={themeValue}>
     <Navbar/>
      <Suspense fallback={<h1>Loading...</h1>}>
     <Routes>
        <Route element={<AuthLayout/>}>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
          </Route>
          <Route path="" element={<MainPage/>}/>
          <Route path="/play" element={<GamePage/>}/>
          <Route path="/practice" element={<GamePage/>}/>
          <Route path="/one-word" element={<GamePage/>}/>
          <Route path="/ancient" element={<GamePage/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/make-profile" element={<MakeProfile/>}/>
      <Route path="/help" element={<Help/>}/>
     </Routes><button onClick={logout}>logout</button>
      </Suspense>
     <Footer/>
    </main>
  )
}

export default App
