import { JSImages } from "../utils/images";

function Splash() {
  return (
    <div className=" h-scree w-screen flex flex-col justify-center items-center">
      <div className="h-max w-max rounded-[25px] shadow-lg bg-white ">
        <img
          className=" mb-7 ms-7"
          src={JSImages.logo}
          alt="Jackie Sarl Logo"
        />
      </div>
    </div>
  );
}

export default Splash;
