import {Routes, Route} from 'react-router-dom'
import { Home } from './home'
import { Menu } from './menu'
import { Admin } from './admin'

export const Content = () => {
    return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ='/menu' element={<Menu/>} />
        <Route path='/admin' element={<Admin />} />
    </Routes>
    )
}