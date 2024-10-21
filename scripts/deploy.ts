import { ethers } from "hardhat";

async function main() {

  const MockStableCoin = await ethers.deployContract("MockStableCoin");
  MockStableCoin.waitForDeployment();
  console.log(
    `MockStableCoin deployed to ${MockStableCoin.target}`
  );
  const Auction = await ethers.deployContract("Auction", [MockStableCoin.target]);

  await Auction.waitForDeployment();


  console.log(
    `Auction deployed to ${Auction.target}`
  );
  const AuctionMarketNFT = await ethers.deployContract("AuctionMarketNFT", [Auction.target]);
  await AuctionMarketNFT.waitForDeployment();
  console.log(
    `AuctionMarketNFT deployed to ${AuctionMarketNFT.target}`
  );
  Auction.setDnftAddress(AuctionMarketNFT.target)
}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
