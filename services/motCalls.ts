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
    const vehicle = data[0]
    const score = getScores(vehicle);

    console.log('s', 100-score)
    return {...vehicle, score: 100-score};
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
      score: 100,
    };
  }
};

const getScores = (vehicle:any) => {
  let score = 0;
    vehicle.motTests.map((mot:any) => {
    let advisories = 0;
    let dangerous = 0; 
    let fail = 0;
    let major = 0;
    let minor = 0;
    let user = 0;

    mot.rfrAndComments.map((comment:any) => {
      if(comment.type.toLowerCase() === 'advisory') advisories++
      if(comment.type.toLowerCase() === 'fail') fail++
      if(comment.type.toLowerCase() === 'major') major++
      if(comment.type.toLowerCase() === 'minor') minor++
      if(comment.type.toLowerCase() === 'user entered') user++
      if(comment.type.toLowerCase() === 'dangerous') dangerous++
      else if(comment.dangerous) dangerous++
     
    })

    const newScore = calculateScore(advisories, fail, dangerous, major, minor, user,)  
    score += newScore
  })
  const currentYear = new Date().getFullYear()
  const age = currentYear - vehicle.firstUsedDate.split('.')[0]
    return parseFloat((score/age).toFixed(2))*20
}

const calculateScore = (advisories:number, fail:number, dangerous:number, major:number, minor:number, user:number) => {
    return((advisories*0.5) + minor + (major*1.5) + (dangerous*3) + user + (fail*2))
}
