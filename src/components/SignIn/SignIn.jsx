import React, { useContext } from 'react';
import google from '../../assets/google-logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SignIn = () => {
    const { login,googleLogin } = useContext(AuthContext)

    const logInHandler = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password=form.password.value;

        login(email, password)
            .then(result => {
                const loginUser = result.user
                console.log(loginUser);
                form.reset();
            })
            .catch(error => {
                console.log(error.message);
            })
    }
     // google login
     const googleLoginHandler = () => {
        googleLogin()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='w-96 mx-auto py-56 md:py-44 lg:py-44'>
            <div className="relative flex  flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-[#74d1c6] to-[#74d1c6] bg-clip-border ">
                    <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                        Sign In
                    </h3>
                </div>
                <form onSubmit={logInHandler} className="flex flex-col gap-4 p-6">
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#74d1c6] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeHolder=" "
                            type='email'
                            name='email'
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#74d1c6] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#74d1c6] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#74d1c6] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Email
                        </label>
                    </div>
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#74d1c6] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeHolder=" "
                            type='password'
                            name='password'

                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#74d1c6] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#74d1c6] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#74d1c6] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Password
                        </label>
                    </div>
                    <div className="-ml-2.5">
                        <div className="inline-flex items-center">
                            <label
                                className="relative flex items-center p-3 rounded-full cursor-pointer"
                                htmlFor="checkbox"
                                data-ripple-dark="true"
                            >
                                <input
                                    type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#74d1c6] checked:bg-[#74d1c6] checked:before:bg-[#74d1c6] hover:before:opacity-10"
                                    id="checkbox"
                                />
                                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-width="1"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                            </label>
                            <label
                                className="mt-px font-light text-gray-700 cursor-pointer select-none"
                                htmlFor="checkbox"
                            >
                                Remember Me
                            </label>
                        </div>
                    </div>
                    <div className="p-6 pt-0">
                        <button
                            className="block w-full select-none rounded-lg bg-gradient-to-tr from-[#74d1c6] to-[#74d1c6ec] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#74d1c6] transition-all hover:shadow-lg hover:shadow-[#4a494a] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Sign In
                        </button>
                        <p className='my-4 text-xl font-bold text-center '>Or</p>
                        <button onClick={googleLoginHandler} className='w-full bg-white shadow-lg py-3 rounded-lg hover:shadow-2xl duration-200 ease-linear active:bg-[#74d1c6]'>
                            <div className='flex justify-center'>
                                <img className='w-[20%] ' src={google} alt="" />
                            </div>
                        </button>
                        <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
                            Don't have an account?
                            <Link
                                to="/signup"
                                className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-[#74d1c6]"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SignIn;