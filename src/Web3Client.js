import Web3 from "web3";
import NFTContract from "./NftMarketplace.json";
let selectedAccount,
  nftContract,
  isInitialized = false,
  erc20Contract;

export const init = async () => {
  let provider = window.ethereum;
  if (typeof provider !== "undefined") {
    provider
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        selectedAccount = accounts[0];
        console.log(accounts);
      })
      .catch((error) => {
        console.log(error);
      });
    window.ethereum.on("accountsChanged", function (accounts) {
      selectedAccount = accounts[0];
      console.log(selectedAccount);
    });
  }
  const web3 = new Web3(provider);

  const networkId = await web3.eth.net.getId();
  console.log(networkId);

  // nftContract = new web3.eth.Contract(NFTContract.abi, NFTContract.address);

  console.log("ok");
  isInitialized = true;
};

export const getOwnBalance = async () => {
  let provider = window.ethereum;

  if (typeof provider !== "undefined") {
    provider
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        selectedAccount = accounts[0];
        console.log(accounts);
      })
      .catch((error) => {
        console.log(error);
      });
    window.ethereum.on("accountsChanged", function (accounts) {
      selectedAccount = accounts[0];
      console.log(selectedAccount);
    });
  }
  const web3 = new Web3(provider);

  const erc20Abi = [
    {
      constant: true,
      inputs: [
        {
          name: "_owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          name: "balance",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ];

  erc20Contract = new web3.eth.Contract(
    erc20Abi,
    "0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea"
  );

  return erc20Contract.methods.balanceOf(selectedAccount).call();
};

export const SayHI = () => {
  let provider = window.ethereum;
  const web3 = new Web3(provider);
  nftContract = new web3.eth.Contract(NFTContract.abi, NFTContract.address);
  // nftContract.methods.SayHI();
};
