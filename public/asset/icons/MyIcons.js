import { faUser as faUserReg } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Bars(size, color) {
  return <FontAwesomeIcon icon={faBars} size={size} color={color} />;
}

export function User(size, color) {
  return <FontAwesomeIcon icon={faUserReg} size={size} color={color} />;
}
