
import './App.css';
import CollectionCard from './components/Collection Card/CollectionCard';
import Header from './components/Header/Header';
import { useState, useEffect } from 'react'
import axios from 'axios';
import PunkList from './components/PunkList/PunkList';
import Main from './components/Main/Main';


function App() {
  const [punkListData, setpunkListData] = useState([])
  const [selectedPunk, setselectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xfC26f8A70DFd20fB9b9cD5bB49Daf8F5857d2ff1&order_direction=asc')
      console.log(openSeaData.data.assets);
      setpunkListData(openSeaData.data.assets);
    }
    return getMyNfts()
  }, []);

  console.log("PunkList State : ", punkListData);
  return (
    <div className='app'>
      <Header />
      {/* <CollectionCard id={0} name='Bandana Punk' traits={[{ value: 7 }]} image='https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu' /> */}
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
          <PunkList punkListData={punkListData} setselectedPunk={setselectedPunk} />
        </>
      )}
    </div>
  )
}

export default App;
