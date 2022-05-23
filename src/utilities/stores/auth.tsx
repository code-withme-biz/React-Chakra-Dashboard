import { createContext, FC, useContext, useState } from 'react';

export const AuthContext = createContext<{
  user?: User;
  setUser: (user: User) => void;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
}>(null!);

// TODO: Move to type when more info is preset.
export type User = {
  name: string;
  email: string;
};

export const AuthContextProvider: FC = (props) => {
  const [user, setUser] = useState<User>();
  return <AuthContext.Provider value={{ user, setUser }} {...props} />;
};

export const useAuth = () => useContext(AuthContext);
