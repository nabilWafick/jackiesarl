import SignupForm from "../../components/form/forms/signup/signup";

function SignupPage() {
  return (
    <div className=" h-screen w-screen flex items-center justify-center content-center">
      <div className="w-[350px] shadow-lg flex flex-col p-7 rounded-sm">
        <h3 className="text-bold text-[30px] mb-7 flex justify-center text-center text-black">
          Créer un compte
        </h3>

        <SignupForm />
        {/* 
          <Link to="/postes">
            <AuthenticationButton name="Créer un compte" onClick={() => {}} />
          </Link> */}
      </div>
    </div>
  );
}

export default SignupPage;
