import { ethers, providers } from 'ethers'
import { EthereumProvider } from '@walletconnect/ethereum-provider'

export async function connectWallet() {
    let listener = await EthereumProvider.init({
        projectId: '770f44e9ef2dedd57daa8ebf21e00fe0', // required
        chains: [10], // required
        showQrModal: true // requires @walletconnect/modal
    })
    await listener.connect();

    listener.on("accountsChanged", (accounts) => {
        console.log(accounts);
    });

    listener.on("chainChanged", (chainId) => {
        console.log(chainId);
    });

    listener.on("connect", (error, payload) => {
        console.log("connected!")
        if (error) {
            throw error;
        }
    });

    listener.on("disconnect", (code, reason) => {
        console.log(code, reason);
        signer.set(null);
    });
}