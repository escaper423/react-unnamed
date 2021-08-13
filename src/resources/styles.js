import styled from "styled-components";
import { Link } from "react-router-dom";
import { UseDarkTheme } from "./ContextProvider";

export const inputWrapperStyle = {
    display: 'flex',
    width: '80%',
    margin: 'auto',
    padding: '2px 0',
    justifyContent: 'space-between'
}

export const confirmWrapperStyle = {
    display: 'flex',
    width: '80%',
    margin: '20px auto',
    padding: '2px 0',
    justifyContent: 'space-around',
}

const FlexScreenWrapperStyle = styled.section`
    width: 100%;
    height: calc(100vh - 60px);
    text-align: center;
    display: flex;
    background-color: ${props => props.darkTheme ? '#333' : '#fff'};
`

const BlockScreenWrapperStyle = styled.section`
    width: 65%;
    display: block;
    margin: auto;
    @media only screen and (max-width: 768px){
        width: 99%;
    }
`


const InputBoxStyle = styled.input`
        width: ${props => props.width ? props.width : '70%'};
        height: 25px;
        fontSize: 15px;
        border: 0;
        border-bottom: 1px solid ${props => props.darkTheme ? 'white' : 'black'};
        background-color:transparent;
        color: ${props => props.darkTheme ? 'white' : 'black'};
        
        &:focus{
            outline:none;
        }
        &:autofill:hover,
        &:autofill:fill,
        &:autofill:active,
        {
            background-color: ${props => props.darkTheme ? '#444' : '#ddd'};
            color: ${props => props.darkTheme ? '#ddd' : '#333'};
        }
    `

const TextAreaStyle = styled.textarea`
    width: ${props => props.width? props.width:'95%'};
    height: ${props => props.height?props.height:'90%'};
    font-size: 15px;
    border-radius: 4px;
    box-shadow: ${props => props.darkTheme? '0 0 4px white':'0 0 7px black'};
    background-color: transparent;
    outline: none;
    resize: none;
    color: ${props => props.darkTheme ? 'white' : 'black'};
`

const ConfirmButtonStyle = styled.input.attrs({ type: 'submit' })`
        border: 0;
        padding: 10px 16px;
        border-radius: 4px;
        background-color: #888;
        transition : .1s;
        font-size: 1rem;
        color: #fff;
        &:hover{
            transform:scale(1.1,1.1);
            background-color:#02e637;
        }
        &:active{
            background-color:#943b0f;
        }
    `

const ForgetPasswordTextStyle = styled(Link)`
        text-decoration: none;
        color: ${props => props.darkTheme ? 'white' : 'black'};    
        transition: .1s;
        &:hover{
            font-size: 1.1rem;
            transform: scale(1.1,1.1);
        }
    `

const CommendsStyle = styled.div`
    background-color: #777;
    text-align: center;
    display: table-cell;
    width: 26px;
    padding: 2px;
    margin-right: 15px;
    vertical-align: middle;
`

const BoardInfoStyle = styled.div`
    background-color: #777;
    cursor: pointer;
    display: table-cell;
    padding: 2px;
`

const ThumbnailStyle = styled.div`
    background-color: #555;
    display: table-cell;
    width: 115px;
    vertical-align: middle;
    padding: 2px;
    margin-left: 18px;
`

export const StyledButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: ${props => props.width?props.width:'60px'};
height: ${props => props.height?props.height:'50px'};
border-radius: 4px;
background: #256ce1;
padding: 10px 12px;
color: #fff;
border: none;
outline: none;
cursor: pointer;
transition: all .2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all .2s ease-in-out;
    background: #fff;
    color: #010606;
}
`

export const BoardItemWrapper = styled.article`
    width: 95%;
    min-width: 350px;
    height: 81px;
    background-color: #777;
    display: table;
    z-index: 1;
    padding: 8px;
    margin: 8px auto;
`

export const VoteStyle = styled.a`
        color: #ccc;
        display: inline-block;
        &:hover{
            color: yellow;
        }
        &:active{
            color: #3e3;
        }
`

export const SelectStyle = styled.select`
    font-size: 14px;
    padding: 6px;
    width: ${props => props.width};
    border-radius: 4px;
`

//wrapper styles
export const Commends = ({ children }) => {
    return (
        <CommendsStyle>
            {children}
        </CommendsStyle>
    )
}

export const BoardInfo = ({ children }) => {
    return (
        <BoardInfoStyle>
            {children}
        </BoardInfoStyle>
    )
}

export const Thumbnail = ({ children }) => {
    return (
        <ThumbnailStyle>
            {children}
        </ThumbnailStyle>
    )
}

export const FlexScreenWrapper = ({ children }) => {
    const darkTheme = UseDarkTheme();
    return (
        <FlexScreenWrapperStyle darkTheme={darkTheme}>
            {children}
        </FlexScreenWrapperStyle>
    )
}

export const BlockScreenWrapper = ({ children }) => {
    const darkTheme = UseDarkTheme();
    return (
        <BlockScreenWrapperStyle darkTheme={darkTheme}>
            {children}
        </BlockScreenWrapperStyle>
    )
}

//input styles
export const InputBox = ({ darkTheme, type, onChange, val, id, width }) => {
    return (
        <InputBoxStyle darkTheme={darkTheme} type={type} onChange={onChange} value={val} id={id} width={width} />
    )
}
export const ConfirmButton = ({ val }) => {
    return (
        <ConfirmButtonStyle value={val} />
    )
}

export const TextArea = ({ darkTheme, width, height }) => {
    return (
        <TextAreaStyle width={width} height={height} darkTheme={darkTheme}></TextAreaStyle>
    )
}

export const ForgetPasswordText = ({ darkTheme, val }) => {
    return (
        <ForgetPasswordTextStyle to="/forgetpw" darkTheme={darkTheme}>{val}</ForgetPasswordTextStyle>
    )
}
