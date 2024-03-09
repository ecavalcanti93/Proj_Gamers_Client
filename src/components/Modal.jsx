import * as React from 'react';
import Dialog from "@mui/material/Dialog";
import Modal from '@mui/material/Modal';
import AddGame from './AddGame';
import "./Modal.css"

export default function BasicModal({ refreshedGames }) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("body");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  

  return (
    <div className='modal-box'>
      <button onClick={handleClickOpen("body")} className='button-size'></button>
      <Modal
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-modal-title"
        aria-describedby="scroll-modal-description"
      >
        <Dialog
          PaperProps={{
    style: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  }}
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
            <AddGame refreshedGames={refreshedGames} handleClose={handleClose} />
        </Dialog>
      </Modal>
    </div>
  );
}