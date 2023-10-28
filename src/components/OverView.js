import React, { useState } from 'react'
import styled from 'styled-components';
import AddTransaction from './AddTransaction';

const IncomeExpenseContainer = styled.div`
  background-color: #fff;
  box-shadow: var(--box--shadow);
  padding:20px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  margin: 20px 0;
`;

const BalanceBox = styled.div`
font-size: 18px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
font-weight: bold;
margin-bottom:10px;
& span {
  color: #0d1d2c;
  opacity: 80%;
  font-weight: bold;
  font-size: 20px;
}
`;

const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
`;

const ExpenseBox = styled.div`
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 135px;
  & span {
    color: ${(props) => (props.isIncome ? "green" : "red")};
    font-weight: bold;
    font-size: 20px;
  }
`;

const AddTransactionButton = styled.div`
  font-size: 15px;
  background: #0d1d2c;
  display: flex;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  flex-direction: row;
  border-radius: 4px;
  font-weight: bold;

  &:hover{
    background:#fff;
    color: #0d1d2c;
    border: 2px solid #0d1d2c;
  }
`;


const OverView = (props) => {

    const [transactionToggle, setTransactionToggle] = useState(false);
    

  return (
    <IncomeExpenseContainer>
       <BalanceBox>
          Balance: Rs {props.income - props.expense}
          <AddTransactionButton onClick={()=>setTransactionToggle(!transactionToggle)}>{!transactionToggle?"Add Transaction":"Cancel Transaction"}</AddTransactionButton>
       </BalanceBox>
       {transactionToggle && (
        <AddTransaction addTransactions={(payload)=> props.addTransactions(payload)} />
      )}
      <ExpenseContainer>
        <ExpenseBox >
          Expense<span>${props.expense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome={true}>
          Income<span>${props.income}</span>
        </ExpenseBox>
      </ExpenseContainer>
    </IncomeExpenseContainer>
  )
}

export default OverView;
