import React, { useState, useRef, useEffect } from 'react';
import { UseAuthUser, UseDarkTheme } from '../resources/ContextProvider';
import styled from 'styled-components';
import { buttonActiveDark, buttonActiveLight, buttonDark, buttonLight } from '../resources/colors';
import { BsSearch } from 'react-icons/bs'
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { dbURL } from '../resources/config';


const SearchButtonArea = styled.div`
    display: inline;
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 0;
    background-color: ${props => props.darkTheme ? buttonDark : buttonLight};
    margin: auto 14px;
    justify-content: center;
    
    &:hover{
        background-color: ${props => props.darkTheme ? buttonActiveDark : buttonActiveLight};
        transform: scale(1.2,1.2);
    }

    @media screen and (max-width: 660px){
        margin: 20px auto;
        display: block;
        left: 50%;
        transform: translateX(-50%);
        &:hover{
            transform: scale(1.2,1.2) translateX(-40%);
        }
    }
    transition: .1s;
`

const SearchButton = styled(BsSearch)`
    margin: auto;
    margin-top: 25%;
`

const SearchBody = styled.div`
    display: inline;
    @media screen and (max-width: 660px){
        display: block;
    }
`

const Home = () => {
    const darkTheme = UseDarkTheme();
    const [foodData, setFoodData] = useState([]);
    const user = UseAuthUser();
    const navigate = useNavigate();

    const twoTimesAgo = useRef(null);
    const oneTimeAgo = useRef(null);

    useEffect(() => {
        axios({
            url: `${dbURL}/foods`,
            method: 'GET',
        }).then(res =>{
            setFoodData(res.data)
        })

    }, [])

    const FindRecommendation = () => {
        const before = twoTimesAgo.current.value
        const now = oneTimeAgo.current.value

        if (foodData.find(o => o.name === before) && foodData.find(o => o.name === now)){
            axios({
                method: 'POST',
                url: `${dbURL}/record`,
                params:{
                    before: before,
                    now: now
                }
            }).then(res => {
                console.log(res.status)
            })
            
            navigate(`/search`, {
                state:{
                    twoTimesAgo: twoTimesAgo.current.value,
                    oneTimeAgo: oneTimeAgo.current.value,
                },
            })
        }
        else{
            console.log("안댐")
        }
    }
    
    localStorage.setItem("navIndex", -1);
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                height: '70vh',
                backgroundColor: darkTheme ? '#333333' : '#eeeeee'
            }}>
                <h1>오늘머먹지</h1>
                <p>한끼 전, 두끼 전에 무엇을 드셨는지 적어주세요.</p>
                <SearchBody>
                    <SearchBar darkTheme={darkTheme} placeholder="두끼 전" forwardedRef={twoTimesAgo} data={foodData}/>
                    <SearchBar darkTheme={darkTheme} placeholder="한끼 전" forwardedRef={oneTimeAgo} data={foodData}/>
                    <SearchButtonArea onClick={FindRecommendation} darkTheme={darkTheme} >
                        <SearchButton size="1.2em" />
                    </SearchButtonArea>
                </SearchBody>

            </div>
        </>
    );
}

export default Home;