import React, { useState, useEffect } from 'react'
import "./App.css";
import { Route, Link, Switch } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import styled from "styled-components";

const ImgContainer = styled.div
    `
    position: relative;
    width: 100%;

    button{
        position: absolute;
        top: 35%;
        left: 75%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        background-color: #555;
        color: white;
        font-size: 32px;
        padding: 36px 48px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }
    button:hover{
        background-color:black;
        border: 4px solid #555;
    }
`

const Img = styled.img
    `
    width: 100%;
    height: 125vh;
`




export default function Home(props) {

    const history = useHistory()

    const routeToShop = () => {
        console.log('Submitting something to go to next page')
        history.push('/pizza')
    }

    return (
        <ImgContainer>
            <Img
                onClick={routeToShop}
                src='https://images.unsplash.com/photo-1581873372796-635b67ca2008?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt=''
            />
            <button
                onClick={routeToShop}
                className='md-button shop-button'
            >
                Order Now!
            </button>
        </ImgContainer>
    )
}