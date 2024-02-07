import { logingTC } from "../../../redux/auth-reducer";
import { useAppDispatch } from "../../../redux/redux";
import s from "./RegistrForm.module.scss";
import { useForm } from "react-hook-form";

function RegistrForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch = useAppDispatch();

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
            <form
                className={s.form}
                onSubmit={handleSubmit((data: any) => dispatch(logingTC(data)))}>
                <div>
                    <div>
                        <b>Логин для входа:denpodreckiy@mail.ru</b>
                        <input
                            {...register("email", { required: "This is required" })}
                            type='email'
                            placeholder='Телефон или почта'
                            className={`${s.loggin} ${s.inp}`}
                        />
                    </div>
                    <div>
                        <b>Пароль для входа:goddennis</b>

                        <input
                            {...register("password", {
                                required: "This is required",
                                minLength: {
                                    value: 4,
                                    message: "Min length shoud be 4 symbol",
                                },
                            })}
                            type='password'
                            placeholder='Введите пароль'
                            className={`${s.password} ${s.inp}`}
                        />
                    </div>
                    <button
                        type='submit'
                        className={s.enter}>
                        Войти
                    </button>
                    <div>
                        <button
                            type='button'
                            className={s.create}>
                            Зарегистрироваться
                        </button>
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
