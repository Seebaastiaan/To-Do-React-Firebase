import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";
import Buttons from "./Buttons";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  p: 4,
};

interface BasicModalProps {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  addTask: (name: string, description: string) => void;
}

const BasicModal: React.FC<BasicModalProps> = ({
  open,
  handleClose,
  addTask,
}) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addTask(name, description);
    setName("");
    setDescription("");
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-8">
            <TextField
              fullWidth
              label="Task name"
              id="fullWidth"
              type="search"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              fullWidth
              label="Task description"
              multiline
              id="fullWidth"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Buttons text="Add" icon></Buttons>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default BasicModal;
