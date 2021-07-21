import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "./_videoModal.scss";
export default function VideoModal(props) {
  const [isOpen, setOpen] = useState(false);
  let { trailer } = props;
  let trailerCode = trailer?.slice(-11);
  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={trailerCode}
        onClose={() => setOpen(false)}
      />
      <button className="btn-modal-video" onClick={() => setOpen(true)}>
        XEM TRAILER
      </button>
    </React.Fragment>
  );
}
