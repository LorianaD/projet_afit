import { useEffect, useState } from "react";
import getUser from "../services/user/GetUserService";

function useUser(token) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await getUser(token);
        setUser(data.data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };

    if (!token) return;

    loadUser();
  }, [token]);

  return { user, error };
}

export default useUser;