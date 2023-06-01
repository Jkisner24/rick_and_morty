import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css"

const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }
    
    return(
        <form className={style.formContainer} onSubmit={handleSubmit}>
            <h5>Formulario Login</h5>
            <label htmlFor="username" style={{ color:'white' }} >Username:</label>
            <input className={style.controls} type="text" name="username" value={userData.username} onChange={handleInputChange} />
            {errors.username && <p style={{color: 'red'}} >{errors.username}</p>}

            <label htmlFor="password" style={{ color:'white' }}>Password:</label>
            <input className={style.controls} type="password" name="password" value={userData.password} onChange={handleInputChange} />
            <p><a href="#">¿Olvidastes tu Contraseña?</a></p>
            {errors.password && <p style={{color: 'red'}} >{errors.password}</p>}

            <button className={style.buttons}>LOGIN</button>
        </form>
    )
}

export default Form;