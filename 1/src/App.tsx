import LoginForm from './components/LoginForm/LoginForm';

export default function App() {
  const onLoginForm = (email: string, password: string) => {
    // Form data usage simulation
    console.log({ email: email, password: password });
  };

  return (
    <div className="App">
      <LoginForm onLoginSubmit={onLoginForm} />
    </div>
  );
}
