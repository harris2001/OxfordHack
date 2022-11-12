import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES } from "@web3auth/base";
const clientId = "BAy7xDYqPSNhHni7PSk9jvQnpt8Nkic7RJDLV6InzXYTqUH4pAuurPJ_UCcWHyCgy9DWu7Q8XCwh7wKyjvFPuE4";
const web3auth = new Web3Auth({
	clientId,
	chainConfig: { // this is ethereum chain config, change if other chain(Solana, Polygon)
		chainNamespace: CHAIN_NAMESPACES.EIP155,
		chainId: "0x1",
		rpcTarget: "https://mainnet.infura.io/v3/776218ac4734478c90191dde8cae483c",
	},
});
await web3auth.initModal();

// call below line when user clicks on login button
const provider = await web3auth.connect();

// if provider is not null then user logged in successfully