import './App.css'
import Navigation from './components/Navigation'
import { BrowserRouter } from 'react-router-dom'
import Public from './routes/Public'
import Auth from './routes/Auth'

function App() {
  const isLogin = false

  if(isLogin){
    return (
      <div className='h-screen sm:flex'>
        <BrowserRouter>
          <Navigation/>
          <Public/>
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
