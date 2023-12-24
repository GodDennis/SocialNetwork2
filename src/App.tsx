import "./App.css";
import Header from "./layouts/Header/Header";
import { SideBar } from "./layouts/Sidebar/SideBar";
import { useEffect } from "react";
import { SetProfileAuthIDTC } from "./redux/auth-reducer";
import { RootStoreType, useAppDispatch } from "./redux/redux";
import { useSelector } from "react-redux";
import Registration from "./layouts/Registration/Registration";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { initializedTC } from "./redux/app-reducer";
import { Profile } from "./layouts/MainContent/Profile/Profile";
import DialogsContainer from "./layouts/MainContent/Dialogs/DialogsContainer";
import { Users } from "./layouts/MainContent/Users/Users";
import { Music } from "./layouts/MainContent/Music/Music";
import { Settings } from "./layouts/MainContent/Photo/Photo";

export function App() {
    const isAuth = useSelector<RootStoreType, boolean>(state => state.auth.isAuth);
    const userID = useSelector<RootStoreType, number | null>(state => state.auth.id);
    const initialized = useSelector<RootStoreType, boolean>(state => state.app.initialized);

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
                    {userID && (
                        <Route
                            path='/'
                            element={<Navigate to={"/profile/" + userID} />}
                        />
                    )}
                    <Route
                        path={`/profile/:userID?`}
                        element={<Profile />}
                    />
                    <Route
                        path={"/message"}
                        element={<DialogsContainer />}
                    />
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

{
    /* <Route
path='/'
element={
    isAuth ? <Navigate to={`/profile/${userID}`} /> : <Navigate to={`/login`} />
}
/>
<Route
path='/*'
element={
    <div>
        <Header />
        <div className='section-wrapper'>
            <SideBar />
            <MainContent />
        </div>
    </div>
}
/>

<Route
path='/login'
element={isAuth ? <Navigate to={"/"} /> : <Registration />}
/> */
}

// isAuth? <Outlet?> :  Navigate to loign
