import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faUser as faUserReg,
  faCalendarCheck as faCalendarCheckReg,
  faEnvelope as faEnvelopeReg,
  faAddressBook as faAddressBookReg,
} from "@fortawesome/free-regular-svg-icons";

// 메뉴 햄버거 버튼
export function Bars(size, color) {
  return <FontAwesomeIcon icon={faBars} size={size} color={color} />;
}

// 사람
export function User(size, color) {
  return <FontAwesomeIcon icon={faUserReg} size={size} color={color} />;
}

// 생년월일 앞
export function Calendar(size, color) {
  return (
    <FontAwesomeIcon icon={faCalendarCheckReg} size={size} color={color} />
  );
}

// 이메일
export function Envelope(size, color) {
  return <FontAwesomeIcon icon={faEnvelopeReg} size={size} color={color} />;
}

// 주소지
export function AddressBook(size, color) {
  return <FontAwesomeIcon icon={faAddressBookReg} size={size} color={color} />;
}
