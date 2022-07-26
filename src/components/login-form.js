import style from '../theme/login.module.scss';
import googleIcon from '../assets/login/icons8-logo-de-google.svg';
import facebookIcon from '../assets/login/icons8-facebook-nuevo.svg';
export default function LoginForm(){
    return(
        <div className={style.formContainer}>
            <h1 className={style.title}>Iniciar sesión</h1>
            <p className={style.text}>Ingresa tu usuario y contraseña para iniciar sesión.</p>
            <form className={style.form}>
                <input className={style.formInput} type="email" placeholder=' Usuario'></input>
                <input className={style.formInput} type="password" placeholder=' Contraseña'></input>
                <button className={style.formButton1}>Iniciar sesión</button>
                <button className={style.formButton2}>Iniciar sesión con <img className={style.iconButton2} src={googleIcon} alt='logo de google'></img></button>
                <button className={style.formButton3}>Iniciar sesión con <img className={style.iconButton3} src={facebookIcon} alt='logo de facebook'></img></button>
            </form>
            <a className={style.formLinks}>Recuperar usuario y/o contraseña</a>
            <a className={style.formLinks}>Registrarse</a>
        </div>
    )
}