import React from "react";
import { KeyIcon } from "../Icons/KeyIcon";
import { LockIcon } from "../Icons/LockIcon";
import { PlusIcon } from "../Icons/PlusIcon";
import { PlusIconCircle } from "../Icons/PlusIconCircle";
import { ShieldLock } from "../Icons/ShieldLockIcon";
import "./ProductPill.css";

export function ProductPill() {
  return (
    <div className="ProductPillRoot">
      <div className="ProductPill__Icon">
        <LockIcon />
      </div>
      <span>Product Pill</span>
    </div>
  );
}

export function ProductPillA() {
  return (
    <div className="ProductPillRoot ProductPill--A">
      <div className="ProductPill__Icon">
        <LockIcon />
      </div>
      <span>Product Pill</span>
    </div>
  );
}
export function ProductPillB() {
  return (
    <div className="ProductPillRoot ProductPill--B">
      <div className="ProductPill__Icon">
        <LockIcon />
      </div>
      <span>Product Pill</span>
    </div>
  );
}
export function ProductPillC() {
  return (
    <div className="ProductPillRoot ProductPill--C">
      <div className="ProductPill__Icon">
        <LockIcon />
      </div>
      <span>Product Pill</span>
    </div>
  );
}
export function ProductPillAShield() {
  return (
    <div className="ProductPillRoot ProductPill--A">
      <div className="ProductPill__Icon">
        <ShieldLock />
      </div>
      <span>Product Pill</span>
    </div>
  );
}
export function ProductPillAKey() {
  return (
    <div className="ProductPillRoot ProductPill--A">
      <div className="ProductPill__Icon">
        <PlusIconCircle />
      </div>
      <span>Product Pill</span>
    </div>
  );
}
