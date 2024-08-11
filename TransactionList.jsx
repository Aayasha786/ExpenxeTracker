import React, { useContext } from 'react';
import { GlobalState } from '../context/GlobalState';
import Transcation from './Transcation';

export default function TransactionList() {
    const { transactions } = useContext(GlobalState);

    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (<Transcation key={transaction.id} transaction={transaction}/>))}
            </ul>
        </div>
    );
}
