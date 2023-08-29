import { styled } from "styled-components";
import { ReactComponent as SearchIcon } from '../../images/search .svg';

const StyledForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
background-color:  #406CFF;
border: 1px solid #949494;
`

const StyledInput = styled.input`
border: none;
background-color: #fff;
height: 50px;
width: 400px;
padding: 0;
margin: 0;
padding-left: 4px;
outline: 0;

:focus-visible {
    outline: 0;
}
`

const StyledButton = styled.button`
border: none;
background-color: #fff;
height: 50px;
width: 50px;
padding: 0;
margin: 0;
cursor: pointer;
`

const StyledSvg = styled(SearchIcon)`
padding: 0;
margin: 0;
width: 25px;
height: 25px;
:hover{
    color: #406CFF;
}

`

export {StyledForm, StyledInput, StyledButton, StyledSvg}