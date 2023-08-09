function Welcome() {
  return (
    <div className=" h-screen w-screen bg-slate-100 justify-center flex flex-col items-center content-center ">
      <h2 className="text-lg font-medium mb-10 text-gray-500">BIENVENUE</h2>

      <div className="w-[300px] h-[350px] bg-white flex flex-col justify-center items-center  p-2 shadow-md">
        <div className=" h-[110px] w-[110px] mb-14 rounded-full bg-gray-300 shadow-md">
          {/* 
              <img
                 src={administrateur}
              src=""
              className=" object-contain"
               alt="User Image"
            /> 
            */}
        </div>
        <p className="text-lg font-medium">KOFFI Jean Paul</p>
        <p className="my-2 font-medium">Administrateur</p>
        <p className="">+229******80</p>
      </div>
    </div>
  );
}

export default Welcome;
