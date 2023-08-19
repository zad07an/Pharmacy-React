import { ReactNode, createContext, useContext, useState } from "react";
import Overlay from "../components/ui/Overlay";
import { ContextProps } from "../lib/models";

interface ProviderContext {
  children: ReactNode;
}

const defaultValues = {
  isModalOpen: false,
  isNavbarMenuOpen: false,
  isCallModalOpen: false,
  handleOpenModal: () => {},
  handleCloseModal: () => {},
  handleOpenNavbarMenu: () => {},
  handleCloseNavbarMenu: () => {},
  handleOrderCall: () => {},
  handleCloseCallModal: () => {}
};

const PharmacyContext = createContext<ContextProps>(defaultValues);

function PharmacyProvider({ children }: ProviderContext) {
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenNavbarMenu = () => setIsNavbarMenuOpen(true);
  const handleCloseNavbarMenu = () => setIsNavbarMenuOpen(false);
  const handleOrderCall = () => {
    setIsCallModalOpen(true);
    setIsModalOpen(false);
  };
  const handleCloseCallModal = () => setIsCallModalOpen(false);

  const contextValue: ContextProps = {
    isModalOpen,
    isNavbarMenuOpen,
    isCallModalOpen,
    handleOpenModal,
    handleCloseModal,
    handleOpenNavbarMenu,
    handleCloseNavbarMenu,
    handleOrderCall,
    handleCloseCallModal
  };

  return (
    <PharmacyContext.Provider value={contextValue}>
      {isModalOpen || isCallModalOpen ? <Overlay /> : null}
      {children}
    </PharmacyContext.Provider>
  );
}

export const usePharmacyContext = (): ContextProps => useContext<ContextProps>(PharmacyContext);

export default PharmacyProvider;
