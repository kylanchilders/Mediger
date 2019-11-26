import React from "react";
import Header from "../components/Nav";
import FooterDiv from "../components/Footer";
import CompanyInfoFormDiv from "../components/CompanyInfoFormDiv";

function CompanyInfo() {
    return (
        <div>
        <Header />
        <CompanyInfoFormDiv />
        <br></br>
        <br></br>
        <br></br>
        <FooterDiv/>
        </div>
    )
}

export default CompanyInfo;