import './App.css'
import LIneCharts from './components/LineChart/LIneCharts'
import Navbar from './components/Navbar/Navbar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'
function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <Daisy></Daisy> */}
      <PriceOptions></PriceOptions>
      <LIneCharts
      ></LIneCharts>
      <Phones></Phones>
    </>
  )
}

export default App
