import AchatClientApi from "../../api/achat_client/achat_client.api";

const TestPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <button
        className="h-16 w-52 bg-black text-white font-bold"
        onClick={() => AchatClientApi.getAll()}
      >
        Fetch Clients
      </button>
      pm
    </div>
  );
};

export default TestPage;
