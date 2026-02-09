import { useEffect, useState } from "react";
import { NodeProvider } from "@alephium/web3";
import "./App.css";
import { AlephiumConnectButton, AlephiumWalletProvider } from "@alephium/web3-react";
// import { PrivateKeyWallet } from "@alephium/web3-wallet";

function App() {
  const [balance, setBalance] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  // const [walletAddress, setWalletAddress] = useState<string | null>(null);


  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const provider = new NodeProvider("https://node.mainnet.alephium.org");
        const testAddress = "1DZiFFX6fnSHuLnnmtBMUWeELWvnhRudYfzb17HYuV9aW";
        const result = await provider.addresses.getAddressesAddressBalance(testAddress);
        setBalance(result.balanceHint);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      }
    };
    fetchBalance();

    // const wallet = new PrivateKeyWallet({
    //   privateKey: "a642942e67258589cd2b1822c631506632db5a12aabcf413604e785300d762a5",
    // });

    // setWalletAddress(wallet.address);
  }, []);

  return (
    <div className="App">
      <h1>@alephium/web3 React + TS + Vite</h1>
      <p>
        Test address: <code>1DZiFFX6fnSHuLnnmtBMUWeELWvnhRudYfzb17HYuV9aW</code>
      </p>
      {balance && <div className="result">✅ Balance: {balance}</div>}
      {error && <div className="result error">❌ Error: {error}</div>}
      {!balance && !error && <div className="result">Loading...</div>}

      {/* {walletAddress && <div className="result">✅ Wallet Address: {walletAddress}</div>} */}

      <AlephiumWalletProvider theme="retro" network="devnet" addressGroup={0}>
        <AlephiumConnectButton />
      </AlephiumWalletProvider>
    </div>
  );
}

export default App;
