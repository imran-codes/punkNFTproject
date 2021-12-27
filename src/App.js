import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [data, setData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getNFTs = async () => {
      const data = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x5c031F66B754596E91ea3c7b009e5DfCaC2Aff99&order_direction=asc');
      console.log(data)
      setData(data.data.assets);
    }
    return getNFTs();
  }, [])

  return (
    <div className="app">
     <Header />
     {
       data.length > 0 && (
         <>
         <Main selectedPunk={selectedPunk} data={data} />
         <PunkList data={data} setSelectedPunk={setSelectedPunk} />
         </>
       )
     }
    </div>
  );
}

export default App;
