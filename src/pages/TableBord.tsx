import { LineBarChart } from "./charts/LineBarChart";
import { VerticalBarChart } from "./charts/VerticalBarChart";
import { DoughnutChart } from "./charts/DoughnutChart";
import {
  FaHandHoldingUsd,
  FaCaretUp,
  FaCaretDown,
  FaDotCircle,
} from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";

function TableBord() {
  return (
    <div className="h-max w-screen pl-64 pt-3 pr-5 pb-5 bg-slate-300 flex flex-col justify-center items-center content-center">
      {/* Table de bord */}
      <div className=" p-3 bg-white w-full flex flex-row justify-between items-center ">
        <h2 className="font-medium text-2xl">Table de bord</h2>
        <div className="moments flex ">
          <div className="text-xs rounded-full py-3 px-4 mx-3 bg-white shadow-md">
            Aujourd'hui
          </div>
          <div className="text-xs rounded-full py-3 px-4 mx-3 bg-white shadow-md">
            Hier
          </div>
          <div className="text-xs rounded-full py-3 px-4 mx-3 bg-white shadow-md">
            Cette Semaine
          </div>
          <div className="text-xs rounded-full py-3 px-4 mx-3 bg-white shadow-md">
            30 jours
          </div>
          <div className="text-xs rounded-full py-3 px-4 mx-3 bg-white shadow-md">
            90 jours
          </div>
          <div className="text-xs rounded-full py-3 px-4 mx-3 bg-white shadow-md">
            6 mois
          </div>
          <div className="text-xs rounded-full py-3 px-4 mx-3 bg-white shadow-md">
            152 mois
          </div>
        </div>
      </div>

      {/* Line 1 Stats */}

      <div className="flex h-[500px] w-full my-4 justify-between">
        <div className="h-full w-1/2 bg-white p-3  courbe">
          <div className="flex mb-3 justify-between ">
            <p className="font-medium text-lg">Transactions totales</p>
            <p className="font-bold text-xl">42,43 M</p>
          </div>
          <div className=" bg-black h-[1px] mb-[30px] w-full"></div>
          <div className=" h-3/4 w-full flex justify-center items-center content-center">
            <LineBarChart />
          </div>
        </div>

        <div className="h-full w-1/2 statistique grid grid-flow-row grid-cols-2 p-3">
          <div className="grid-element m-3">
            <div className="h-full w-full bg-white flex flex-col justify-between items-between content-between shadow-md rounded-[30px] p-3">
              <div className="w-full flex justify-between items-center ">
                <FaHandHoldingUsd size={40} />
                <div className="flex">
                  <div className="flex flex-col items-center">
                    <FaCaretUp color="green" className="mx-1" />
                    <FaCaretDown color="red" className="mx-1" />
                  </div>

                  <p>12%</p>
                </div>
              </div>

              <p className="text-center text-[30px] font-bold">250 000 Md</p>
              <p className="self-start text-lg">Avance</p>
            </div>
          </div>
          <div className="grid-element m-3">
            <div className="h-full w-full bg-white flex flex-col justify-between items-between content-between shadow-md rounded-[30px] p-3">
              <div className="w-full flex justify-between items-center ">
                <BsHandbag size={40} />
                <div className="flex">
                  <div className="flex flex-col items-center">
                    <FaCaretUp color="green" className="mx-1" />
                    <FaCaretDown color="red" className="mx-1" />
                  </div>

                  <p>12%</p>
                </div>
              </div>

              <p className="text-center text-[30px] font-bold">5000 tonnes</p>
              <p className="self-start text-lg">Vente</p>
            </div>
          </div>
          <div className="grid-element m-3">
            <div className="h-full w-full bg-white flex flex-col justify-between items-between content-between shadow-md rounded-[30px] p-3">
              <div className="w-full flex justify-between items-center ">
                <BiUser size={40} />
                <div className="flex">
                  <div className="flex flex-col items-center">
                    <FaCaretUp color="green" className="mx-1" />
                    <FaCaretDown color="red" className="mx-1" />
                  </div>

                  <p>12%</p>
                </div>
              </div>

              <p className="text-center text-[30px] font-bold">25</p>
              <p className="self-start text-lg">Clients Inscrits</p>
            </div>
          </div>
          <div className="grid-element m-3">
            <div className="h-full w-full bg-white flex flex-col justify-between items-between content-between shadow-md rounded-[30px] p-3">
              <div className="w-full flex justify-between items-center ">
                <GiReceiveMoney size={40} />
                <div className="flex">
                  <div className="flex flex-col items-center">
                    <FaCaretUp color="green" className="mx-1" />
                    <FaCaretDown color="red" className="mx-1" />
                  </div>

                  <p>12%</p>
                </div>
              </div>

              <p className="text-center text-[30px] font-bold"> 500 000 M</p>
              <p className="self-start text-lg">Créance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Line 2 Stats */}

      <div className="h-[400px] w-full flex  justify-between content-center ">
        <div className="h-full w-1/2 bg-white p-3 mr-1  batonnet">
          <div className="flex mb-3 justify-between ">
            <p className="font-medium text-lg">Stock Total</p>
            <p className="font-bold text-xl">7555285 tonnes</p>
          </div>
          <div className=" bg-black h-[1px] mb-[35px] w-full"></div>
          <div className=" h-3/4 w-full flex justify-center items-center content-center">
            <VerticalBarChart />
          </div>
        </div>

        <div className="h-full w-1/2 bg-white p-3 ml-1 doughnut">
          <div className="flex mb-3 justify-between ">
            <p className="font-medium text-lg">Total des Achats</p>
            <p className="font-bold text-xl">300 M</p>
          </div>
          <div className=" bg-black h-[1px] mb-[35px] w-full"></div>
          <div className=" h-3/4 w-full flex justify-between items-center content-center">
            <DoughnutChart />
            <div className=" w-[280px] flex flex-col">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FaDotCircle className="mr-3 text-slate-300" size={12} />{" "}
                  <p>CIM BENIN</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-4 ">100 000 000</p>
                  <div className="flex items-center">
                    <div className="flex flex-col ">
                      <FaCaretUp color="green" />
                      <FaCaretDown color="red" />
                    </div>
                    <p className="ml-1.5">94%</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FaDotCircle className="mr-3 text-slate-300" size={12} />{" "}
                  <p>NOCIBE</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-4 ">50 000</p>
                  <div className="flex items-center">
                    <div className="flex flex-col ">
                      <FaCaretUp color="green" />
                      <FaCaretDown color="red" />
                    </div>
                    <p className="ml-1.5">5%</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FaDotCircle className="mr-3 text-slate-300" size={12} />
                  <p>Autres</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-4 ">1 000</p>
                  <div className="flex items-center">
                    <div className="flex flex-col ">
                      <FaCaretUp color="green" />
                      <FaCaretDown color="red" />
                    </div>
                    <p className="ml-1.5">1%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Line 3 Stats */}
      <div className="h-[530px] w-full flex my-4 justify-between  items-center content-center ">
        <div className="h-full w-1/3 bg-white p-3 doughnut">
          <div className="flex mb-3 justify-between ">
            <p className="font-medium text-lg">Commandes traitées</p>
            <p className="font-bold text-xl">300 M</p>
          </div>
          <div className=" bg-black h-[1px] mb-[35px] w-full"></div>
          <div className=" h-3/4 w-full flex flex-col justify-center items-center content-center">
            <div className="my-4">
              <DoughnutChart />
            </div>
            <div className=" w-[300px] flex flex-col">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FaDotCircle className="mr-3 text-slate-300" size={12} />{" "}
                  <p>CIM BENIN</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-4 ">100 000 000</p>
                  <div className="flex items-center">
                    <div className="flex flex-col ">
                      <FaCaretUp color="green" />
                      <FaCaretDown color="red" />
                    </div>
                    <p className="ml-1.5">94%</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FaDotCircle className="mr-3 text-slate-300" size={12} />{" "}
                  <p>NOCIBE</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-4 ">50 000</p>
                  <div className="flex items-center">
                    <div className="flex flex-col ">
                      <FaCaretUp color="green" />
                      <FaCaretDown color="red" />
                    </div>
                    <p className="ml-1.5">5%</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FaDotCircle className="mr-3 text-slate-300" size={12} />
                  <p>Autres</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-4 ">1 000</p>
                  <div className="flex items-center">
                    <div className="flex flex-col ">
                      <FaCaretUp color="green" />
                      <FaCaretDown color="red" />
                    </div>
                    <p className="ml-1.5">1%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-1/3 bg-white p-3 ml-1 doughnut">
          <div className="flex mb-3 justify-between ">
            <p className="font-medium text-lg">Commandes non traitées</p>
            <p className="font-bold text-xl">300 M</p>
          </div>
          <div className=" bg-black h-[1px] mb-[35px] w-full"></div>
          <div className=" h-3/4 w-full flex flex-col justify-center items-center content-center">
            <div className="my-4">
              <DoughnutChart />
            </div>
            <div className=" w-[300px] flex flex-col">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FaDotCircle className="mr-3 text-slate-300" size={12} />{" "}
                  <p>CIM BENIN</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-4 ">100 000 000</p>
                  <div className="flex items-center">
                    <div className="flex flex-col ">
                      <FaCaretUp color="green" />
                      <FaCaretDown color="red" />
                    </div>
                    <p className="ml-1.5">94%</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FaDotCircle className="mr-3 text-slate-300" size={12} />{" "}
                  <p>NOCIBE</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-4 ">50 000</p>
                  <div className="flex items-center">
                    <div className="flex flex-col ">
                      <FaCaretUp color="green" />
                      <FaCaretDown color="red" />
                    </div>
                    <p className="ml-1.5">5%</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FaDotCircle className="mr-3 text-slate-300" size={12} />
                  <p>Autres</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-4 ">1 000</p>
                  <div className="flex items-center">
                    <div className="flex flex-col ">
                      <FaCaretUp color="green" />
                      <FaCaretDown color="red" />
                    </div>
                    <p className="ml-1.5">1%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-1/3 bg-white p-3 ml-1 doughnut">
          <div className="flex mb-3 justify-between ">
            <p className="font-medium text-lg">Total des Paiement</p>
            <p className="font-bold text-xl">300 M</p>
          </div>
          <div className=" bg-black h-[1px] mb-[35px] w-full"></div>
          <div className=" h-3/4 w-full flex flex-col justify-center items-center content-center">
            <div className="my-4">
              <DoughnutChart />
            </div>
            <div className=" w-[300px] flex flex-col">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FaDotCircle className="mr-3 text-slate-300" size={12} />{" "}
                  <p>CIM BENIN</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-4 ">100 000 000</p>
                  <div className="flex items-center">
                    <div className="flex flex-col ">
                      <FaCaretUp color="green" />
                      <FaCaretDown color="red" />
                    </div>
                    <p className="ml-1.5">94%</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FaDotCircle className="mr-3 text-slate-300" size={12} />{" "}
                  <p>NOCIBE</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-4 ">50 000</p>
                  <div className="flex items-center">
                    <div className="flex flex-col ">
                      <FaCaretUp color="green" />
                      <FaCaretDown color="red" />
                    </div>
                    <p className="ml-1.5">5%</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FaDotCircle className="mr-3 text-slate-300" size={12} />
                  <p>Autres</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-4 ">1 000</p>
                  <div className="flex items-center">
                    <div className="flex flex-col ">
                      <FaCaretUp color="green" />
                      <FaCaretDown color="red" />
                    </div>
                    <p className="ml-1.5">1%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableBord;
