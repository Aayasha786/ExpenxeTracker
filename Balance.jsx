import React, { useContext } from 'react';
import { GlobalState } from '../context/GlobalState';

export default function Balance() {
    const { transactions } = useContext(GlobalState);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <h2>Your Balance</h2>
            <h1 id="balance">${total}</h1>
        </div>
    );
}
