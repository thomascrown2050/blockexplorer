import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState} from 'react';

import './App.css';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();
  let blockdata = {};
  let stringblockdata = "";

  useEffect(() => {
    async function getBlockNumber() {
    setBlockNumber(await alchemy.core.getBlockNumber());
    console.log(blockNumber);
    }
    getBlockNumber();
  });

  async function getBlockData() { 
    blockdata = await alchemy.core.getBlock(blockNumber);
    console.log(blockdata);
    stringblockdata = JSON.stringify(blockdata);
    }
    getBlockData();


  /*
  useEffect(() => {
    async function getBlockNumber() {
    setBlockNumber(await alchemy.core.getBlockNumber());
    console.log(blockNumber);
    }
    getBlockNumber();

    //getBlockdata
    async function getBlockData() { 
      setBlockData(await alchemy.core.getBlock(blockNumber));
      console.log(recentBlockData);
      }
      getBlockData();

  }, [blockNumber, recentBlockl]);
  */

  /*
   useEffect(() => {
    async function getBlockData() { 
    setBlockData(await alchemy.core.getBlock(blockNumber));
    console.log(recentBlockData);
    }
    getBlockData();
  });
*/

  return <div className="App">
  Most recent block number: {blockNumber}
  
  <div>
  Blockdata: {stringblockdata}
  </div>
  
  </div>;
}

export default App;
