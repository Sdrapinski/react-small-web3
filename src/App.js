import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { init, SayHI, getOwnBalance } from "./Web3Client";

function App() {
  const [balance, setbalance] = useState(100);
  // useEffect(() => {
  //   init();
  //   SayHI();
  // }, []);

  const fetchBalance = () => {
    getOwnBalance().then((balance) => {
      setbalance(balance);
    });
  };

  return (
    <div className="App">
      your Balance is {balance}
      <button onClick={() => fetchBalance()}>Refresh</button>
    </div>
  );
}

export default App;
