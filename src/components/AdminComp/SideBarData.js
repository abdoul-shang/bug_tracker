import {
  faDiagramProject,
  faList,
  faListCheck,
  faPersonArrowDownToLine,
  faRectangleList,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";

const SideBarData = [
  {
    id: 2,
    designation: "Manage role assignment",
    label: "ManageRole",
    font: faPersonArrowDownToLine,
  },
  {
    id: 3,
    designation: "Manage projects and users",
    label: "ManageProject",
    font: faDiagramProject,
  },
  {
    id: 4,
    designation: "My projects",
    label: "MyProjects",
    font: faRectangleList,
  },
  {
    id: 5,
    designation: "My ticket",
    label: "MyTickets",
    font: faTicket,
  },
  {
    id: 1,
    designation: "Dashboard",
    label: "Dashboard",
    font: faList,
  },
  {
    id: 6,
    designation: "Management",
    label: "Management",
    font: faListCheck,
  },
];

export default SideBarData;
