import { Logo } from "../../components/Logo/Logo";
import s from "../Header/Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <a className={s.link} href="#">
          <Logo />
          <span>ВКОНТАКТЕ</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
