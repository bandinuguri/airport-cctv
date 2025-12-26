
export interface Airport {
  id: string;
  name: string;
  nameEn: string;
  url: string;
  location: string;
  imageUrl: string;
}

export interface ModalProps {
  airport: Airport | null;
  onClose: () => void;
}
