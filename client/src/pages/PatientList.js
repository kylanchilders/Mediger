import React from "react";
import Header from "../components/Nav";
import FooterDiv from "../components/Footer";
import PatientDiv from "../components/PatientList";
function PatientList() {
    return (
        <div>
        <Header />
       <PatientDiv/>
        <br></br>
        <br></br>
        <br></br>
        <FooterDiv/>
        </div>
    )
}

export default PatientList;