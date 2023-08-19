import { ReactNode, createContext, useContext, useState } from "react";
import SuccessModal from "../components/modals/SuccessModal";
import Overlay from "../components/ui/Overlay";
import { ContextProps } from "../lib/models";

interface ProviderContext {
  children: ReactNode;
}

const defaultValues = {
  isSuccess: false,
  isMenuOpen: false,
  handleOpenModal: () => {},
  handleCloseModal: () => {},
  handleOpenNavbarMenu: () => {},
  handleCloseNavbarMenu: () => {}
};

const PharmacyContext = createContext<ContextProps>(defaultValues);

function PharmacyProvider({ children }: ProviderContext) {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsSuccess(true);
  const handleCloseModal = () => setIsSuccess(false);
  const handleOpenNavbarMenu = () => setIsMenuOpen(true);
  const handleCloseNavbarMenu = () => setIsMenuOpen(false);

  const contextValue: ContextProps = {
    isSuccess,
    isMenuOpen,
    handleOpenModal,
    handleCloseModal,
    handleOpenNavbarMenu,
    handleCloseNavbarMenu
  };

  return (
    <PharmacyContext.Provider value={contextValue}>
      <SuccessModal />
      {isMenuOpen || isSuccess ? <Overlay /> : null}
      {children}
    </PharmacyContext.Provider>
  );
}

export const usePharmacyContext = (): ContextProps => useContext<ContextProps>(PharmacyContext);

export default PharmacyProvider;
