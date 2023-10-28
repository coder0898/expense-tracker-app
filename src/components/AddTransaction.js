import React from 'react';
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
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;

  &:hover{
    background:#fff;
    color: #0d1d2c;
    border: 2px solid #0d1d2c;
  }
`;

const AddTransaction = () => {
    return (
        <AddTransactionContainer >
                <FormControl>
                    <Label htmlFor="text">Text</Label>
                    <input type="text" id="text" placeholder="Enter Text...." />
                </FormControl>
                <FormControl>
                    <Label htmlFor="amount">Amount <br /> (negative - expense ,positive - income )</Label>
                    <input type="number" id="amount" placeholder="Enter amount..." />
                </FormControl>
                <RadioBox>
                    <input
                        type="radio"
                    />
                    <Label htmlFor="expense">Expense</Label>
                    <input
                        type="radio"
                    />
                    <Label htmlFor="Expense">Income</Label>
                </RadioBox>
                <AddButton >Add transaction</AddButton>
        </AddTransactionContainer>
    )
}

export default AddTransaction;
