import { PrivateKeyWallet } from "@alephium/web3-wallet";
import "./style.css";
import { NodeProvider } from "@alephium/web3";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>@alephium/web3 Browser Test (Vite + TypeScript)</h1>
    <div id="result" class="result">Loading...</div>
    <div id="result-wallet" class="result">Loading...</div>
  </div>
`;

async function main() {
  const resultDiv = document.getElementById("result")!;

  try {
    const provider = new NodeProvider("https://node.mainnet.alephium.org");
    const testAddress = "1DZiFFX6fnSHuLnnmtBMUWeELWvnhRudYfzb17HYuV9aW";

    const balance = await provider.addresses.getAddressesAddressBalance(testAddress);
    resultDiv.textContent = "✅ Balance: " + balance.balanceHint;
  } catch (error) {
    resultDiv.textContent = "❌ Error: " + (error as Error).message;
    resultDiv.classList.add("error");
  }

  const wallet = new PrivateKeyWallet({
    privateKey: "a642942e67258589cd2b1822c631506632db5a12aabcf413604e785300d762a5",
  });

  const walletDiv = document.getElementById("result-wallet")!;
  walletDiv.textContent = "✅ Wallet: " + wallet.address;
}

main();
