import React from "react";
import { Routes } from "./routes";
import { Link } from "react-router-dom";
import "./ButtonLink.css";

type Props = {
  to: Routes;
  children: string;
};

export function ButtonLink({ to, children }: Props) {
  return (
    <div className="ButtonLink">
      <Link to={to}>{children}</Link>
    </div>
  );
}
