import './App.css'
import Navbar from './components/Navbar/Navbar'
import Searchbar from './components/Searchbar/Searchbar'
import MainContent from './layout/MainContent'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Searchbar></Searchbar>
      <MainContent></MainContent>
    </>
  )
}

export default App
