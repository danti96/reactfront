import logo from './logo.svg';
import './App.css';
//*Routes React

import {BrowserRouter, Routes, Route} from 'react-router-dom'

//* Imnportar los componentes

import ShowProduct from './components/ShowProduct'
import CreateProduct from './components/CreateProduct'
import EditProduct from './components/EditProduct'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowProduct/>} />
          <Route path="/create" element={<CreateProduct/>}/>
          <Route path="/edit/:id" element={<EditProduct/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
