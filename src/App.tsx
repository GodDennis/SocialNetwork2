import "./App.css";
import Header from "./layouts/Header/Header";
import { SideBar } from "./layouts/Sidebar/SideBar";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/redux";
import { useSelector } from "react-redux";
import Registration from "./layouts/Registration/Registration";
import { Navigate, Outlet, Route, Routes, createHashRouter, useNavigate } from "react-router-dom";
import { initializedTC } from "./redux/app-reducer";
import { Profile } from "./layouts/MainContent/Profile/Profile";
import { Users } from "./layouts/MainContent/Users/Users";
import { Music } from "./layouts/MainContent/Music/Music";
import { Settings } from "./layouts/MainContent/Photo/Photo";
import { authIDSelector, initializedSelector, isAuthSelector } from "./selectors";
import { DialogMessages } from "./layouts/MainContent/Dialogs/DialogMessages/DialogMessages";
import { DialogUsers } from "./layouts/MainContent/Dialogs/DialogUsers/DialogUsers";

export function App() {
    const isAuth = useSelector(isAuthSelector);
    const authID = useSelector(authIDSelector);
    const initialized = useSelector(initializedSelector);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(initializedTC());
    }, [isAuth]);
    if (!initialized) {
        return <div>LOADING</div>;
    } else {
        return (
            <Routes>
                <Route
                    path='/'
                    element={
                        isAuth ? (
                            <div>
                                <Header />
                                <div className='section-wrapper'>
                                    <SideBar />
                                    <Outlet />
                                </div>
                            </div>
                        ) : (
                            <Navigate to={"/login"} />
                        )
                    }>
                    {authID && (
                        <Route
                            path='/'
                            element={<Navigate to={"/profile/" + authID} />}
                        />
                    )}
                    <Route
                        path={`/profile/:userID?`}
                        element={<Profile />}
                    />

                    <Route
                        path={"/message"}
                        element={
                            <div className={"flexWrapper"}>
                                <DialogUsers />
                                <Outlet />
                            </div>
                        }>
                        <Route
                            path={`/message/:id?`}
                            element={<DialogMessages />}
                        />
                    </Route>
                    <Route
                        path={"/users"}
                        element={<Users />}
                    />

                    <Route
                        path={"/music"}
                        element={<Music />}
                    />
                    <Route
                        path={"/photo"}
                        element={<Settings />}
                    />
                </Route>

                <Route
                    path='/login'
                    element={isAuth ? <Navigate to={"/"} /> : <Registration />}
                />
            </Routes>
        );
    }
}
