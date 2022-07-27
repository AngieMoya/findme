import style from "../theme/login.module.scss";
import googleIcon from "../assets/login/icons8-logo-de-google.svg";
import facebookIcon from "../assets/login/icons8-facebook-nuevo.svg";
import { useState } from "react";
import { useRouter } from "next/router";
export default function LoginForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "user") {
      setUser(value);
    }
    if (name === "password") {
      setPassword(value);
    }
    console.log(e.target.name);
  };

  return (
    <div className={style.formContainer}>
      <h1 className={style.title}>Iniciar sesión</h1>
      <p className={style.text}>
        Ingresa tu usuario y contraseña para iniciar sesión.
      </p>
      <form
        className={style.form}
        onSubmit={async (e) => {
          e.preventDefault();

          try {
            const settings = {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            };
            const response = await fetch(
              `https://w5vxmb3jjf.execute-api.us-east-2.amazonaws.com/dev/users?email="${user}"`,
              settings
            );
            if (!response.ok) {
              throw new Error("WARN", response.status);
            }
            const data = await response.json();
            console.log(data);
            localStorage.setItem("data", JSON.stringify(data));
            if (data.status) {
              const passwordValidate = data.data.password;
              console.log(passwordValidate);
              if (passwordValidate === password) {
                console.log("usuario y contraseña correctos");
                setTimeout(() => {
                    router.push("/");
                  }, 2000);
              } else {
                setError("Contraseña incorrecta")
              }
            } else {
              setError("El usuario ingresado no existe");
            }
          } catch (error) {
            console.error(
              "Hubo un error en el proceso de autenticacion",
              error
            );
          }

          /*setTimeout(() => {
            router.push("/");
          }, 2000);*/
        }}
      >
        <input
          className={style.formInput}
          type="email"
          name="user"
          placeholder=" Usuario"
          onChange={onChange}
          required
        ></input>
        <input
          className={style.formInput}
          type="password"
          name="password"
          placeholder=" Contraseña"
          onChange={onChange}
          required
        ></input>
        {!!error && <p className={style.message}>{error}</p>}
        <button className={style.formButton1}>Iniciar sesión</button>
        <button className={style.formButton2}>
          Iniciar sesión con{" "}
          <img
            className={style.iconButton2}
            src={googleIcon}
            alt="logo de google"
          ></img>
        </button>
        <button className={style.formButton3}>
          Iniciar sesión con{" "}
          <img
            className={style.iconButton3}
            src={facebookIcon}
            alt="logo de facebook"
          ></img>
        </button>
      </form>
      <a className={style.formLinks}>Recuperar usuario y/o contraseña</a>
      <a className={style.formLinks}>Registrarse</a>
    </div>
  );
}
