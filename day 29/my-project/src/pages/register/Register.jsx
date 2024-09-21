import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { authContext } from '../../context/AuthProvider';



const Register = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { registerUser } = useContext(authContext)

    const handleFormSubmit =async({email,password}) =>{
       const response = await registerUser(email,password)
       console.log(response)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" {...register('email', {
                        required: {
                            value: true,
                            message: "Email must be required.",
                        }
                    })} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" {...register('password', {
                        required: {
                            value: true,
                            message: "Password must be required.",
                        }
                    })} />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register