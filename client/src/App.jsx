import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'
import Public from './routes/public'

function App() {
  return (
    <div className='h-screen sm:flex'>
      <BrowserRouter>
        <Navigation/>
        <Public/>
      </BrowserRouter>
    </div>
  )
}

export default App
