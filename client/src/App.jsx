import './App.css'
import Navigation from './components/Navigation'
import { BrowserRouter } from 'react-router-dom'
import Public from './routes/Public'
import Auth from './routes/Auth'
import TasksProvider from './context/TasksContext'

function App() {
  const isLogin = true

  if(isLogin){
    return (
      <div className='h-screen sm:flex'>
        <BrowserRouter>
          <TasksProvider>
            <Navigation/>
            <Public/>
          </TasksProvider>
        </BrowserRouter>
      </div>
    )
  }else{
    return (
      <>
        <BrowserRouter>
          <Auth/>
        </BrowserRouter>
      </>
    )
  }
}

export default App
