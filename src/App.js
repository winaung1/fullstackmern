
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { Home } from './components/Home';
import { UpdateEmployee } from './components/UpdateEmployee';
import { CreateEmployee } from './components/CreateEmployee';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createEmployee' element={<CreateEmployee/>}/>
        <Route path='/updateEmployee/:id' element={<UpdateEmployee/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
