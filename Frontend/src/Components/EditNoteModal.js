import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
  //   boxShadow: 129,
  boxShadow: "50px 50px 198px rgb(250, 238, 255)",
  p: 4,
};

export default function BasicModal({
  initialTitle,
  initialDescription,
  initialTag,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [tag, setTag] = useState(initialTag);
  const handleTagChange = (e) => {
    setTag(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  useEffect(() => {
    setTitle(initialTitle);
    setDescription(initialDescription);
    setTag(initialTag);
  }, [open, initialTitle, initialDescription, initialTag]);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h4" component="h2">
            Update Your Note
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
              onChange={handleTitleChange}
              sx={{ mt: 2 }}
            />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={handleDescriptionChange}
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
