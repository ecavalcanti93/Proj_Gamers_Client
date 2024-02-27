import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddGame from './AddGame';
import "./Modal.css"

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='modal-box'>
      {/* <Button className='button' onClick={handleOpen}></Button> */}
      <button className='button-size' onClick={handleOpen}></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
            <AddGame />
        </Box>
      </Modal>
    </div>
  );
}