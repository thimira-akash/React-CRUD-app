import axios from 'axios'
import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'

const Create = () => {
    const navigate = useNavigate()
    const [firstName,setFirstName]= useState("")
    const [lastName,setLastName]= useState("")

    const sendDataToApi=()=>{
        axios.post(`https://63d8bf1b5a330a6ae16d0506.mockapi.io/Cruds`,{firstName,lastName})
        .then(()=>{
            navigate('/read')
        })
    }

  return (
    <div>
        <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' name='fname' onChange={(e)=>{setFirstName(e.target.value)}} />
    </Form.Field>

    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' name='lname' onChange={(e)=>{setLastName(e.target.value)}} />
    </Form.Field>
    <Form.Field>

      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit' onClick={sendDataToApi}>Submit</Button>
  </Form>
    </div>
  )
}

export default Create