import "./style.css";
import { NodeProvider } from "@alephium/web3";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>@alephium/web3 Browser Test (Vite + TypeScript)</h1>
    <div id="result" class="result">Loading...</div>
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
}

main();
