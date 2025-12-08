import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Loading from './pages/Loading/Loading'
import Caching from './pages/Caching/Caching'
import Server from './pages/Server/Server'
import Render from './pages/Render/Render'
import Delay from './pages/Delay/Delay'
import './styles/globals.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/loading" element={<Loading />} />
              <Route path="/caching" element={<Caching />} />
              <Route path="/server" element={<Server />} />
              <Route path="/render" element={<Render />} />
              <Route path="/delay" element={<Delay />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App