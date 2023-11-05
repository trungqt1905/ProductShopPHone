import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Header from './Component/Header/Header'
import Slider from './Component/Slider/Slider'
import Footer from './Component/Footer/Footer'
import ProductDetail from './Component/ProductDetail/ProductDetail'
import { Container } from '@mui/material'
import Products from './Component/Product/Products'
function App() {
  return (
    <>
      <Layout>
        <Header />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Slider />} />
            <Route path="/productDetail/:id" element={<ProductDetail />} />
            <Route path="/product/:id" element={<Products />} />  
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
        </Container>
        <Footer />
      </Layout>
    </>
  )
}

export default App
