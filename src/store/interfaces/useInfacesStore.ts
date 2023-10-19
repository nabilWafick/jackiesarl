/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import Clients from "../../models/clients/clients.model";

interface InterfacesStore {
  isOpen: boolean[];
  currentActiveSideBarOption: string;
  currentActiveSideBarSubOption: string;
  actionResultMessage: string;
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
  setActionResultMessage: (message: string) => void;
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
        //  const lastSideBarOptionName = get().currentActiveSideBarOption;
        set((state) => {
          state.toggleSideBarOptionDropdown(index, selectedClient);
          return { currentActiveSideBarOption: name };
        });
        //   console.log(`lastSideBarOptionName: ${lastSideBarOptionName}`);
        // console.log(`newSideBarOptionName: ${get().currentActiveSideBarOption}`,)
      },
      setCurrentActiveSideBarSubOption: (name: string) => {
        set(() => ({ currentActiveSideBarSubOption: name }));
      },
      setActionResultMessage: (message) => {
        set(() => ({ actionResultMessage: message }));
      },
    }),
    {
      name: "InterfacesStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useInterfacesStore;
