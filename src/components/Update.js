import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Button,Form } from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'

const Update = () => {
  const navigate = useNavigate()
  const [firstName,setFirstName]= useState("")
  const [lastName,setLastName]= useState("")
  const [ID,setID] = useState(null)

  const sendDataToApi=()=>{
      axios.put(`https://63d8bf1b5a330a6ae16d0506.mockapi.io/Cruds/${ID}`,{firstName,lastName})
      .then(()=>{
          navigate('/read')
      })
  }
  //display data to be updated
  useEffect(() => {
    setFirstName(localStorage.getItem('firstName'))
    setLastName(localStorage.getItem('lastName'))
    setID(localStorage.getItem('ID'))
  }, [])

return (
  <div>
      <Form>
  <Form.Field>
    <label>First Name</label>
    <input placeholder='First Name' name='fname' onChange={(e)=>{setFirstName(e.target.value)}} value={firstName} />
  </Form.Field>

  <Form.Field>
    <label>Last Name</label>
    <input placeholder='Last Name' name='lname' onChange={(e)=>{setLastName(e.target.value)}} value={lastName}/>
  </Form.Field>

  <Button type='submit' onClick={sendDataToApi}>Update</Button>
</Form>
  </div>
)
}


export default Update