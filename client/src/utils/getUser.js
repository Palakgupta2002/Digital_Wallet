import { useState, useEffect } from "react";


const useUser = (email) => {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3000/getUser/getUser/${email}/User`);
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        const userData = await response.json();
        setUser(userData);
        console.log(userData); // Log user data
      } catch (error) {
        console.error(error);
      }
    };

    if (email) {
      fetchUser();
    }
  }, [email,user]);

  console.log(user, "user"); // Log user state
  return user;
};

export default useUser;
