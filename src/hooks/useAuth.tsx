// import React, { useState, useEffect, useContext, createContext } from "react";
// import { AUTH_TOKEN_KEY } from "../constants/authConstants";

// interface AuthContextType {
//     isAuthenticated: boolean;
//     login: (token: string) => void;
//     logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | null>(null);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

//     useEffect(() => {
//         const token = localStorage.getItem(AUTH_TOKEN_KEY);
//         if (token) {
//             setIsAuthenticated(true);
//         }
//     }, []);

//     const login = (token: string) => {
//         localStorage.setItem(AUTH_TOKEN_KEY, token);
//         setIsAuthenticated(true);
//     }

//     const logout = () => {
//         localStorage.removeItem(AUTH_TOKEN_KEY);
//         setIsAuthenticated(false);
//     }

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error("useAuth must be used within an AuthProvider");
//     }
//     return context;
// };
