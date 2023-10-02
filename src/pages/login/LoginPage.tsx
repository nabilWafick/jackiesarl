import LoginForm from "../../components/form/forms/login/login";

function LoginPage() {
  return (
    <div className=" h-screen w-screen flex items-center justify-center content-center">
      <div className="w-[350px] shadow-lg flex flex-col p-7 rounded-sm">
        <h3 className="text-bold text-[30px] mb-7 flex justify-center text-center text-black">
          Se connecter
        </h3>
        <LoginForm />
        {/* <Link to="/bienvenue">
            <AuthenticationButton name="Connexion" onClick={() => {}} />
          </Link> */}
      </div>
    </div>
  );
}

export default LoginPage;
