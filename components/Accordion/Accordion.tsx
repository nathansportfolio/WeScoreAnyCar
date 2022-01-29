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
          {rfrAndComments.length > 0 ? (
            rfrAndComments.map((comment: any) => (
              <>
                <Typography>
                  <b>{comment.type}</b>
                  <br />
                  {comment.text}
                </Typography>
              </>
            ))
          ) : (
            <Typography>
              <b> A Clean MOT - Nothing to show </b>
            </Typography>
          )}
          <div style={{ borderTop: "dashed 1px", paddingTop: "10px" }}>
            <Typography>
              Mileage: {odometerValue} {odometerUnit}{" "}
            </Typography>
            <Typography>
              <i>Mot Test: {motTestNumber}</i>
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
    );
  });
};

export default MotAccordion;
