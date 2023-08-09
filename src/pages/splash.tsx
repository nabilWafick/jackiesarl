import jackieSarlLogo from "./../assets/images/logo.png";

function Splash() {
  return (
    <div className=" h-max w-max">
      <div className="rounded  shadow-lg bg-white flex justify-center content-center items-center">
        <img
          className=" mb-7 ms-7"
          src={jackieSarlLogo}
          alt="Jackie Sarl Logo"
        />
      </div>
    </div>
  );
}

export default Splash;
