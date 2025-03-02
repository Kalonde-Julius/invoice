import { createContext, useState } from "react";
import axios from "axios";

const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
    const [ formValues, setFormValues] = useState({
        sellerName: "",
        sellerPhone: "",
        sellerAddress: "",
        sellerEmail: "",
        sellerBankName: "",
        sellerBankAccountHolder: "",
        sellerBankAccount: "",
        sellerWebsite:  "",
        clientName: "",
        clientAddress: "",
        driverName: "",
        driverId: "",
        vehicle: "",
        clearingAgent: "",
        date: "",
         notes: ""
    });

    const onChange = (e) => {
        const { sellerName, value } = e.target;
        setFormValues({ ...formValues, [sellerName]: value});
    };

    return <InvoiceContext.Provider value={{}}> {children} </InvoiceContext.Provider>;
};

export default InvoiceContext;