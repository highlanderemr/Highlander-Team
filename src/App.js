import React from 'react'
import { Root, Routes } from 'react-static'
import 'semantic-ui-css/semantic.min.css';
import ResponsiveHeader from './components/Header/Header';
import './app.css'

function App() {
  return (
    <Root>
        <ResponsiveHeader />
      <div className="content">
        <Routes />
      </div>
    </Root>
  )
}

export default App
