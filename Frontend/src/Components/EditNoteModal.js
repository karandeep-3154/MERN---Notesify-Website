import * as React from "react";
import { useState, useEffect, useContext } from "react";
import noteContext from "../Context/Notes/Notecontext";
import SellIcon from "@mui/icons-material/Sell";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
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
  boxShadow: 129,
  boxShadow: "50px 50px 198px rgb(250, 238, 255)",
  p: 4,
};

export default function BasicModal({
  note_id,
  old_title,
  old_description,
  old_tag,
}) {
  const context = useContext(noteContext);
  const { editNote } = context;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = useState(old_title);
  const [description, setDescription] = useState(old_description);
  const [tag, setTag] = useState(old_tag);
  const handleTagChange = (e) => {
    setTag(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleEdit = () => {
    editNote(note_id, title, description, tag);
    handleClose();
  };

  useEffect(() => {
    setTitle(old_title);
    setDescription(old_description);
    setTag(old_tag);
  }, [open, old_title, old_description, old_tag]);

  return (
    <div>
      <section>
        <div className="card">
          <div className="card-body">
            <div className="card-header">
              <div className="card-tag">
                <SellIcon className="CardTagIcon" sx={{ fontSize: 11 }} />
                <div className="CardTagText">{tag}</div>
              </div>

              <div>
                {/* Edit Button */}
                <div className="CardActionIconEncloser" onClick={handleOpen}>
                  <EditOutlinedIcon
                    className="CardActionIcon"
                    sx={{ fontSize: 20 }}
                  />
                </div>
              </div>
            </div>

            <div className="card-title">{title}</div>

            <div className="card-description">{description}</div>

            <div
              className="blank-space-to-accomodate-absolute-footer"
              style={{ height: "50px" }}
            ></div>

            <div className="card-footer">
              <div className="CardFooterLeft">
                <div className="CardActionIconEncloser">
                  <FavoriteBorderOutlinedIcon
                    className="CardActionIcon"
                    sx={{ fontSize: 20 }}
                  />
                </div>
              </div>

              <div className="CardFooterRight">
                <div className="CardActionIconEncloser">
                  <ArchiveOutlinedIcon
                    className="CardActionIcon"
                    sx={{ fontSize: 20 }}
                  />
                </div>

                <div className="CardActionIconEncloser">
                  <DeleteOutlinedIcon
                    className="CardActionIcon"
                    sx={{ fontSize: 20 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                handleEdit();
              }}
            >
              Update Note
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
