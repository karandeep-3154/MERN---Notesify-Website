import React from 'react'
import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export const SidebarData = [
    {
        title: "All Notes",
        icon: <SubjectRoundedIcon />,
        link: "/allNotes"
    },

    {
        title: "Favourites",
        icon: <FavoriteBorderRoundedIcon />,
        link: "/favourites"
    },

    {
        title: "Archive",
        icon: <ArchiveOutlinedIcon />,
        link: "/archive"
    },

    {
        title: "Bin",
        icon: <DeleteOutlinedIcon />,
        link: "/bin"
    },

]