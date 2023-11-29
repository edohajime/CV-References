import { useEffect } from "react";

const { Link, useNavigate } = require("react-router-dom");

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/products?id=1');
    }, []);
    return (
        <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    );
};
export default Home;
