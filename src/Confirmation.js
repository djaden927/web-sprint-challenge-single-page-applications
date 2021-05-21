import React, { useState, useEffect } from 'react'
import "./App.css";
import { Route, Link, Switch } from 'react-router-dom'


export default function Confirmation(props) {
    const { order } = props;
    return (

        <div>

            <h1>Confirmation page</h1>
            <h2>Alright {order.name}, 1 {order.size} pizza with the following:</h2>
            <ul>
                {order.toppings.map((topping, idx) => <li key={idx}>{topping}</li>)}
            </ul>
            <h2>coming up! Oh an of course, {order.specIns}.</h2>
        </div>
    )
}