import RegistrForm from './Form/RegistrForm';
import Mobile from './mobilePromo/Mobile';
import s from './Registration.module.scss';
function Registration() {
  return (
    <section className={s.registration}>
      <Mobile />
      <RegistrForm />
    </section>
  );
}
export default Registration;
