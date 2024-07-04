import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

interface Props {
  Name: string;
  Description: string;
  deleteTask: (index: number) => void;
  index: number;
}

export default function Task(props: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleDelete = () => {
    props.deleteTask(props.index);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Accordion className={isChecked ? "bg-green-200" : ""}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel3-header"
      >
        {props.Name}
      </AccordionSummary>
      <AccordionDetails>{props.Description}</AccordionDetails>
      <AccordionActions>
        <Button className="text-red-600" onClick={handleDelete}>
          <DeleteIcon />
        </Button>
        <Checkbox
          color="success"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </AccordionActions>
    </Accordion>
  );
}
