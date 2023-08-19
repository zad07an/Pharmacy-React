export interface DrugProps {
  id: number;
  title: string;
  body: string;
  sizes: { width: number; height: number }[];
  layers: number;
  packs: number;
  isSterile: boolean | null;
  image: string;
  category: string;
}

export interface NavbarLinkProps {
  pathname: string;
  path: string;
}

export interface FooterLinkProps {
  products: {
    pathname: string;
    path: string;
  }[];
}

export interface CategoryLinkProps {
  pathname: string;
  path: string;
}

export interface PartnerProps {
  image: string;
}

export interface ContextProps {
  isModalOpen: boolean;
  isNavbarMenuOpen: boolean;
  isCallModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleOpenNavbarMenu: () => void;
  handleCloseNavbarMenu: () => void;
  handleOrderCall: () => void;
  handleCloseCallModal: () => void;
}
