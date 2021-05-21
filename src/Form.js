import React, { useState, useEffect } from 'react'
import "./App.css";
import { Route, Link, Switch } from 'react-router-dom'
import Confirmation from "./Confirmation.js"



export default function Form(props) {
    const { disabled, change, submit, errors, values } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <div>
            <form onSubmit={onSubmit} id="pizza-form">
                <h1>Form Page!</h1>
                <label>Order Name:
            <input name="name" value={values.name} type="text" onChange={onChange} id="name-input"></input>
                </label> <br></br> <br></br>
                <label>Select Size:
                <select onChange={onChange} name="size" value={values.size} id="size-dropdown">
                        <option value=''>--Select an option--</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>

                <h4>Toppings</h4>
                <label>Pepperoni
                <input type="checkbox" name='pepperoni' checked={values.pepperoni} onChange={onChange} />
                </label>
                <label>Jalapenos
                <input type="checkbox" name='jalapenos' checked={values.jalapenos} onChange={onChange} />
                </label>
                <label>Onions
                <input type="checkbox" name='onions' checked={values.onions} onChange={onChange} />
                </label>
                <label>Sausage
                <input type="checkbox" name='sausage' checked={values.sausage} onChange={onChange} />
                </label><br></br> <br></br>
                <label>Special Instructions:
            <input name="specIns" value={values.specIns} type="text" onChange={onChange} id="special-text" placeholder="leaning tower of cheezzzah"></input>
                </label><br></br> <br></br>

                <div className='errors'>
                    {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>


                {/* <Link to="/pizza/confirmation"> */}
                <button id='order-button' disabled={disabled}>Submit</button>
                {/* </Link> */}

            </form>
        </div>
    )
}