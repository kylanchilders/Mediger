import React from "react";
import Header from "../components/Nav";
import FooterDiv from "../components/Footer";
import CreateRoomDiv from "../components/CreateRoomDiv";

function CreateRoom() {
    return (
        <div>
        <Header />
        <CreateRoomDiv />
        <br></br>
        <br></br>
        <br></br>
        <FooterDiv/>
        </div>
    )
}

export default CreateRoom;