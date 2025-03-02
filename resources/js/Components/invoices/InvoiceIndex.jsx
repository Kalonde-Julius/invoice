import { useState, useEffect } from "react";
import axios from "axios";

export const InvoiceIndex = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const getInvoices = async () => {
            const apiInvoices = await axios.get("http://invoice.test/api/v1/invoices");
            setInvoices(apiInvoices.data.data);
        } ;
        getInvoices();
    }, []);

    return (
        <div>

        </div>
    )
}