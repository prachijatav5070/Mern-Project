import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Search from "./pages/Search";
import Edit from "./pages/Editnew";
import Delete from "./pages/Delete";
import './css/index.css';
import Registraion from "./pages/Registration";



const App=()=>{
  return(
    <>
           <BrowserRouter>
              <Routes>

                  <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>}/>
                  <Route path="home" element={<Home/>}/>
                  <Route path="insert" element={<Insert/>}/>
                  <Route path="display" element={<Display/>}/>
                  <Route path="search" element={<Search/>}/>
                  <Route path="delete" element={<Delete/>}/> 
                  <Route path="edit/:id" element={<Edit/>}/> 
                  <Route path="Registraion" element={<Registraion/>}/>

                  </Route>
              </Routes>
           </BrowserRouter>
         
    </>
  )
}
export default App;