import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddGame from './AddGame';
import "./Modal2.css"

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button className='button' onClick={handleOpen}></Button> */}
      <button className="button-home-add" onClick={handleOpen}>Add Game</button>
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