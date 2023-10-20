import { BrowserRouter,Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/loginPage'
import { AuthProvider } from './context/AuthContext'
import TaskPage from './pages/TaskPage'
import TaskFormPage from './pages/TaskFormPage'
import ProfilePage from './pages/ProfilePage'
import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/register' element={<RegisterPage/>}></Route>


          <Route element={<ProtectedRoute />}>
            <Route path='/tasks' element={<TaskPage/>}></Route>
            <Route path='/add-task' element={<TaskFormPage/>}></Route>
            <Route path='/tasks/:id' element={<TaskFormPage/>}></Route>
            <Route path='/profile' element={<ProfilePage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
