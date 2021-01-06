import React from "react";
import "./Page.css";
import { Link } from "react-router-dom";
import { Routes } from "./routes";

type Props = {
  children: React.ReactNode;
};

function HeaderBack() {
  return (
    <div className="HeaderBack">
      <Link to={Routes.HOME} className="HeaderBack__Link">
        <div className="HeaderBack__Link__Decoration">{"<"}</div>
        <div>Back</div>
      </Link>
    </div>
  );
}

export function Page({ children }: Props) {
  return (
    <>
      <div className="Header">
        <HeaderBack />
      </div>
      {children}
    </>
  );
}
