/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import Clients from "../../models/clients/clients.model";

const detectFileExtension = (fileLink: string | undefined) => {
  if (fileLink == undefined) {
    return undefined;
  }
  const lastDotIndex = fileLink.lastIndexOf(".");
  if (lastDotIndex === -1) {
    return undefined;
  }

  const extension = fileLink.slice(lastDotIndex + 1);
  // console.log("file extension", extension);
  return extension;
};

interface InterfacesStore {
  isOpen: boolean[];
  currentActiveSideBarOption: string;
  currentActiveSideBarSubOption: string;
  actionResultMessage: string | undefined;
  fileLink: string | undefined;
  fileExtension: string | undefined;
  setIsOpen: (newIsOpen: boolean[]) => void;
  toggleSideBarOptionDropdown: (
    index: number,
    selectedClient: Clients | undefined
  ) => void;
  setCurrentActiveSideBarOption: (
    index: number,
    name: string,
    selectedClient: Clients | undefined
  ) => void;
  setCurrentActiveSideBarSubOption: (name: string) => void;
  setActionResultMessage: (message: string | undefined) => void;
  setFileLink: (link: string | undefined) => void;
  setFileExtension: (extension: string | undefined) => void;
}

const useInterfacesStore = create<InterfacesStore>()(
  persist(
    (set, get) => ({
      isOpen: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      currentActiveSideBarOption: "Table de bord",
      currentActiveSideBarSubOption: "",
      actionResultMessage: "",
      fileLink: "",
      fileExtension: "",
      setIsOpen: (newIsOpen: boolean[]) => {
        set(() => ({ isOpen: newIsOpen }));
      },

      toggleSideBarOptionDropdown: (
        index: number,
        selectedClient: Clients | undefined
      ) => {
        set((state) => {
          if (index !== 1) {
            const isOpenState = state.isOpen.map((value, i) =>
              i === index ? !value : false
            );
            state.setIsOpen(isOpenState);
          } else {
            if (selectedClient) {
              const isOpenState = state.isOpen.map((value, i) =>
                i === index ? !value : false
              );
              state.setIsOpen(isOpenState);
              state.setIsOpen(isOpenState);
            }
          }
          return {};
        });
      },
      setCurrentActiveSideBarOption: (
        index: number,
        name: string,
        selectedClient: Clients | undefined
      ) => {
        if (name == "Se Déconnecter") {
          localStorage.removeItem("AuthenticatedEmployeStore");
          sessionStorage.clear();
          location.reload();
        } else
          set((state) => {
            state.setCurrentActiveSideBarSubOption("");
            state.toggleSideBarOptionDropdown(index, selectedClient);
            return { currentActiveSideBarOption: name };
          });
      },
      setCurrentActiveSideBarSubOption: (name: string) => {
        set(() => ({ currentActiveSideBarSubOption: name }));
      },
      setActionResultMessage: (message) => {
        set(() => ({ actionResultMessage: message }));
      },
      setFileLink: (link: string | undefined) => {
        const extension = detectFileExtension(link);
        // console.log("extension", extension);
        set(() => ({ fileLink: link, fileExtension: extension }));
      },
      setFileExtension: (extension: string | undefined) => {
        set(() => ({
          fileExtension: extension,
        }));
      },
    }),
    {
      name: "InterfacesStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useInterfacesStore;
