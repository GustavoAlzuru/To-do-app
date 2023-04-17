import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'

function App() {
  return (
    <div className='h-screen sm:flex'>
      <Navigation/>
      <Home/>
    </div>
  )
}

export default App
