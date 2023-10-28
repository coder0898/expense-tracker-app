import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import OverView from './OverView';
import TransactionList from './TransactionList';

const Heading = styled.h1`
  letter-spacing: 1px;
  margin: 0;
`;

const Header = () => {

    const [transactions, setTransactions] = useState([]);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    const calculateBalance = () => {
        let exp = 0;
        let inc = 0;
        transactions.map((payload) =>
            payload.type === "EXPENSE"
                ? (exp = exp + payload.amount)
                : (inc = inc + payload.amount),
        );
        setExpense(exp);
        setIncome(inc);
    };

    useEffect(()=> calculateBalance(), [transactions])

    const addTransactions = (payload) =>{
        const transactionArray = [...transactions];
        transactionArray.push(payload);
        setTransactions(transactionArray);
    }

    return (
        <div>
            <Heading>Expense Tracker App</Heading>
            <OverView
                addTransactions={addTransactions}
                expense={expense}
                income={income} 
            />
            {
                transactions.length?( <TransactionList transactions={transactions} />):("")
            }
        </div>
    )
}

export default Header;
