import React,{ useState } from "react";

// Components
import User from "./User";
import Login from "./Login";
// SASS
import '../sass/Listuser.scss';

function Listuser (){
    const [users,setUsers] = useState([])

    // agrega los usuarios al array Users
    const addUser = (user) =>{
        
            
            const userUpdate = [user,...users];
            setUsers(userUpdate)
        
        console.log(user)
        console.log(users)
    }
    const deleteUser = user =>{
        const usersUpdate = users.filter(user => user.id !== user)
        setUsers(usersUpdate)
    }

    return(
        <div className="container-list-users">
            {/* Lista los usuarios ya creados */}
            <div className="list-users">
                {users.map(({user})=>(
                    <User 
                        key={user.id}
                        id={user.id}
                        email={user.email}
                        password={user.password}
                        deleteUser={deleteUser}
                    />
                ))}
                <User email='hola' />
                

            </div>

            <Login type='register' onSubmit={addUser}/>
        </div>
    );
};

export default Listuser;