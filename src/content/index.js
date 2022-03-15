import {Routes, Route} from 'react-router-dom'

export const Content = () => {
    return (
    <Routes>
        <Route path='/' element={<h1>Home!</h1>}/>
        <Route path ='/menu' element={<h1>Menu!</h1>} />
    </Routes>
    )
}