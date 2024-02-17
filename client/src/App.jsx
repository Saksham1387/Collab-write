import { useState } from 'react'
import './App.css'
import { Editor } from './Components/Editor'
import { HomePage } from './Components/HomePage'
import { HaveId } from './Components/HaveId'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import {v4 as uuid} from 'uuid'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path='/inside' element={<Navigate replace to={`/docs/${uuid()}`}/>}></Route>
      <Route path='/haveid'element={<HaveId/>}></Route>
      <Route path="/docs/:id" element={<Editor/>}></Route>
    </Routes>
    </BrowserRouter>
     
  )
}

export default App
