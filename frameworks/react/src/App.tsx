import { useEffect, useState } from "react";
import { NodeProvider } from "@alephium/web3";
import "./App.css";

function App() {
  const [balance, setBalance] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

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
    </div>
  );
}

export default App;
