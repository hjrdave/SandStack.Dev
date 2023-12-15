"use client";
import { ElementType } from "react";
import { useState, ReactNode } from "react";
import { Button } from "react-bootstrap";

interface Props {
  icon?: ReactNode;
  label: string;
  children?: ReactNode;
  open?: boolean;
  labelClassName?: string;
}

export default function Collapsible({
  icon,
  label,
  children,
  open: _open,
  labelClassName,
}: Props) {
  const [open, setOpen] = useState(_open);
  return (
    <>
      <Button
        variant="link"
        onClick={() => setOpen(!open)}
        className={`text-decoration-none px-0 ${labelClassName}`}
      >
        {icon ? <span className={"pe-2"}>{icon}</span> : null}
        {label}
        <i className={`fa-solid fa-caret-${open ? "down" : "right"} ps-2`}></i>
      </Button>
      {open ? children : null}
    </>
  );
}
