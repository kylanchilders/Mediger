import React from "react";
import Header from "../components/NavSignIn";
import FooterDiv from "../components/Footer";
import PatientDiv from "../components/PatientList";
function PatientList() {
    return (
        <div>
        <Header />
       <PatientDiv/>
        <FooterDiv/>
        </div>
    )
}

export default PatientList;