import React from "react";
import loadingIcon from "../../assets/img/web-logo.png";
import "./LoadingComponent.css";
import { useSelector } from "react-redux";
export default function LoadingComponent() {
  const { isLoading } = useSelector((state) => state.commonReducer);
  if (isLoading) {
    return (
      <div className="bgLoading">
        <div className="animationLoading">
          <img src={loadingIcon} alt="" />
        </div>
      </div>
    );
  } else {
    return "";
  }
}
