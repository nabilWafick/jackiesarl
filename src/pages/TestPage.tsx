import ClientsApi from "../api/clients/clients.api";
import Clients from "../models/clients/clients.model";

const client = new Clients('new_test_lastname23','new_test_names',15858588,'+229 10486858','email@new_test.test',);

const updateUser =  new Clients('new_test_lastname23','new_test_names',15858588,'+229 10486858','email@new_test.test',1,new Date());

const TestPage = () => {

  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div
        className="flex justify-center items-center  h-16 w-52 bg-secondary text-white font-bold"
        onClick={()=>{
      //    ClientsApi.create(client)
      //    ClientsApi.update(1,updateUser)
    //  ClientsApi.getById(24)
       //   ClientsApi.getAll()
        ClientsApi.delete(24);
       //   console.log(ClientsApi.create(client))
        }}
      >
        Fetch Clients
      </div>
    </div>
  );
};

export default TestPage;
