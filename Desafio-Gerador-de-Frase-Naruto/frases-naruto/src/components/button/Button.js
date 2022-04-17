import styled from 'styled-components';

export const Button = styled.button`
  background: #DC882D;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.5em;
  padding: 10px 20px;
  font-family: 'New Tegomin', serif;
  cursor: pointer;
  box-shadow: black 2px 2px 5px;

  &:hover {
    background-color: #e15725df;
  }

  &:focus {
    outline: none;
  }
`;
