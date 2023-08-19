import RapportUserCard from "../components/ui/RapportUserCard";
import RapportFileUploadedCard from "../components/ui/RapportFileUploadedCard";

function RapportComponents() {
  return (
    <div className="w-screen h-screen  bg-slate-100 flex flex-col justify-center items-center content-center ">
      <RapportUserCard />

      <div className="my-3"></div>
      <RapportFileUploadedCard />
    </div>
  );
}

export default RapportComponents;
