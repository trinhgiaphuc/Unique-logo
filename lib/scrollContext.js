import * as React from 'react';
import { useScroll } from './hooks';

const scrollContext = React.createContext({
  shouldHideNav: false,
  number: 10,
});

export const useScrollContext = () => React.useContext(scrollContext);

export default function ScrollProvider({ children }) {
  const { shouldHideNav, number } = useScroll();

  return (
    <scrollContext.Provider value={{ shouldHideNav, number }}>
      {children}
    </scrollContext.Provider>
  );
}
