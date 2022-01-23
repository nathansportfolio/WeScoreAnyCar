import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

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
        style={{ backgroundColor: "" }}
        key={index}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
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
                color: testResult.toLowerCase() === "passed" ? "green" : "red",
              }}
            >
              {testResult}
            </Typography>{" "}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <b>{completedDate}</b>
          <Typography>
            Advisories Notice(s) - Nearside Rear Coil spring corroded (5.3.1 (b)
            (i))
          </Typography>
          <Typography>
            Mileage: {odometerValue} {odometerUnit}{" "}
          </Typography>
          <Typography>Mot Test: {motTestNumber}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  });
};

export default MotAccordion;
