import { Navigate, Route, Routes } from "react-router-dom";
import { Profile } from "./Profile/Profile";
import { Users } from "./Users/Users";
import { Music } from "./Music/Music";
import { Settings } from "./Photo/Photo";
import s from "./MainContent.module.scss";
import DialogsContainer from "./Dialogs/DialogsContainer";
import { RootStoreType } from "../../redux/redux";
import { useSelector } from "react-redux";

export const MainContent = () => {
  const userID = useSelector<RootStoreType, number | null>(
    (state) => state.auth.id
  );
  return (
    <div className={s.container}>
      <Routes>
        {userID && (
          <Route path="/" element={<Navigate to={"/" + userID} />}></Route>
        )}
        <Route path={`/:userID?`} element={<Profile />} />
        <Route path={"/message"} element={<DialogsContainer />} />
        <Route path={"/users"} element={<Users />} />
        <Route path={"/music"} element={<Music />} />
        <Route path={"/photo"} element={<Settings />} />
      </Routes>
    </div>
  );
};
