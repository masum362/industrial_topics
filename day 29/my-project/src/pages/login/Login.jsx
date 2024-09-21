import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { authContext } from '../../context/AuthProvider';
import Navbar from '../../components/navbar/Navbar';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { loginUser } = useContext(authContext)

    const handleFormSubmit = async ({ email, password }) => {
        const response = await loginUser(email, password)
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
                    <input type="password" name="password" id="password"  {...register('password', {
                        required: {
                            value: true,
                            message: "Password must be required.",
                        }
                    })} />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login