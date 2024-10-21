import Moralis from "moralis";
function imageToBase64(imageFile) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

async function uploadToIpfs(image, data) {
  console.log(image, data)
    try {
      await Moralis.start({
          apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
      });
    } catch (error) {
      console.log(error)
    }
    const uploadArray = [
      {
      path: image.name.replace(/\s+/g, '-'),
      content: await imageToBase64(image),
      },
      {
      path: image.name.replace(/\s+/g, '-').replace(/\.[^/.]+$/, "") + ".json",
      content: data,
      },
    ];
    const response = await Moralis.EvmApi.ipfs.uploadFolder({
        abi: uploadArray,
    });
    console.log(response.result)
    return response.result;
}
export default uploadToIpfs;

