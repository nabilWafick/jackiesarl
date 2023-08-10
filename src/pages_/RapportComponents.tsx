function RapportComponents() {
  return (
    <div className="w-screen h-screen  bg-slate-100 flex flex-col justify-center items-center content-center ">
      <div className="h-[75px] w-52 px-2 flex flex-row bg-white justify-start content-start shadow-md items-center">
        <div className=" h-[62px] w-[62px] mr-3 rounded-full bg-gray-300 shadow-md">
          {/* 
              <img
                 src={administrateur}
              src=""
              className=" object-contain"
               alt="User Image"
            /> 
            */}
        </div>
        <div className="">
          <h2 className=" text-xs mb-1">ADMINISTRATEUR</h2>
          <h3 className="text-xs font-bold">Koffi Jean Paul</h3>
        </div>
      </div>

      <div className="my-3"></div>

      <div className="h-[75 px] w-52 p-2 flex flex-row bg-white justify-start content-start shadow-md">
        <div className=" h-[70px] w-[60px] ml-0.5 mr-3 bg-gray-300 shadow-md">
          {/* 
              <img
                 src={upload}
              src=""
              className=" object-contain"
               alt="Upload image"
            /> 
            */}
        </div>
        <div className="h-full  flex flex-col justify-between content-between">
          <h2 className=" text-sm font-semibold">Rapport uploadé</h2>
          <h3 className="text-xs my-1 font-light">le 05-11-2007</h3>
          <button
            className=" bg-gray-300 text-white text-[10px] px-[10px] py-[3px] hover:border-none rounded-sm"
            type="button"
          >
            Télécharger
          </button>
        </div>
      </div>
    </div>
  );
}

export default RapportComponents;
