import { createContext, useContext, useState, ReactNode } from "react";

// Определяем интерфейс для пользователя
export interface User {
  id: string;
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  middleName: string;
  creationDate: number;
  roleId: string;
  role: {
    id: string;
    name: string;
  };
  institutionId: string;
  isDeleted: boolean;
}

// Интерфейс для значений контекста
interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Создаем контекст
const UserContext = createContext<UserContextType | undefined>(undefined);

// Хук для использования контекста пользователя
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// Провайдер контекста
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
