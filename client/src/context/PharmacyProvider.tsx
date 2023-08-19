import { ReactNode, createContext, useContext, useState } from "react";
import Overlay from "../components/ui/Overlay";
import { ContextProps } from "../lib/models";

interface ProviderContext {
  children: ReactNode;
}

const defaultValues = {
  isModalOpen: false,
  handleOpenModal: () => {},
  handleCloseModal: () => {}
};

const PharmacyContext = createContext<ContextProps>(defaultValues);

function PharmacyProvider({ children }: ProviderContext) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const contextValue: ContextProps = {
    isModalOpen,
    handleOpenModal,
    handleCloseModal
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
