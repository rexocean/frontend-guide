import React, { useState } from "react";
import ConnectWallet from "./components/ConnectWallet";
import TokenInfo from "./components/TokenInfo";
import SendToken from "./components/SendToken";

export default function App() {
  const [signer, setSigner] = useState(null);

  return (
    <div className="App">
      <h2>MyToken DApp</h2>
      <ConnectWallet onConnected={setSigner} />
      {signer && (
        <>
          <TokenInfo signer={signer} />
          <SendToken signer={signer} />
        </>
      )}
    </div>
  );
}
