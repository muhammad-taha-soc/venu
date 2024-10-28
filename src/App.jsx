import { useState } from 'react'
import './App.css'
import Layout from './components/Layout';
import Hero from './components/Hero';
import TrustedBrands from './components/TrustedBrands';
import VenuSection from './components/VenuSection';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Layout>
      <Hero />
      <VenuSection />
      <TrustedBrands />
    </Layout>
  )
}

export default App
