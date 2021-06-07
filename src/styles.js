import styled from "styled-components";

export const BodyDiv = styled.div`
  box-sizing: border-box;
  overflow-x: hidden;
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFF6FF;
  font-family: 'Montserrat', sans-serif;
`;

export const BoxDiv = styled.div`
  text-align: center;
  padding: 30px 40px;
  background-color: #A187B0;
  color: #fff;
  width: 70%;
  border-radius: 2rem;
  -webkit-box-shadow: 0px 1px 11px 5px rgba(86,86,86,0.3); 
  box-shadow: 0px 1px 11px 5px rgba(86,86,86,0.3);
`;

export const Btn = styled.button`
 display: inline-block;
 padding: 0.8rem;
 margin: 0.5rem;
 width: 9rem;
 border-radius: 2em;
 border: 2px solid #FEF7FF;
 box-sizing: border-box;
 text-decoration: none;
 background-color: #4D4352;
 font-weight:300;
 color:#fff;
 font-size: 16px;
 text-align: center;
 transition: all 0.2s;
 
 &:hover {
   border-color: #FEFEDF;
   cursor: pointer;
 }
`;