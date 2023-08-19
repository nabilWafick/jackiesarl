import { JSImages } from "../utils/images";
import { Link } from "react-router-dom";

function SplashPage() {
  return (
    <div className=" h-full w-full flex justify-center items-center">
      <Link to="/creer-un-compte">
        <div className="h-max w-max rounded-[25px] shadow-lg bg-white ">
          <img
            className=" mb-7 ms-7"
            src={JSImages.logo}
            alt="Jackie Sarl Logo"
          />
        </div>
      </Link>
    </div>
  );
}

export default SplashPage;
