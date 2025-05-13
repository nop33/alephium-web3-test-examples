import { NodeProvider } from "@alephium/web3";

async function main() {
  // Create a NodeProvider instance
  const provider = new NodeProvider("https://node.mainnet.alephium.org");

  // Test address (you can replace this with any valid Alephium address)
  const testAddress = "1DZiFFX6fnSHuLnnmtBMUWeELWvnhRudYfzb17HYuV9aW";

  try {
    // Query the balance
    const balance = await provider.addresses.getAddressesAddressBalance(testAddress);
    console.log("Balance:", balance.balanceHint);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
