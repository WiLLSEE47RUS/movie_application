import styled from "styled-components";

export const Wrapper = styled.div`
	color:var(--white);
  	background: var(--darkGrey);
  	border-radius: 20px;
  	padding: 5px;
  	text-align: center;
  	:hover{
	  	background: var(--medGrey);
	  	transform: scale(1.1);
    }
  	h3{
	  	margin: 10px 0 0 0;
    }
  	p{
	  	margin: 5px 0 0 0;
    }
  	transition: all 0.5s;
`;

export const Image = styled.img`
	display: block;
  	width: 100%;
  	height: 200px;
  	object-fit: cover;
  	border-radius: 15px;
`;