import { Link } from "react-router-dom";

const LogoutPage = () => {
  return (
    <div className="h-full flex w-full justify-center items-center">
      <Link to="/jackie-sarl">
        <div className="text-2xl">LogOut Page</div>
      </Link>
    </div>
  );
};

export default LogoutPage;
