import { createContext } from 'react';

interface IModalContext {
  onHide?: () => void;
}

const modalContext = createContext<IModalContext | null>(null);

export default modalContext;
