import ScoreGauge from "../../components/ScoreGauge";
import MileageScore from "../../components/MileageDisplay";
import LoadingButton from "@mui/lab/LoadingButton";
import LineChart from "../../components/LineChart";
import MotAccordion from "../../components/Accordion";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { MainContext } from "../../context/context";
import Head from "next/head";

const style = {
  card: { textAlign: "center" as "center", marginTop: "30px" },
  taxCard: { display: "flex", justifyContent: "space-between", height: "30px" },
  inner: { display: "flex", justifyContent: "center" },
  header: { marginLeft: "30px", color: "white" },
  h2: {
    textAlign: "left",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    maxWidth: "800px",
  },
  startAgain: {
    width: "100vw",
    position: "absolute",
    textAlign: "right",
    color: "white",
    top: "60px",
    right: "5px",
  },
  aTag: { textDecoration: "none", color: "#f1c40f" },
};

interface ScoreProps {

}

const Score: React.FC<ScoreProps> = () => {
  const router = useRouter();
  const { setError, setLoading, savedToggle, user } = useContext(MainContext);
  // const {
  //   'BD63 SOE',
  //   1200,
  //   'Petrol',
  //   'Audi',
  //   model,
  //   motTests,
  //   'White',
  //   firstUsedDate,
  //   motChartTests,
  //   score,
  //   'taxed',
  //   '11/12/2024',
  //   revenueWeight,
  //   wheelplan,
  //   dateOfLastV5CIssued,
  //   co2Emissions,
  // } = vehicleString;

  // const { averageMots, avgScore, avgScrapped, numberOfScrapped } =
  //   averageVehicle;

  const firstCard = {
    icon: "fas fa-car",
    firstCol: [
      { title: "Registration", value: 'BD63 SOE' },
      { title: "Make", value: 'Audi' },
      { title: "Model", value: 'A3' },
    ],
    secondCol: [
      { title: "Fuel", value: 'Petrol' },
      { title: "Colour", value: 'White' },
      { title: "Engine", value: 1200 },
    ],
  };

  const secondCard = {
    icon: "fas fa-car",
    firstCol: [
      { title: "Taxed Status", value: 'taxed' },
      { title: "Tax Due Date", value: '11/12/2024' },
    ],
    secondCol: [
      { title: "Emissions", value: 19+' (co2)'},
      { title: "Tax Code", value: "12W" },
    ],
  };

  const thirdCard = {
    icon: "fas fa-car",
    firstCol: [
      { title: "Weight", value: 1000 + "kg" },
      { title: "Last V5 generated", value: '11/12/2025' },
    ],
    secondCol: [
      { title: "Wheel Base", value: '4 wheel base' },
    ],
  };

  useEffect(() => {
    if (!'BD63 SOE') {
      setTimeout(() => {
  setLoading(false);
      setError(true);
      }, 2000)
    
      router.push("/");
    }
  }, []);

  const CarDetailsCard = (properties: any) => {
    return (
      <div className="scrore-card">
        <div
          style={{
            height: "105px",
            width: "105px",
            marginTop: "30px",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "",
            borderRadius: "60px",
            boxShadow: "rgba(0, 0, 0, 1) 0px 5px 15px",
          }}
        >
          <div style={{ padding: "26px" }}>
            <span className={`${properties.icon} fa-4x`}></span>
          </div>
        </div>
        <div
          className="flex space-between"
          style={{
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
        >
          <div>
            {properties.firstCol.map((details: any, index: number) => (
              <div style={style.card} key={index}>
                <h3>{details.title}</h3>
                <h3 className="text-light">{details.value}</h3>
              </div>
            ))}
          </div>

          <div>
            {properties.secondCol.map((details: any, index: number) => (
              <div style={style.card} key={index}>
                <h3>{details.title}</h3>
                <h3 className="text-light">{details.value}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>WeScoreAnyCar - {'BD63 SOE'}</title>
        <meta property="og:title" content="WeScoreAnyCar - Score" key="score" />
        <meta
          name="description"
          content="Score your vehicle, and find out how your car compares to others. It's like a credit score for your car."
        />
      </Head>

      <div className="mountain-background">
        <div className="mountain-filter">
          <div className="page-container">
            <div className="score-shelf">
              <div style={style.inner} className="inner-page">
                <div className="score-and-mileage-container">
                  <div className="gauges">
                    <div style={{ justifyContent: "center", display: "flex" }}>
                      <ScoreGauge
                        duration={1}
                        average={2}
                        percentage={1}
                        header="Your score"
                        subHeader=""
                      />
                    </div>
                  </div>
                  <MileageScore
                    mileage={104000}
                    numberOfScrapped={8300}
                  />
                </div>
              </div>
            </div>
            <div className="score-container-chunk">
              <h2 className="score-headers" style={style.header}>
                {'Audi'} {'A3'}{" "}
                <div className="inline-block text-light">{'BD63 SOE'}</div>
              </h2>
              <div className="score-card-container">
                {CarDetailsCard(firstCard)}
                {CarDetailsCard(secondCard)}
                {CarDetailsCard(thirdCard)}
              </div>
            </div>
            <h2 className="score-headers" style={style.header}>
              {" "}
              How is your car doing?{" "}
            </h2>
            {/* {motTests.length > 1 && (
              <div className="mot-container">
                <h3 className="text-centered">Last 5 year MOT scores</h3>

                <LineChart mots={motChartTests} averageMots={averageMots} />
                <div
                  className="flex space-between"
                  style={{
                    padding: "10px",
                  }}
                >
                  <p style={{ color: "#e74c3c" }}> -Your Score-</p>{" "}
                  <p style={{ color: "black" }}>-Average Score-</p>
                </div>
              </div>
            )} */}
            <div className="mot-container">
              <h2>Your MOT History</h2>
              {/* <div className="mot-entry-container">
                <MotAccordion mots={motTests} />
              </div> */}
            </div>
            <div className="know-car-container">
              <p>Know your car, save this information</p>
              <LoadingButton
                variant="contained"
    
              >
                {" "}
                Save car
              </LoadingButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   if (params) {
//     if (params.id) {
//       const STAGING = false
//       let response = await fetch(
//         STAGING ? "http://localhost:3000/api/vehicles/" + params.id.toString() : "https://we-score-any-car-gageclgar-nathansportfolio.vercel.app/api/vehicles/" + params.id.toString(),
//         {
//           method: "GET",
//         }
//       );
        
//       const { message } = await response.json();

//       return { props: message };
//     }
//   }
//   throw new Error("Required parameters not provided");
// };

export default Score;
