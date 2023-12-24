import { Navigate, Route, Routes } from "react-router-dom";
// import { Profile } from "./Profile/Profile";
// import { Users } from "./Users/Users";
// import { Music } from "./Music/Music";
// import { Settings } from "./Photo/Photo";
// import s from "./MainContent.module.scss";
// import DialogsContainer from "./Dialogs/DialogsContainer";
// import { RootStoreType } from "../../redux/redux";
// import { useSelector } from "react-redux";

// type PropsType = {
//     children: ReactNode;
// };

// const PrivateRoute = ({ children }: PropsType) => {
//     const isAuth = useSelector<RootStoreType, boolean>(state => state.auth.isAuth);
//     return isAuth ? children : <Navigate to='/login' />;
// };

// export const MainContent = () => {
//     const userID = useSelector<RootStoreType, number | null>(state => state.auth.id);
//     const isAuth = useSelector<RootStoreType, boolean>(state => state.auth.isAuth);
//     return (
//         <div className={s.container}>
//             <Routes>
//                 {userID && (

//                     <Route
//                         path='/'
//                         element={<Navigate to={"/profile/" + userID} />}></Route>
//                 )}
//                 <Route
//                     path={`/profile/:userID?`}
//                     element={isAuth ? <Profile /> : <Navigate to={"/login"} />}
//                 />
//                 <Route
//                     path={"/message"}
//                     element={isAuth ? <DialogsContainer /> : <Navigate to={"/login"} />}
//                 />
//                 <Route
//                     path={"/users"}
//                     element={isAuth ? <Users /> : <Navigate to={"/login"} />}
//                 />
//                 <Route
//                     path={"/music"}
//                     element={isAuth ? <Music /> : <Navigate to={"/login"} />}
//                 />
//                 <Route
//                     path={"/photo"}
//                     element={isAuth ? <Settings /> : <Navigate to={"/login"} />}
//                 />
//             </Routes>
//         </div>
//     );
// };
