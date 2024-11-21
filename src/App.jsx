import './App.css'
import Layout from './components/Layout';
import Hero from './components/Hero';
import VenuSection from './components/VenuSection';
import PreLaunch from './components/PreLaunch';
import Footer from './components/Footer';
import ExcitingFeatures from './components/ExcitingFeatures';

function App() {
  return (
    <Layout>
      <Hero />
      <VenuSection />
      <ExcitingFeatures />
      <PreLaunch />
      <Footer />
    </Layout>
  )
}

export default App