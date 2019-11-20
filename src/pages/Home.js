//Using desconstructor to import "Component" feature from react package
import React from "react";
import Header from "../components/Nav";
import MainDiv from "../components/CenterDiv";
import FooterDiv from "../components/Footer";
function Home() {
    return (
        <div>
        <Header />
        <MainDiv />
        <br></br>
        <br></br>
        <br></br>
        <FooterDiv/>
        </div>
        
    )
}

export default Home;