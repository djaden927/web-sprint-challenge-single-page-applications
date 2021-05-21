import React, { useState, useEffect } from 'react'
import "./App.css";
import { Route, Link, Switch } from 'react-router-dom'
import Form from "./Form.js"
import Home from "./HomePage.js"
import Confirmation from "./Confirmation.js"
import * as yup from "yup";
import schema from './formSchema.js'
import axios from "axios";
import { useHistory } from 'react-router-dom'

const blankOrder = []
const initialDisabled = true;
const initialFormErrors = {
  name: '',
  size: '',
  specIns: ''
}
const initialFormValues = {
  name: '',
  size: '',
  specIns: '',
  pepperoni: false,
  jalapenos: false,
  onions: false,
  sausage: false,
}

const App = () => {
  const [order, setOrder] = useState(blankOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const history = useHistory()

  const confirmationPage = () => {
    console.log('Submitting something to go to next page')
    history.push('/pizza/confirmation')
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrder(res.data)
      })
      .catch(err => {

        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
        confirmationPage()
      })
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      specIns: formValues.specIns,
      toppings: ['pepperoni', 'jalapenos', 'onions', 'sausage'].filter(topping => formValues[topping])
    }

    postNewOrder(newOrder)
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div>
      <h1>Lambda Eats</h1>
      <div className='nav-links'>
        {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}
        <Link to='/'>Home</Link>
        <Link to='/pizza' id="order-pizza" >order</Link>
      </div>

      <Switch>
        <Route path="/pizza/confirmation">
          <Confirmation order={order} />
        </Route>
        <Route path='/pizza'>
          <Form values={formValues} disabled={disabled} change={inputChange} submit={formSubmit} errors={formErrors} />
        </Route>
        {/* <Route path='/pizza' render={props => {
          return <Form  />
        }} /> */}
        <Route path='/' component={Home} />



      </Switch>
    </div>
  );
};
export default App;
