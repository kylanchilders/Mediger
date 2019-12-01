import React from "react";
import Header from "../components/NavSignIn";
import FooterDiv from "../components/Footer";
import CompanyInfoFormDiv from "../components/CompanyInfoFormDiv";

function CompanyInfo() {
    return (
        <div>
        <Header />
        <CompanyInfoFormDiv />
        <FooterDiv/>
        </div>
    )
}

export default CompanyInfo;