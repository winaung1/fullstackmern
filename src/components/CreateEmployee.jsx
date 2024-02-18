import React, { useState } from 'react'
import Axios from 'axios'
export const CreateEmployee = () => {
    const [name, setName] = useState(null)
    const [age, setAge] = useState(null)
    const [employeeId, setEmployeeId] = useState(null)
    const [position, setPosition] = useState(null)
    const [rate, setRate] = useState(null)
    const [fullTime, setFullTime] = useState(null)
    const [pto, setPto] = useState(null)

    const create = async () => {
        await Axios.post('http://localhost:3001/createEmployee', {
            name: name,
            age: age,
            employeeId: employeeId,
            position: position,
            rate: rate,
            fullTime: fullTime,
            pto: pto,
        })
        
        }
  
  return (
    <div className='p-8'>
        <a href='/' className='bg-green-500 px-4 py-4 rounded-full text-white'>Back</a>
        <form className='py-4'>
            <label htmlFor="name">Name</label><br />
            <input onChange={(e) => setName(e.target.value)} value={name} className='border px-4 py-1 rounded' type="text" placeholder='Name' id='name' required/><br />
            <label htmlFor="age">Age</label><br />
            <input onChange={(e) => setAge(e.target.value)} value={age} className='border px-4 py-1 rounded' type="text" placeholder='Age' id='age' required/><br />
            <label htmlFor="employeeId">Employee ID</label><br />
            <input onChange={(e) => setEmployeeId(e.target.value)} value={employeeId} className='border px-4 py-1 rounded' type="text" placeholder='Employee ID' id='employeeId' required/> <br />
            <label htmlFor="position">Position</label><br />
            <input onChange={(e) => setPosition(e.target.value)} value={position} className='border px-4 py-1 rounded' type="text" placeholder='Position' id='position' required/> <br />
            <label htmlFor="rate">Rate</label><br />
            <input onChange={(e) => setRate(e.target.value)} value={rate} className='border px-4 py-1 rounded' type="text" placeholder='rate' id='rate' required/> <br />
            <label htmlFor="fulltime">Full Time</label><br />
            <input onChange={(e) => setFullTime(e.target.value)} value={fullTime} className='border px-4 py-1 rounded' type="text" placeholder='Full Time' id='fulltime' required/> <br />
            <label htmlFor="pto">PTO</label><br />
            <input onChange={(e) => setPto(e.target.value)} value={pto} className='border px-4 py-1 rounded' type="text" placeholder='PTO' id='pto' required/> <br />
            <button onClick={create} className='bg-black text-white py-3 px-8 rounded-xl my-4'>Create Employee</button>
        </form>
    </div>
  )
}
