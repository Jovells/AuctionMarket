import { ContractProvider } from "@/hooks/contracts";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { auctionMarketWagmiConfig, auctionMarketChains } from "../auctionMarket.config";
import { publicProvider } from "wagmi/providers/public";
import '@rainbow-me/rainbowkit/styles.css';
import { Header } from "@/components/Header";
import { Container } from "@mui/material";
import { Toaster } from "react-hot-toast";


const { chains, publicClient } = configureChains([mainnet], [publicProvider()]);

const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={auctionMarketWagmiConfig}>
      <Toaster/>
      <RainbowKitProvider initialChain={auctionMarketChains[1]} chains={auctionMarketChains}>
        <ContractProvider>
          <Header/>
          <Container maxWidth={"lg"}>
          <Component {...pageProps} />
          </Container>
        </ContractProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
