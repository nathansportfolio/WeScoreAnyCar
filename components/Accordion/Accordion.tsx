import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import moment from "moment";

interface MotAccordionProps {
  mots: any;
}

const MotAccordion: React.FC<MotAccordionProps> = ({ mots }) => {
  return mots.map((mot: any, index: number) => {
    const {
      completedDate,
      motTestNumber,
      odometerUnit,
      odometerValue,
      rfrAndComments,
      testResult,
    } = mot;
    return (
      <Accordion
        disableGutters={true}
        style={{ backgroundColor: "transparent", color: "black" }}
        key={index}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>{completedDate} </Typography>{" "}
            <Typography
              style={{
                fontWeight: "500",
                color: testResult.toLowerCase() === "passed" ? "green" : "red",
              }}
            >
              {testResult}
            </Typography>{" "}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {rfrAndComments.length > 0 ? (
            rfrAndComments
              .sort((a: any, b: any) => (a.type < b.type ? 1 : -1))
              .map((comment: any) => (
                <>
                  <Typography style={{ marginBottom: "" }}>
                    <b>{comment.type}</b>
                    <br />
                    <p style={{ fontSize: "14px" }}>{comment.text}</p>
                  </Typography>
                </>
              ))
          ) : (
            <Typography>
              <b> No Advisories </b>
            </Typography>
          )}
          <div style={{ paddingTop: "10px", color: "black" }}>
            <Typography>
              Mileage: {odometerValue} {odometerUnit}{" "}
            </Typography>
            <Typography>Mot Test: {motTestNumber}</Typography>
          </div>
        </AccordionDetails>
      </Accordion>
    );
  });
};

export default MotAccordion;
