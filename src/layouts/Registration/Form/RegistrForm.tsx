import s from "./RegistrForm.module.scss";
function RegistrForm() {
    return (
        <div className={s.wrapper}>
            <div>
                <h2 className={s.subtitle}>Вход ВКонтакте</h2>
                <img
                    className={s.logo}
                    src='https://www.iguides.ru/upload/iblock/a97/a97a5cb533918c1815d007d248ce73a2.jpg'
                    alt='Что-то пошло не так'
                />
            </div>
            <form className={s.form}>
                <div>
                    <div>
                        <input
                            type='email'
                            placeholder='Телефон или почта'
                            className={`${s.loggin} ${s.inp}`}
                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            placeholder='Введите пароль'
                            className={`${s.password} ${s.inp}`}
                        />
                    </div>
                    <button className={s.enter}>Войти</button>
                    <div>
                        <button className={s.create}>Зарегистрироваться</button>
                        <div className={s.text}>
                            После регистрации вы получите доступ ко всем возможностям VK ID
                        </div>
                        <a
                            className={s.link}
                            href='https://id.vk.com/promo'>
                            Узнать больше
                        </a>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default RegistrForm;
