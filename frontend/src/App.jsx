import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/ParentLogin';
import Register from './components/ParentRegister';



function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Register" element={<Register/>}/>
    </Routes>
  );
}

export default App;
