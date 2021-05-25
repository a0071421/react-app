import { useState, useEffect, useRef } from 'react'
import { API_GET_DATA } from '../../global/constants'
import Edit from './components/Edit'
import List from './components/List'
import './index.css'

async function fetchData (setData) {
  const res = await fetch(API_GET_DATA)
  const { data } = await res.json()
  setData(data)
  console.log(data)
}
async function fetchSetData (data) {
  await fetch(API_GET_DATA, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ data })
  })
}

const Home = () => {
  const [data, setData] = useState([])
  const submittingStatus = useRef(false)
  console.log(submittingStatus)
  useEffect(() => {
    if (!submittingStatus.current) {
      return
    }
    fetchSetData(data).then((data) => (submittingStatus.current = false))
  }, [data])
  useEffect(() => {
    /* fetch(API_GET_DATA)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      }) */
    fetchData(setData)
  }, [])
  return (
    <div className="app">
      <Edit add={setData} submittingStatus={submittingStatus}></Edit>
      <List
        listData={data}
        deleteData={setData}
        submittingStatus={submittingStatus}
      ></List>
    </div>
  )
}

export default Home
