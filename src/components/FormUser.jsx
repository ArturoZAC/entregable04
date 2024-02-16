import React, { useEffect} from 'react'
import { useForm } from 'react-hook-form'
import "./styles/formUser.css";

const FormUser = ({createUsers,editUser,updateUsers, setEditUser, isOpen, setIsOpen}) => {

    const {handleSubmit, register, reset} = useForm();

    console.log(editUser)

    useEffect(() => {
        if (!editUser) {
            reset({
                email: "",
                password: "",
                first_name: "",
                last_name: "",
                birthday: "",
            });
        } else {
            reset(editUser);
        }
    }, [editUser, reset]);

    const submit = (data) =>{
        //
        if(editUser){
            updateUsers("/users", editUser.id, data)
            setEditUser();
        }else{
            createUsers("/users", data)
        }
        reset({
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: "",
        })
        setIsOpen(false)
    }


    const handleClose = () =>{
        setIsOpen(false)
        setEditUser()
    }

  return (
    <div className={`form__background ${isOpen&&'able'}`}>
        <form className='form__container' onSubmit={handleSubmit(submit)}>
            <div className='form__close' onClick={handleClose}>
                <ion-icon name="close-circle-outline"></ion-icon>
            </div>
            <h2 className='form__title'>Nuevo Usuario</h2>

            <div className='form__item'>
                <label htmlFor="first_name">First Name</label>
                <input className='inputall' {...register("first_name")} id="first_name" type="text" />
            </div>
            <div className='form__item'>
                <label htmlFor="last_name">Last Name</label>
                <input className='inputall' {...register("last_name")} id="last_name" type="text" />
            </div>

            <div className='form__item'>
                <label htmlFor="email">Email</label>
                <input className='inputall' {...register("email")} id="email" type="email" />
            </div>
            <div className='form__item'>
                <label htmlFor="password">Password</label>
                <input className='inputall' {...register("password")} id="password" type="password" />
            </div>
            <div className='form__item'>
                <label htmlFor="birthday">BirthDay</label>
                <input className='inputall at' {...register("birthday")} id="birthday" type="date" />
            </div>
            <button className='form__btn'>Agregar Nuevo Usuario</button>
        </form>
    </div>
  )
}

export default FormUser