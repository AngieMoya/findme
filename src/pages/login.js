import LoginForm from "components/login-form";
import style from '../theme/login.module.scss'

export default function Login() {
  return <main className={style.loginBody}>
    <LoginForm />
  </main>
}
