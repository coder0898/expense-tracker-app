import React, { useState } from 'react';
import styled from 'styled-components';

const AddTransactionContainer = styled.div`
font-size: 15px;
display: flex;
color: #0d1d2c;
flex-direction: column;
border-radius: 4px;
border: 2px solid #e6e8e9;
width: 100%;
padding: 15px 20px;
gap: 10px;
& input {
  width: 90%;
  outline: none;
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid #e6e8e9;
}
`;

const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 10px 0;
  & input {
    width: unset;
    margin: 0 10px;
  }
`;

const FormControl = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  padding:10px;
`;

const Label = styled.label`
  display: inline-block;
  margin: 10px 0;
`;

const AddButton = styled.button`
  cursor: pointer;
  background-color: #0d1d2c;
  box-shadow: var(--box-shadow);
  color: #fff;
  border: 0;
  display: block;
  font-size: 16px;
  font-weight:800px;
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;

  &:hover{
    background:#fff;
    color: #0d1d2c;
    border: 2px solid #0d1d2c;
  }
`;

const AddTransaction = (props) => {

  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("EXPENSE");

  return (
    <AddTransactionContainer >
      <FormControl>
        <Label htmlFor="text">Text</Label>
        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter Text...." />
      </FormControl>
      <FormControl>
        <Label htmlFor="amount">Amount <br /> (negative - expense ,positive - income )</Label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Enter amount..." />
      </FormControl>
      <RadioBox>
        <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === "EXPENSE"}
          onChange={(e) => setType(e.target.value)}
        />
        <Label htmlFor="expense">Expense</Label>
        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => setType(e.target.value)}
        />
        <Label htmlFor="Expense">Income</Label>
      </RadioBox>
      <AddButton 
      onClick={() =>
          props.addTransactions({
            id: Date.now(),
            amount: Number(amount),
            desc,
            type,
          })
         
        } >Add transaction Details</AddButton>
    </AddTransactionContainer>
  )
}

export default AddTransaction;
