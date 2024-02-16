import React, { useEffect, useState } from 'react';
import './App.css';
import useCrud from './hooks/useCrud';
import FormUser from './components/FormUser';
import CardUser from './components/CardUser';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [editUser, setEditUser] = useState();
  const url = "https://users-crud.academlo.tech/";
  const [users, getUsers, createUsers, deleteUsers, updateUsers] = useCrud(url);

  useEffect(() => {
    getUsers("/users/");
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  }

  return (
    <div>
      <div className='line__off'>
        <h1 className='title_app'>Usuarios</h1>
        <button className='btn__off' onClick={handleOpen}>+ Crear Nuevo Usuario</button>
      </div>
      <FormUser
        createUsers={createUsers}
        editUser={editUser}
        updateUsers={updateUsers}
        setEditUser={setEditUser}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <div className='users_card'>
        {
          users?.map(user => (
            <CardUser
              key={user.id}
              user={user}
              deleteUsers={deleteUsers}
              setEditUser={setEditUser}
              setIsOpen={setIsOpen}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;