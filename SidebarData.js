import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


const SidebarData = [
    {
        title: 'HOME',
        to: '/Home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
      },
      {
        title: 'TEAM',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
      },
      {
        title: 'SOCIAL',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
      },
      {
        title: 'ABOUT US',
        to: '/about',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
      },
      {
        title: 'CONTACT US',
        to: '/contact',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
      },
];

export default SidebarData;