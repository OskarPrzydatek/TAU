import React from 'react';
import SubmitButton from '../Button/SubmitButton';
import { Input } from '../Input/Input';

type LoginFormProps = {
  onLoginSubmit: (email: string, password: string) => void;
};

export default function LoginForm({ onLoginSubmit }: LoginFormProps) {
  const emailLoginFormRef = React.useRef<HTMLInputElement>(null);
  const passwordLoginFormRef = React.useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = emailLoginFormRef.current?.value;
    const password = passwordLoginFormRef.current?.value;

    if (email && password) {
      onLoginSubmit(email, password);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Login</h2>
      <Input
        label="Email"
        placeholder="Put email here :D"
        ref={emailLoginFormRef}
        inputTestId="login-form-email-input"
      />
      <Input
        label="Password"
        type="password"
        placeholder="Put email here :D"
        ref={passwordLoginFormRef}
        inputTestId="login-form-password-input"
      />
      <SubmitButton label="Login" dataTestId="login-form-submitt-button" />
    </form>
  );
}
