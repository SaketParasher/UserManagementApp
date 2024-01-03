import  { useState } from 'react';
import UserData from '../../assets/Users.json';

import UsersList from '../UsersList';
import UserForm from '../UserForm';

const UserManagement = () => {
    const [allUsers, setAllUsers] = useState(UserData);
    const [editUserId,setEditUserId] = useState(null);
    let userToEdit = null;

    if(editUserId){
        userToEdit = allUsers.find(usr => usr.id === editUserId);
    }

    const addNewUser = (user) => {
        if(userToEdit){
            setAllUsers(prevUsers => prevUsers.map(usr => {
                if(usr.id === editUserId){
                    return user
                }else{
                    return usr;
                }
            }));
            setEditUserId(null);
            return;
        }
        const newUser = {
            ...user,
            id:allUsers[allUsers.length-1].id + 1
        }
        setAllUsers(prev => {
            return [...prev, newUser]
        })
    }

    const handleUserOperations = (userId, operation) => {
        if(operation === 'delete'){
            setAllUsers(prev => prev.filter(usr => usr.id !== userId))
        }else{
            setEditUserId(userId);
        }
    }


    return (
        <>
            <UserForm handleUserSubmit={addNewUser} editUser={userToEdit} key={userToEdit ? 'Edit' :'Save'}/>
            <hr/>
            <UsersList allUsers={allUsers} handleOperation={handleUserOperations}/>
        </>
    )

}

export default UserManagement;