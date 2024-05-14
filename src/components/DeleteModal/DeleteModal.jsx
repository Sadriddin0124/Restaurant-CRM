import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function DeleteModal({ open, toggle }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={toggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="delete__body">
            <h1 className="delete__title">Are you sure?</h1>
            <div className="delete__buttons">
              <button className="delete__btn-cancel">cancel</button>
              <button className="delete__btn-delete">delete</button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
