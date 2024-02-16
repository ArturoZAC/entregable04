import React, { useState } from 'react'
import "./styles/cardUser.css";


const CardUser = ({user, deleteUsers, setEditUser,setIsOpen}) => {
    // console.log(user)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleDelete = () =>{
        deleteUsers("/users", user.id)
        setIsDeleteModalOpen(false)
    }

    const btn__del = () => {
        setIsDeleteModalOpen(true);
    }    

    const handleEdit = () =>{
        setEditUser(user)
        setIsOpen(true);
    }

  return (
        <article className='container'>
            <h3 className='container__title'>{user.first_name} {user.last_name}</h3>
            <div className='line'></div>
            <ul className='list'>
                <li className='list-li'>
                    <span className='list-span-1 tan'>CORREO</span>
                    <span className='list-span tan'>{user.email}</span>
                </li>
                <li className='list-li'>
                    <span className='list-span-1 tan'>CUMPLEAÑOS</span>
                    <span className='list-span tan'>
                    <box-icon id="gift" name='gift'></box-icon>
                        {user.birthday}
                        </span>
                </li>
            </ul>
            <div className='line'></div>
            <div className='botones'>
            <button style={{backgroundColor: '#D85D5D' , border: "1px solid #D74747", borderRadius:"2px"}} onClick={btn__del}>
            <box-icon name='trash' color="white"></box-icon>
            </button>
            <button style={{backgroundColor: '#F6F6F6' , border: "1px solid #C3C3C3", borderRadius:"2px"}} onClick={handleEdit}>
                <box-icon name='edit-alt' color="#D3D3D3" ></box-icon>
            </button>
            </div>
            {isDeleteModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2 className='title_del'>Eliminar Usuario</h2>
                        <p>Se eliminara {user?.first_name} {user?.last_name}</p>
                        <button className='btn_aceptar' onClick={handleDelete}>Aceptar</button>
                    </div>
                </div>
            )}
        </article>
    )
}

export default CardUser