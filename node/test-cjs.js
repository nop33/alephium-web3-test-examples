const { NodeProvider } = require("@alephium/web3");

async function main() {
  const provider = new NodeProvider("https://node.mainnet.alephium.org");
  const testAddress = "1DZiFFX6fnSHuLnnmtBMUWeELWvnhRudYfzb17HYuV9aW";

  try {
    const balance = await provider.addresses.getAddressesAddressBalance(testAddress);
    console.log("✅ Balance through CJS:", balance.balanceHint);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

main();
