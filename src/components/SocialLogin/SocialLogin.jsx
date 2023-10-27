import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import google from '../../assets/google-logo.png'


const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)

    const googleLoginHandler = () => {
        googleLogin()
            .then(result => {
                const googleUser = result.user;
                // add user in database
                const saveUser = { name: googleUser.displayName, email: googleUser.email }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <button onClick={googleLoginHandler} className='w-full bg-white shadow-lg py-3 rounded-lg hover:shadow-2xl duration-200 ease-linear active:bg-[#e74e84]'>
                <div className='flex justify-center'>
                    <img className='w-[20%] ' src={google} alt="" />
                </div>
            </button>
        </div>
    );
};

export default SocialLogin;