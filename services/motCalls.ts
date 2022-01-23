import axios from "axios";

const MOT_API_ADDRESS =
  "https://beta.check-mot.service.gov.uk/trade/vehicles/mot-tests?registration=";
const TOKEN = "mc5vxMFDUn8GDjWVHfW636FgFPJ7XmsCkQ1OoBdd";
const HEADERS = {
  headers: {
    "x-api-key": TOKEN,
    Accept: "application/json+v6",
    "Content-Type": "applicaiton/json",
  },
};

export const MotApiCall = async (registration: string) => {
  try {
    const { data } = await axios.get(MOT_API_ADDRESS + registration, HEADERS);
    return data[0];
  } catch (err) {
    console.log("error", err);
    return {
      registration: "",
      engineSize: "",
      fuelType: "",
      make: "",
      model: "",
      motTests: [],
      primaryColour: "",
      firstUsedDate: "",
    };
  }
};
