import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";

// Description : A generic button, changed according to content, classname and onClick function
// Props : content , className,  onClick, create
// Creator : Refael
export default function Back({ ...attr }) {
  return (
    <NavLink to={`/`}>
      <IoMdArrowRoundBack />
    </NavLink>
  );
}
