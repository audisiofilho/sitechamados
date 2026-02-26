import { useState } from "react";

import { db } from "../../services/firebaseConnection";
import { collection, addDoc } from "firebase/firestore";

import { toast } from "react-toastify";

import Header from "../../components/Header";
import Title from "../../components/Title";

import { FiUser } from "react-icons/fi";

export default function Customers() {
    const [customers, setCustomers] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [endereco, setEndereco] = useState('');
    const [registering, setRegistering] = useState(false);

    async function handleRegister(e) {
        e.preventDefault();

        if(customers !== '' && cnpj !== '' && endereco !== '') {
            setRegistering(true);
            await addDoc(collection(db, "customers"), {
                customers: customers,
                cnpj: cnpj,
                endereco: endereco
            })
            .then(() => {
                setCustomers('');
                setCnpj('');
                setEndereco('');
                toast.success("Empresa cadastrada com sucesso!");
                setRegistering(false);
            })
            .catch((error) => {
                toast.error("Erro ao cadastrar empresa!");
                setRegistering(false);
            });

            
        }else{
            toast.error("Preencha todos os campos!");
        }
    }

    return(
        <div>
            <Header/>
            <div className="content">
                <Title name="Clientes">
                    <FiUser size={25}/>
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleRegister}>
                        <label>Nome Fantasia</label>
                        <input 
                            type="text" 
                            placeholder="Nome da empresa" 
                            value={customers} 
                            onChange={(e) => setCustomers(e.target.value)}
                        />

                        <label>CNPJ</label>
                        <input 
                            type="text" 
                            placeholder="CNPJ da empresa" 
                            value={cnpj} 
                            onChange={(e) => setCnpj(e.target.value)}
                        />

                        <label>Endereço</label>
                        <input 
                            type="text" 
                            placeholder="Endereço da empresa" 
                            value={endereco} 
                            onChange={(e) => setEndereco(e.target.value)}
                        />

                        <button type="submit" disabled={registering}>
                            {registering ? "Cadastrando..." : "Cadastrar Nova Empresa"}
                        </button>

                       
                    </form>
                </div>
            </div>
        </div>
    )
}