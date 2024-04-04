import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Children, createContext, useState } from "react";
import app from "../firebase/firebase.config";

const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = () => {
    const [user, setUser] = useState(null);
    //create user
    const createUser =(email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const AuthInfo = {user , createUser};
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;