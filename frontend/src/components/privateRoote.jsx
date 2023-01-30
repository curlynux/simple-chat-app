// // import { useEffect } from "react";
// import { useNavigate, Outlet} from "react-router-dom";
// function PrivateRoote() 
// {
//     const Navigate = useNavigate()
//     const token = JSON.parse(localStorage.getItem("token"));
//     return token ? <Outlet /> :<Navigate to="/"/> 
// }

// export default PrivateRoote;

// // // useEffect(() => 
//         // // {
//         //     if(token) 
//         //         <Navigate to="/home"/>
//         //     if(!token)
//         //         <Navigate to="/"/>
//         // // }, [navigate, token])
//         // return <Outlet/>