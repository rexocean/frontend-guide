import React, { useState } from "react";
import { getProviderAndSigner } from "../utils/ethersUtils";

export default function ConnectWallet({ onConnected }) {
    const [address, setAddress] = useState(null);

    async function connect() {
        const { signer } = await getProviderAndSigner();
        const addr = await signer.getAddress();
        setAddress(addr);
        onConnected(signer);
    }

    return (
        <div>
            {address ? (
                <p>钱包已连接：{address}</p>
            ) : (
                <button onClick={connect}>连接钱包</button>
            )}
        </div>
    );
}
