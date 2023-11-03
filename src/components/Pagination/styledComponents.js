import styled from 'styled-components';

export const Pagin = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 1rem;
margin-bottom: 1rem;
`;

export const PaginationButton = styled.button`
width: 40px;
height: 40px;
font-family: inherit;
font-weight: 600;
font-size: 16px;
margin: 0 10px;
border-radius: 6px;
cursor: pointer;
transition: all 0.3s ease;
background-color: skyblue;
color: black;
border-color: #eee;
`;

export const Active = styled.button`
font-weight: 900;
border-color: #101010;
background: #ffe400;
color: red;
width: 40px;
height: 40px;
font-family: inherit;
font-size: 16px;
margin: 0 10px;
border-radius: 6px;
cursor: pointer;
transition: all 0.3s ease;
`;
