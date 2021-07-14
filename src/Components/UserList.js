import React from 'react'
import { useSelector } from 'react-redux'


function UserList() {
    const userdata = useSelector(state => state.userdata)
    return (
        <div>
            <table className='table'>
                <thead className='thead-dark'>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Company</th>
                        <th>Telephone</th>
                    </tr>
                </thead>
                <tbody>
                 {userdata.map((data, index)=>{
                     return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{data.firstname}</td>
                        <td>{data.lastname}</td>
                        <td>{data.address}</td>
                        <td>{data.company}</td>
                        <td>{data.telephone}</td>
                    </tr>
                    )
                 })}
                
                </tbody>
            </table>

        </div>

    )
}

export default UserList
