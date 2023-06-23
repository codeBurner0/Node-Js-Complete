
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './components/Signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/product' element={<h2>Product page</h2>}/>
          <Route path='/add' element={<h2>Add Product page</h2>}/>
          <Route path='/update' element={<h2>Update Product page</h2>}/>
          <Route path='/logout' element={<h2>Logout page</h2>}/>
          <Route path='/profile' element={<h2>Profile page</h2>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
