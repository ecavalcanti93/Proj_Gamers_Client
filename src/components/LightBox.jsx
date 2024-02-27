import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import AddGame from "./AddGame";

export default function LighBox() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        +
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
      >
        {/* <AddGame /> */}
      </Lightbox>
    </>
  );
}
