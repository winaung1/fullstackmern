import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdOutlineDeleteForever } from "react-icons/md";
import { VscSaveAs } from "react-icons/vsc";
import { VscListFilter } from "react-icons/vsc";
import { Results } from "./Results";
export const Home = () => {
  const [filterByRate, setFilterByRate] = useState();
  const [keys, setKeys] = useState();
  const [employees, setEmployees] = useState();
  const [rate, setRate] = useState();
  const [position, setPosition] = useState();
  const [showEdit, setShowEdit] = useState(false);
  const [userFilteredChoice, setUserFilteredChoice] = useState(5);

  const filtered = (item) => {
    setFilterByRate(item);
  };

  const delet = (id) => {
    Axios.delete(`http://localhost:3001/deletEmployee/${id}`);
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/").then((res) => setEmployees(res.data));
  }, [employees]);
  return (
    <div className="p-8">
      <div className="py-10">
        <h1 className="text-4xl font-bold">Employees List</h1>
        <div className="py-4 flex space-x-4 items-center">
          <VscListFilter title="filter" className="text-xl" />
          <div>
            <input
              onChange={(e) => filtered(e.target.value)}
              className="border px-4 py-1 rounded"
              type="text"
              placeholder="Filter by any category"
            />
          </div>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  Employee name
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  Position
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  Rate
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  Full Time
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  PTO
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              {filterByRate && <Results search={filterByRate} />}

              {!filterByRate &&
              <>
              {employees?.map((employee) => {
                return (
                  <tr class="relative border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50  "
                      >
                      {employee.name}
                    </th>
                    <td class="px-6 py-4 ">{employee.position}</td>
                    <td class="px-6 py-4 bg-gray-50">${employee.rate}</td>
                    <td class="px-6 py-4">{employee.fullTime}</td>
                    <td class="px-6 py-4">{employee.pto}</td>
                    <td
                      onClick={() => setShowEdit(!showEdit)}
                      class="px-6 py-4 cursor-pointer"
                      >
                      <HiOutlineDotsVertical className="text-xl hover:text-gray-700" />
                    </td>
                    {showEdit ? (
                      <div className="flex items-center space-x-2 absolute top-0 right-0 bg-white drop-shadow">
                        <a
                          href={`/updateEmployee/${employee._id}`}
                          className="text-2xl hover:text-green-400"
                          >
                          <VscSaveAs />
                        </a>
                        <button
                          onClick={() => delet(employee._id)}
                          className="text-2xl hover:text-red-500"
                          >
                          <MdOutlineDeleteForever />
                        </button>
                      </div>
                    ) : (
                      ""
                      )}
                  </tr>
                );
              })}
              
            </>
}
            </tbody>
          </table>
        </div>
      </div>
      <a
        href="/createEmployee"
        className="bg-black text-white py-3 px-8 rounded-xl"
      >
        Create New Employee
      </a>
    </div>
  );
};
