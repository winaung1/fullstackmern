import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import Axios from 'axios'

export const UpdateEmployee = () => {
    const params = useParams()
    const [employees, setEmployees] = useState(null)
    const [name, setName] = useState(null)
    const [age, setAge] = useState(null)
    const [employeeId, setEmployeeId] = useState(null)
    const [position, setPosition] = useState(null)
    const [rate, setRate] = useState(null)
    const [fullTime, setFullTime] = useState(null)
    const [pto, setPto] = useState(null)

    const update = async () => {
 
        
        await Axios.put(`http://localhost:3001/updateEmployee/${params.id}`, {
          name: name,
          age: age,
          employeeId: employeeId,
          position: position,
          rate: rate,
          fullTime: fullTime,
          pto: pto,
        })
 

      
    }
    
    useEffect(() => {
      Axios.get('http://localhost:3001/')
      .then(res => setEmployees(res.data))

    }, [employees])


  return (
    <div className='p-8'>
     {employees?.map(employee => {
            if(employee._id === params.id){
                return  <form className='py-4'>
                <label htmlFor="name">Name</label><br />
                <input onChange={(e) => setName(e.target.value)} value={employee.name} className='border px-4 py-1 rounded' type="text" placeholder='Name' id='name'/><br />
                <label htmlFor="age">Age</label><br />
                <input onChange={(e) => setAge(e.target.value)} value={employee.age} className='border px-4 py-1 rounded' type="text" placeholder='Age' id='age'/><br />
                <label htmlFor="employeeId">Employee ID</label><br />
                <input onChange={(e) => setEmployeeId(e.target.value)} value={employee.employeeId} className='border px-4 py-1 rounded' type="text" placeholder='Employee ID' id='employeeId'/> <br />
                <label htmlFor="position">Position</label><br />
                <input onChange={(e) => setPosition(e.target.value)} value={employee.position} className='border px-4 py-1 rounded' type="text" placeholder='Position' id='position'/> <br />
                <label htmlFor="rate">Rate</label><br />
                <input onChange={(e) => setRate(e.target.value)} value={employee.rate} className='border px-4 py-1 rounded' type="text" placeholder='rate' id='rate'/> <br />
                <label htmlFor="fulltime">Full Time</label><br />
                <input onChange={(e) => setFullTime(e.target.value)} value={employee.fullTime} className='border px-4 py-1 rounded' type="text" placeholder='Full Time' id='fulltime'/> <br />
                <label htmlFor="pto">PTO</label><br />
                <input onChange={(e) => setPto(e.target.value)} value={employee.pto} className='border px-4 py-1 rounded' type="text" placeholder='PTO' id='pto'/> <br />
                <button onClick={update} className='bg-black text-white py-3 px-8 rounded-xl my-4'>Update Employee</button>
            </form>
            }
        })

        }
    </div>
  )
}
