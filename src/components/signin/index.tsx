import React, { useState, useCallback, useRef } from "react";

import { isMobileOnly } from "react-device-detect";

import Button from "@vtex/styleguide/lib/Button";
import PageBlock from "@vtex/styleguide/lib/PageBlock";
import Input from "@vtex/styleguide/lib/Input";
import InputPassword from "@vtex/styleguide/lib/InputPassword";

import { Logo } from "../logo";

const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const isEmailValid = (email: string): boolean => EMAIL_REGEX.test(email);

const isPasswordValid = (
  password: string
): { valid: boolean; reason?: string } => {
  if (!password.trim()) {
    return {
      valid: false,
      reason: "A senha não pode ser vazia"
    };
  }

  return {
    valid: true
  };
};

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const emailInputRef = useRef<HTMLInputElement>();
  const passwordInputRef = useRef<HTMLInputElement>();

  const handleLogin = useCallback((email: string, password: string) => {
    setEmailErrorMessage("");
    setPasswordErrorMessage("");

    if (!isEmailValid(email)) {
      setEmailErrorMessage("Esse email não é válido");
      emailInputRef.current?.focus();
      return;
    }

    const { valid, reason } = isPasswordValid(password);
    if (!valid) {
      setPasswordErrorMessage(reason ?? "");
      passwordInputRef.current?.focus();
      return;
    }
  }, []);

  const padding = isMobileOnly ? "ph6" : "ph8";

  return (
    <div
      className={`w-100 vh-100 mw6 flex flex-column center justify-center ${padding}`}
    >
      <PageBlock>
        <form className="ma3" onSubmit={() => handleLogin(email, password)}>
          <div className="dt center">
            <Logo />
          </div>
          <div className="mt6">
            <Input
              errorMessage={emailErrorMessage}
              label="Email"
              onChange={e => setEmail(e.target.value)}
              ref={emailInputRef}
              value={email}
            />
          </div>
          <div className="mt6">
            <InputPassword
              errorMessage={passwordErrorMessage}
              label="Senha"
              onChange={e => setPassword(e.target.value)}
              ref={passwordInputRef}
              value={password}
            />
          </div>
          <div className="mt6 tr center">
            <Button onClick={() => handleLogin(email, password)}>Entrar</Button>
          </div>
        </form>
      </PageBlock>
    </div>
  );
};
