import { ReactNode, createContext, useContext, useState } from "react";
import Overlay from "../components/ui/Overlay";
import { ContextProps } from "../lib/models";

interface ProviderContext {
  children: ReactNode;
}

const defaultValues = {
  isModalOpen: false,
  isNavbarMenuOpen: false,
  handleOpenModal: () => {},
  handleCloseModal: () => {},
  handleOpenNavbarMenu: () => {},
  handleCloseNavbarMenu: () => {}
};

const PharmacyContext = createContext<ContextProps>(defaultValues);

function PharmacyProvider({ children }: ProviderContext) {
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenNavbarMenu = () => setIsNavbarMenuOpen(true);
  const handleCloseNavbarMenu = () => setIsNavbarMenuOpen(false);

  const contextValue: ContextProps = {
    isModalOpen,
    isNavbarMenuOpen,
    handleOpenModal,
    handleCloseModal,
    handleOpenNavbarMenu,
    handleCloseNavbarMenu
  };

  return (
    <PharmacyContext.Provider value={contextValue}>
      {isModalOpen ? <Overlay /> : null}
      {children}
    </PharmacyContext.Provider>
  );
}

export const usePharmacyContext = (): ContextProps => useContext<ContextProps>(PharmacyContext);

export default PharmacyProvider;
