import logo from './logo.svg'
import './App.css'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='container content'></main>
      <Footer />
    </div>
  )
}

export default App
