"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Task from "./components/Task";

function Page() {
  const [tasks, setTasks] = useState<{ Name: string; Description: string }[]>(
    []
  );
  const [isChecked, setIsChecked] = useState(false);
  const [showAccordion, setShowAccordion] = useState(true); // Estado para mostrar/ocultar el Accordion inicial

  const addTask = (name: string, description: string) => {
    setTasks([...tasks, { Name: name, Description: description }]);
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDeleteFirstAccordion = () => {
    setShowAccordion(false); // Oculta el primer Accordion
  };

  return (
    <>
      <Navbar addTask={addTask} />
      <div className="mx-36 mt-10 ">
        {showAccordion && (
          <Accordion
            className={isChecked ? "bg-green-200" : ""}
            defaultExpanded
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Login to save your Tasks!
            </AccordionSummary>
            <AccordionDetails>
              Is secure, I use firebase by Google
            </AccordionDetails>
            <AccordionActions>
              <Button
                className="text-red-600"
                onClick={handleDeleteFirstAccordion}
              >
                <DeleteIcon />
              </Button>
              <Checkbox
                color="success"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </AccordionActions>
          </Accordion>
        )}
        {tasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            Name={task.Name}
            Description={task.Description}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
}

export default Page;
