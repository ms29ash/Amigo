import { useState, createContext } from "react";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "../axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("chat");
  const navigate = useNavigate();
  const cookies = new Cookies();
  let { pathname } = useLocation();

  const fetchUser = async (token) => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const data = await axios.get("/user/userdata", { headers });
      let user = data?.data?.user;
      setUser({ ...user, token });
      setLoading(false);
      if (pathname !== "/") {
        navigate("/", { replace: true });
      }
    } catch (error) {
      setLoading(false);
      navigate("/auth", { replace: true });
    }
  };
  useEffect(() => {
    if (user) {
      if (!pathname === "/") {
        setLoading(false);
        navigate("/", { replace: true });
      }
    } else {
      let token = cookies.get("token");
      if (token) {
        fetchUser(token);
      } else {
        setLoading(false);
        if (pathname !== "/auth") {
          navigate("/auth", { replace: true });
        }
      }
    }
  }, [pathname]);

  return (
    <UserContext.Provider value={{ user, setUser, tab, setTab }}>
      {loading === false && children}
    </UserContext.Provider>
  );
};

export const UserState = () => {
  return useContext(UserContext);
};

export default UserProvider;
