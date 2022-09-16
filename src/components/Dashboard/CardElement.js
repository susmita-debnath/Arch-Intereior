import { Box, Card, createStyles, Paper } from "@mui/material";
import React from "react";
import "../../CSS/DashboardComponent.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { fontSize } from "@mui/system";

// export const useStyles = makeStyles(() =>
//   createStyles({
//     rotateIcon: {
//       animation: "$spin 2s linear infinite",
//     },
//     "@keyframes spin": {
//       "0%": {
//         transform: "rotate(360deg)",
//       },
//       "100%": {
//         transform: "rotate(0deg)",
//       },
//     },
//   })
// );

const CardElement = () => {
  // const classes = useStyles();

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "transparent",
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 400,
            height: 400,
          },
        }}
      >
        <Paper sx={{ backgroundColor: "#000", opacity: ".5" }}>
          <div className="insidePaper">
            <FormatQuoteIcon sx={{ transform: "rotate(180deg)" }} />
          </div>
          <div className="paperText"> adsadasdasdaa asasdsadsadsa dsdSDSDS</div>
        </Paper>
        <Paper sx={{ backgroundColor: "#000", opacity: ".5" }}>
          <div className="insidePaper">
            <FormatQuoteIcon sx={{ transform: "rotate(180deg)" }} />
          </div>
          <div className="paperText"> adsadasdasdaa asasdsadsadsa dsdSDSDS</div>
        </Paper>
      </Box>
    </div>
  );
};

export default CardElement;
