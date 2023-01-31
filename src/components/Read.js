import React, { useState,useEffect } from 'react'
import { Button, Table } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Read = () => {
  const [apiData,setApiData] = useState([])
  //getting data from the api
  useEffect (()=>{
    axios.get(`https://63d8bf1b5a330a6ae16d0506.mockapi.io/Cruds`)
    .then((getData)=>{
      setApiData(getData.data)
    })
  })

  //update
  const setData=(id,firstName,lastName) => {
      localStorage.setItem("ID",id)
      localStorage.setItem("firstName",firstName)
      localStorage.setItem("lastName",lastName)
  }

  //delete
  const getData= ()=>{
    axios.get(`https://63d8bf1b5a330a6ae16d0506.mockapi.io/Cruds`)
    .then((getData)=>{
      setApiData(getData.data)
    })
  }

  const onDelete=(id)=>{
    axios.delete(`https://63d8bf1b5a330a6ae16d0506.mockapi.io/Cruds/${id}`)
    .then(()=>{
      getData()
    })
  }

  return (
    <div>
      <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    {apiData.map((data)=>{
      return(
        <Table.Body>
      <Table.Row>
        <Table.Cell>{data.id}</Table.Cell>
        <Table.Cell>{data.firstName}</Table.Cell>
        <Table.Cell>{data.lastName}</Table.Cell>
        
        <Table.Cell>
          <Link to="/update">
           <Button onClick={()=>setData(data.id,data.firstName,data.lastName)} style={{backgroundColor:"Green",color:"white"}}>Update</Button> 
          </Link>
        </Table.Cell>

        <Table.Cell>
           <Button onClick={()=>onDelete(data.id)} style={{backgroundColor:"Red",color:"white"}}>Delete</Button> 
        </Table.Cell>

      </Table.Row>
    </Table.Body>
      )
    })}
  </Table>
    </div>
  )
}

export default Read