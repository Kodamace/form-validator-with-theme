import { createStyles, makeStyles, Modal, Theme } from "@material-ui/core";
import React, { FunctionComponent, useEffect, useState } from "react";

interface IModal {
  body: any;
  showModal: boolean;
}

function getModalStyle() {
  const top = 30;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translateX(-${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

export const PopUpModal: FunctionComponent<IModal> = ({ body, showModal }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen && showModal) {
      setIsOpen(true);
    }
    if (isOpen && !showModal) {
      setIsOpen(false);
    }
  }, [showModal, isOpen]);

  return (
    <Modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        {body}
      </div>
    </Modal>
  );
};
