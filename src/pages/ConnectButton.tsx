import { Button } from "@mui/material";
import React, { useState } from "react";
import Web3 from "web3";

const ConnectButton: React.FC = () => {
	const [account, setAccount] = useState<string | null>(null);

	const connectWallet = async () => {
		if (window.ethereum) {
			const web3 = new Web3(window.ethereum);

			try {
				await window.ethereum.request({ method: "eth_requestAccounts" });

				const accounts = await web3.eth.getAccounts();
				if (accounts.length > 0) {
					setAccount(accounts[0]);

					const polygonNetwork = {
						chainId: "0x89", // Hex for 137 (Polygon Mainnet)
						chainName: "Polygon Mainnet",
						nativeCurrency: {
							name: "MATIC",
							symbol: "MATIC",
							decimals: 18,
						},
						rpcUrls: ["https://polygon-rpc.com"],
						blockExplorerUrls: ["https://polygonscan.com"],
					};

					await window.ethereum.request({
						method: "wallet_addEthereumChain",
						params: [polygonNetwork],
					});
				}
			} catch (error) {
				console.error("Error while connecting to Polygon network:", error);
			}
		} else {
			alert("Please install MetaMask!");
		}
	};

	return (
		<div>
			{account ? (
				<div>Connected Account: {account}</div>
			) : (
				<Button onClick={connectWallet}>Connect Polygon Network</Button>
			)}
		</div>
	);
};

export default ConnectButton;
