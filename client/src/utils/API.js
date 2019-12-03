import axios from "axios";

export default {
      // Gets all events - sand-box edition
  getAllRooms: function() {
    return axios.get("/api/events/rooms");
  },

  // Gets all events for household
  getAllPatients: function(id) {
    console.log(`OrgID: ${id}`)
    return axios.get("/api/event/all/" + id);
  },
  
    createRoom: function(eventData) {

        return axios.post('/api/createRoom', eventData );
      }
};