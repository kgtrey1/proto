import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";
import Input from "./input";
import "./App.css";

interface LoginFormProps {
  hidden: boolean;
}

type Payload = {
  mail: string;
  password: string;
};

const LoginForm: FC<LoginFormProps> = ({ hidden }) => {
  const [form, setForm] = useState<Payload>({ mail: "", password: "" });
  const onFormChange = useCallback(
    (event: ChangeEvent<HTMLFormElement>): void => {
      setForm({ ...form, [event.target.name]: event.target.value });
    },
    [form, setForm]
  );

  const onSubmit = useCallback(
    (event: FormEvent): void => {
      event.preventDefault();
    },
    [form]
  );

  return (
    <div
      className={`slide-right-div background ${
        hidden ? "slide-right-animation" : ""
      }`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {true ? (
        <form
          onChange={onFormChange}
          onSubmit={onSubmit}
          style={{ width: 400, display: "flex", flexDirection: "column" }}
        >
          <h3 style={{ marginBottom: 50, color: "white" }}>Sign In</h3>
          <Input label="Mail" props={{ name: "mail" }} />
          <Input
            label="Passsword"
            props={{ name: "password", type: "password" }}
          />
          <button
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
            type="submit"
            className="btn btn-dark"
          >
            <span>Log In</span>
          </button>
          <a
            href="http://google.com"
            style={{
              display: "block",
              marginTop: 30,
              alignSelf: "center",
              textDecoration: "none",
            }}
          >
            <span style={{ color: "#FF8AF7", textDecoration: "none" }}>
              Don't have an account
            </span>
          </a>
        </form>
      ) : null}
    </div>
  );
};

export default LoginForm;
