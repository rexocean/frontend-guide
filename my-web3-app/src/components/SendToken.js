import React, { useState } from "react";
import { getContract } from "../utils/ethersUtils";
import { ethers } from "ethers";

export default function SendToken({ signer }) {
    const [to, setTo] = useState("");
    const [amount, setAmount] = useState("");

    async function send() {
        const contract = getContract(signer);
        const tx = await contract.transfer(to, ethers.parseUnits(amount, 18));
        await tx.wait();
        alert("转账成功！");
    }

    return (
        <div>
            <h4>转账 MTK</h4>
            <input placeholder="接收地址" value={to} onChange={(e) => setTo(e.target.value)} />
            <input placeholder="数量" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={send}>发送</button>
        </div>
    );
}
