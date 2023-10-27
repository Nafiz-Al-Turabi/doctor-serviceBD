import { useEffect, useContext } from 'react';
import axios from 'axios';
import useAuth from './useAuth';

const useAxiosSecure = () => {
    const { logOut } = useAuth(); // Assuming your useAuth context provides a logOut function

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000',
    });

    useEffect(() => {
        // Add an interceptor to include the authorization header in each request
        axiosSecure.interceptors.request.use(
            (config) => {
                const accessToken = localStorage.getItem('access_token');
                if (accessToken) {
                    config.headers.Authorization = `Bearer ${accessToken}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        // Add an interceptor to handle 401 and 403 responses
        axiosSecure.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    // Log the user out using your useAuth context
                    logOut();
                }
                return Promise.reject(error);
            }
        );
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;
