import React, { useEffect, useState } from "react";
import { getContract } from "../utils/ethersUtils";

export default function TokenInfo({ signer }) {
    const [balance, setBalance] = useState("0");

    async function fetchData() {
        const contract = getContract(signer);
        const addr = await signer.getAddress();
        const bal = await contract.balanceOf(addr);
        setBalance(bal.toString());
    }

    useEffect(() => { if (signer) fetchData(); }, [signer]);

    return (
        <div>
            <h3>你的余额：{balance} MTK</h3>
        </div>
    );
}
