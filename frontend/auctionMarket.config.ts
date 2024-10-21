import {getDefaultWallets} from "@rainbow-me/rainbowkit";
  import { configureChains, createConfig } from 'wagmi';
  import {
  hardhat, baseSepolia, 
  } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';



 const productionChain = baseSepolia 

 const envChains = process.env.NODE_ENV === "production" ? [productionChain] : [hardhat, productionChain]

 const { chains, publicClient } = configureChains(
  envChains,
    [
      publicProvider()
    ]
  );
  
 const { connectors } = getDefaultWallets({
    appName: 'AuctionMarket',
    projectId: '4bb311e76fca80e38887406bc212442d',
    chains
  });
  
 const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  })

  export const auctionMarketChains = chains
  export const auctionMarketWagmiConfig = wagmiConfig

export const AuctionAddress = "0x7f9523a452E5DE4149ED667C7D9d1C86a97e43cD";
export const AuctionMarketNFTAddress = "0x83bd7e53dE6ba627f3f01fA6A8C5d665E0A860DC";
export const MockStableCoinAddress = "0xDe83458eF3dCfeD8C5e02abc75d7927d9aA5213a";

  export const chain = process.env.NODE_ENV === "production" ? productionChain : baseSepolia