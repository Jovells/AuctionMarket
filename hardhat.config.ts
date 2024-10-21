import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv'
import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
dotenv.config();


const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks :{
    polygonMumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    baseSepolia : {
      url: `https://base-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY as string],
    }
  },
};

export default config;
