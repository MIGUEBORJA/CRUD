import { BrowserRouter,Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/loginPage'
import { AuthProvider } from './context/AuthContext'
import TaskPage from './pages/TaskPage'
import TaskFormPage from './pages/TaskFormPage'
import ProfilePage from './pages/ProfilePage'
import ProtectedRoute from './ProtectedRoute'
import HomePage from './pages/HomePage'
import { TaskProvider } from './context/TaskContext'

function App() {
  return (
    <>
    <AuthProvider>
      <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
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
      </TaskProvider>
    </AuthProvider>
    </>
  )
}

export default App
