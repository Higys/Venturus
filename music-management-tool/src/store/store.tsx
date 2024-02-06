import React from 'react';

const Store = React.createContext<any[]>([]);
Store.displayName = 'Store';

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children, initialState, reducer }: { children: React.ReactNode, initialState: any, reducer: any }) => {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
  );
};