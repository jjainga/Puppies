import axios from "axios";

// Export an object with a "search" 
export default {
  search: function(query) {return axios.get("https://dog.ceo/api/breed/" + query + "/images");}
}
