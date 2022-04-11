import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const api = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com/users"
});

const UserList = ()=>{
    const [listOfUsers,setListOfUsers] = useState([]);

    useEffect(()=>{
        api
        .get('/')
        .then(res=>{
            setListOfUsers(res.data);
            console.log(listOfUsers)
        })
    },[]);
    
    return(
        <div>
            <Table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope='col'>UserName</th>
                        <th scope='col'>Address</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>Website</th>
                        <th scope='col'>Company</th>
                    </tr>
                </thead>
                <tbody>
                { listOfUsers.map(user=>(
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.address.street}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                        </tr>
                
                ))
                }
                </tbody>
            </Table>
        </div>
    );
}

export default UserList;