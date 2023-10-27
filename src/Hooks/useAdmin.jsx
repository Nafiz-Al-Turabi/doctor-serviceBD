import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useAdmin = () => {
    const { user } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        // console.log("User data:", user);
        if (user) {
            fetch(`http://localhost:5000/users/admin/${user.email}`)
                .then(res => res.json())
                .then(result => {
                    console.log("API Response Data:", result);
                    setIsAdmin(result.admin);
                })
                .catch(error => {
                    console.error("Error fetching admin status:", error);
                });
        }
    }, [user]);

    return isAdmin; 
};

export default useAdmin;

