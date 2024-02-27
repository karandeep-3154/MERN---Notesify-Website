import * as React from "react";
import { useState, useEffect, useContext } from "react";
import noteContext from "../Context/Notes/Notecontext";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #b260c3",
  boxShadow: 129,
  boxShadow: "50px 50px 198px rgb(250, 238, 255)",
  p: 4,
};

export default function AddModal() {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAdd = () => {
    addNote(tag, title, description);
    setTag("");
    setDescription("");
    setTitle("");
    handleClose();
  };

  //   useEffect(() => {
  //     setTitle(old_title);
  //     setDescription(old_description);
  //     setTag(old_tag);
  //   }, [open, old_title, old_description, old_tag]);

  return (
    <div>
      <AddCircleSharpIcon
        id="addButton"
        style={{ color: "#5466d4", fontSize: "72px" }}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" component="h2">
            Add a New Note...
          </Typography>
          <Typography id="modal-modal-tag" sx={{ mt: 2 }}>
            <TextField
              label="Tag"
              variant="outlined"
              fullWidth
              value={tag}
              onChange={handleTagChange}
              sx={{ mt: 2 }}
            />
          </Typography>
          <Typography id="modal-modal-title" sx={{ mt: 2 }}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              value={title}
              placeholder="Title should be of Length 5 or more!"
              onChange={handleTitleChange}
              sx={{ mt: 2 }}
            />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              label="description"
              variant="outlined"
              fullWidth
              multiline
              placeholder="Description should be of Length 5 or more!"
              rows={4}
              value={description}
              onChange={handleDescriptionChange}
            />
          </Typography>
          <div className="ModalButtons">
            <button
              disabled={title.length < 5 || description.length < 5}
              style={{
                backgroundColor:
                  title.length < 5 || description.length < 5 ? "#ccc" : "",
              }}
              onClick={() => {
                handleAdd();
              }}
            >
              Add Note
            </button>
            <button
              onClick={() => {
                handleClose();
              }}
            >
              Close
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
