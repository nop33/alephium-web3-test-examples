import { NodeProvider } from "@alephium/web3";
import { PrivateKeyWallet } from "@alephium/web3-wallet";

async function main() {
  const provider = new NodeProvider("https://node.mainnet.alephium.org");
  const testAddress = "1DZiFFX6fnSHuLnnmtBMUWeELWvnhRudYfzb17HYuV9aW";

  try {
    const balance = await provider.addresses.getAddressesAddressBalance(testAddress);
    console.log("✅ Balance through ESM:", balance.balanceHint);
  } catch (error) {
    console.error("❌ Error:", error);
  }

  const wallet = new PrivateKeyWallet({
    privateKey: "a642942e67258589cd2b1822c631506632db5a12aabcf413604e785300d762a5",
  });
  console.log("✅ Wallet address through ESM:", wallet.address);
}

main();
