import "react-native-get-random-values";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NodeProvider } from "@alephium/web3";
import { PrivateKeyWallet } from "@alephium/web3-wallet";
// import { AlephiumWalletProvider, useWalletConfig } from "@alephium/web3-react";

export default function App() {
  const [balance, setBalance] = useState<string | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
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

    const wallet = new PrivateKeyWallet({
      privateKey: "a642942e67258589cd2b1822c631506632db5a12aabcf413604e785300d762a5",
    });
    setWalletAddress(wallet.address);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>@alephium/web3 React Native + Expo</Text>
      <Text style={styles.subtitle}>Test address: 1DZiFFX6fnSHuLnnmtBMUWeELWvnhRudYfzb17HYuV9aW</Text>
      {balance && <Text style={styles.result}>✅ Balance: {balance}</Text>}
      {walletAddress && <Text style={styles.result}>✅ Wallet address: {walletAddress}</Text>}
      {error && <Text style={styles.resultError}>❌ Error: {error}</Text>}
      {!balance && !error && <Text style={styles.result}>Loading...</Text>}
      <StatusBar style="auto" />

      {/* <AlephiumWalletProvider theme="retro" network="devnet" addressGroup={0}>
        <TestProvider />
      </AlephiumWalletProvider> */}
    </View>
  );
}

// const TestProvider = () => {
//   const config = useWalletConfig();

//   return (
//     <View>
//       <Text>✅ Network: {config?.network}</Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
  },
  result: {
    fontSize: 16,
    marginTop: 10,
  },
  resultError: {
    fontSize: 16,
    color: "red",
    marginTop: 10,
  },
});
