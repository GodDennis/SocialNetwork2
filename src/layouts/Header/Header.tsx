import { Btn } from "../../components/Btn/Btn";
import { Logo } from "../../components/Logo/Logo";
import { deleteLoginTc } from "../../redux/auth-reducer";
import { useAppDispatch } from "../../redux/redux";
import s from "../Header/Header.module.scss";

const Header = () => {
    const dispatch = useAppDispatch();
    const onClickHandler = () => {
        dispatch(deleteLoginTc());
    };
    return (
        <header className={s.header}>
            <div className={s.container}>
                <a
                    className={s.link}
                    href='#'>
                    <Logo />
                    <span>ВКОНТАКТЕ</span>
                </a>
                <button
                    onClick={onClickHandler}
                    className={s.logout}
                    type='button'>
                    Выйти
                </button>
            </div>
        </header>
    );
};

export default Header;
