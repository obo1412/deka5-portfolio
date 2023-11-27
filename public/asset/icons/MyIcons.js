import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBars,
//   faHandBackFist,
//   faHandFist,
//   faWandMagicSparkles,
//   faBoxOpen,
//   faDiagramProject,
//   faMedal,
// } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faHandBackFist } from "@fortawesome/free-solid-svg-icons/faHandBackFist";
import { faHandFist } from "@fortawesome/free-solid-svg-icons/faHandFist";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons/faWandMagicSparkles";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons/faBoxOpen";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons/faDiagramProject";
import { faMedal } from "@fortawesome/free-solid-svg-icons/faMedal";

import { faUser as faUserReg } from "@fortawesome/free-regular-svg-icons/faUser";
import { faCalendarCheck as faCalendarCheckReg } from "@fortawesome/free-regular-svg-icons/faCalendarCheck";
import { faEnvelope as faEnvelopeReg } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faAddressBook as faAddressBookReg } from "@fortawesome/free-regular-svg-icons/faAddressBook";

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

// 어바웃미 옆 주먹 손등방향
export function HandBackFist(size, color) {
  return <FontAwesomeIcon icon={faHandBackFist} size={size} color={color} />;
}

// 어바웃미 옆 주먹 손바닥방향
export function HandFist(size, color) {
  return <FontAwesomeIcon icon={faHandFist} size={size} color={color} />;
}

// 스킬 옆 매직 완드
export function WandMagicSparkles(size, color) {
  return (
    <FontAwesomeIcon icon={faWandMagicSparkles} size={size} color={color} />
  );
}

// 아카이브 박스
export function BoxOpen(size, color) {
  return <FontAwesomeIcon icon={faBoxOpen} size={size} color={color} />;
}

// 프로젝트 다이아그램
export function DiagramProject(size, color) {
  return <FontAwesomeIcon icon={faDiagramProject} size={size} color={color} />;
}

// 커리어 옆 메달
export function Medal(size, color) {
  return <FontAwesomeIcon icon={faMedal} size={size} color={color} />;
}
