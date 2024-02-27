import React from "react";
import SubjectRoundedIcon from "@mui/icons-material/SubjectRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";

export const SidebarData = [
  {
    title: "All Notes",
    icon: <SubjectRoundedIcon />,
    link: "/",
  },

  {
    title: "Favourites",
    icon: <FavoriteBorderRoundedIcon />,
    link: "/favourites",
  },

  {
    title: "Archive",
    icon: <ArchiveOutlinedIcon />,
    link: "/archived",
  },
];
