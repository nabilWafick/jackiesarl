import { FC } from "react";
import useInterfacesStore from "../../../../store/interfaces/useInfacesStore";
import Modal from "./Modal.widget";
import { toggleModal } from "./ToggleModal";
import { FaDownload, FaWindowClose } from "react-icons/fa";
//import { Document, Page } from "react-pdf";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const FileShower: FC = () => {
  const fileLink = useInterfacesStore((state) => state.fileLink);
  const setFileLink = useInterfacesStore((state) => state.setFileLink);
  const fileExtension = useInterfacesStore((state) => state.fileExtension);

  const plugins = defaultLayoutPlugin();

  return (
    <Modal label="file-shower">
      <div className="flex flex-col self-center justify-center  items-center min-w-min max-w-[700px] p-3 shadow-xl relative overflow-auto ">
        <div className=" flex flex-col justify-between items-center fixed top-5 right-[358.8px]  px-2 py-3">
          <FaWindowClose
            size={20}
            className="text-secondary hover:cursor-pointer"
            onClick={() => {
              toggleModal("file-shower");
              setFileLink(undefined);
            }}
          />
          <FaDownload
            className="text-secondary hover:cursor-pointer  mt-5"
            onClick={() => {}}
          />
        </div>

        <div className="flex my-10 justify-center items-center sidebar">
          {fileExtension == undefined || fileExtension == "" ? (
            <p>Rien à afficher</p>
          ) : ["png", "jpg", "jpeg"].includes(fileExtension) ? (
            <div>
              <img src={fileLink!} alt="File To Show" />
              <p>File link : ${fileExtension}</p>
            </div>
          ) : (
            fileExtension == "pdf" && (
              // <div className="bg-secondary">
              //   <Document file={fileLink} onLoadSuccess={onDocumentLoadSucces}>
              //     <Page pageNumber={pageNumber} />
              //   </Document>
              //   <p>
              //     {fileLink}
              //     Page {pageNumber} of {numPages}
              //   </p>
              // </div>
              <div>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                  <Viewer fileUrl={fileLink as string} plugins={[plugins]} />
                </Worker>
              </div>
            )
          )}
          <p>File extension {fileExtension}</p>
        </div>
        {/* <div className="w-full flex flex-row justify-around items-center mt-4 mb-1">
          <JsOutlineButton
            type="button"
            name="Fermer"
            onClick={() => {
              toggleModal("file-shower");
              setFileLink(undefined);
            }}
          />
        </div> */}
      </div>
    </Modal>
  );
};

export default FileShower;
