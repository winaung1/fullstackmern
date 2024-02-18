import React from 'react'
import {useEffect, useState} from 'react'
import Axios from 'axios'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdOutlineDeleteForever } from "react-icons/md";
import { VscSaveAs } from "react-icons/vsc";
import { VscListFilter } from "react-icons/vsc";
export const Results = ({search}) => {
    const [keys, setKeys] = useState()
    const [employees, setEmployees] = useState()
    const [rate, setRate] = useState()
    const [position, setPosition] = useState()
    const [showEdit, setShowEdit] = useState(false)
    const [userFilteredChoice, setUserFilteredChoice] = useState(5)


    
  
    useEffect(() => {
        Axios.get('http://localhost:3001/')
        .then(res => setEmployees(res.data))
        
      }, [employees])
  
    const delet = (id) => {
        Axios.delete(`http://localhost:3001/deletEmployee/${id}`)
    }



  return (
    <>
        {
            employees?.filter(employee => employee.rate >= search || employee.pto == search || employee.name == search || employee.fullTime == search || employee.position == search || employee.rate == search).map(employee => {
                return <tr class="relative border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50  ">
                {employee.name}
                </th>
                <td class="px-6 py-4 ">
                {employee.position}
                </td>
                <td class="px-6 py-4 bg-gray-50">
                ${employee.rate}
                </td>
                <td class="px-6 py-4">
                {employee.fullTime}
                </td>
                <td class="px-6 py-4">
                {employee.pto}
                </td>
                <td onClick={() => setShowEdit(!showEdit)} class="px-6 py-4 cursor-pointer">
                  <HiOutlineDotsVertical className='text-xl hover:text-gray-700'/>
                </td>
                {showEdit ? 
                <div className='flex items-center space-x-2 absolute top-0 right-0 bg-white drop-shadow'>
                  <a href={`/updateEmployee/${employee._id}`} className='text-2xl hover:text-green-400'><VscSaveAs/></a>
                  <button onClick={() => delet(employee._id)} className='text-2xl hover:text-red-500'><MdOutlineDeleteForever/></button>
                </div>
                : ''
                }
            </tr>
})
}
    </>

  )
}
