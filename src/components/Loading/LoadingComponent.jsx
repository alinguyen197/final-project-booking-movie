import React from "react";
import loadingIcon from "../../assets/img/web-logo.png";
import "./LoadingComponent.css";
import { useSelector } from "react-redux";
// import { useSpring, animated } from "react-spring";
export default function LoadingComponent() {
  // const styles = useSpring({
  //   loop: true,
  //   from: { rotateZ: 0 },
  //   to: { rotateZ: 180 },
  // });
  const { isLoading } = useSelector((state) => state.commonReducer);
  if (isLoading) {
    return (
      <div className="bgLoading">
        {/* <animated.div
          style={{
            width: 80,
            height: 80,
            // backgroundColor: "#46e891",
            borderRadius: 16,
            ...styles,
          }}
        ></animated.div> */}
        <div className="animationLoading">
          <img src={loadingIcon} alt="" />
        </div>
      </div>
    );
  } else {
    return "";
  }
}
