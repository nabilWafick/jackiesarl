import axios from "axios";
//import AchatClientApi from "../api/achat_client/achat_client.api";

const TestPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div
        className="flex justify-center items-center  h-16 w-52 bg-secondary text-white font-bold"
        onClick={async () => {
          await axios
            .get(`http://127.0.0.1:7000/api/achat-client`)
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        Fetch Clients
      </div>
    </div>
  );
};

export default TestPage;
