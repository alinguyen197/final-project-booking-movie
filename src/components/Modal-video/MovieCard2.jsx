import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "./_videoModal.scss";
import iconPlay from "../../assets/img/play-video.png";
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
      <button className="btn-modal-video2" onClick={() => setOpen(true)}>
        <img src={iconPlay} alt="" />
      </button>
    </React.Fragment>
  );
}
