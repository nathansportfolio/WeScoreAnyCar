import axios from "axios";

const TOKEN = 'zwG0SnyNMl95KkE4lyd4A6zblMKRKknr3HinEpnP'
const ADDRESS = 'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles'
const HEADERS = {
    headers: {
      "x-api-key": TOKEN,
      Accept: "application/json",
      "Content-Type": "applicaiton/json",
    },
  };

export const taxApi = async (registrationNumber:string) => {

try{
    const { data } = await axios.post(ADDRESS, {registrationNumber}, HEADERS);
    return data
}catch(err){

}


}

