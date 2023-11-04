// import BarCharts from './components/BarChart';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Card from './components/Card';
import BarGraph from './components/BarGraph/BarGraph'
import Account from './components/Account';
import LineGraph from './components/LineGraph/LineGraph';
import Histro from './components/Histro';


function App() {
  return (

    <>
    <Header></Header>
    <div className='flex'>
    <SideBar></SideBar>
    <div className="bg-gray-100 flex flex-wrap h-full">
    <Card name="Invoices owed to you" graph={<LineGraph/> }></Card> 
    <Card name="Checking Account" graph={<BarGraph/> }></Card> 
   
    <Card name="Total cash flow" graph={<Histro/> }></Card> 

    <Card name="Account Watchlist" graph={<Account/> }></Card> 
    </div>
    
    </div>
      </>
  

    
  );
}

export default App;
