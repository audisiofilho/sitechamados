import { createContext, useState, useEffect } from 'react';
import {auth, db} from '../services/firebaseConnection';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc, getDoc } from 'firebase/firestore';

export const AuthContext = createContext('');

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

    // Fazer login do usuário.
    function signIn(email, password) {
        console.log('Login', { email, password });
    }

    //Cadastrar um novo usuário.
    async function signUp(name, email, password) {
        setLoadingAuth(true);

        await createUserWithEmailAndPassword(auth, email, password)
        .then(async (value)=>{
            let uid = value.user.uid;

            await setDoc(doc(db, "users", uid), {
                name: name,
                avatarUrl: null
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    name: name,
                    email: value.user.email,
                    avatarUrl: null
                };

                setUser(data);

                setLoadingAuth(false);
            })
            .catch((error)=>{
                console.log('Erro ao cadastrar usuário: ', error);
                setLoadingAuth(false);
            })
        })
    }


    return (
        <AuthContext.Provider 
        value={{
            signed: !!user,
            user,
            signIn,
            signUp,
            loadingAuth
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;