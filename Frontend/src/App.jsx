import { Route, Routes } from 'react-router'
import CreatePage from "./pages/CreatePage"
import NoteDetailPage from "./pages/NoteDetailPage"
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <div>     
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/detail/:id' element={<NoteDetailPage/>}/>
      </Routes>
      
    </div>
  )
}

export default App

