import { Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import SidebarItem from "../components/SideBarItem";
import { Link, NavLink } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React from 'react';
import { FC } from 'react';


type DashboardProps = {
    Component: FC;
};

const Dashboard: React.FC<DashboardProps> = ({ Component }) => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <div>
            <nav className="bg-gray-200 border-b border-b-purple-700 container w-[85%] absolute right-0 justify-center center-items flex">
                <div className="overflow-auto container mx-auto flex justify-between items-center h-14 ">
                    <div className="text-white font-semibold text-lg flex">
                        <div className='pb-8 absolute top-0'>
                            <div className='mt-3 text-2xl pl-2 text-gray-400'>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="pl-2 pr-10 h-8 w-full text-sm text-slate-400 border-2 rounded-full focus:outline-purple-600 border-none"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pt-1.5 pr-3">
                                        <SearchOutlinedIcon className="h-5 w-5 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="flex space-x-4 p-2">
                        <li className='mt-2'>
                            <EmailOutlinedIcon className='text-purple-700 ' />
                        </li>
                        <li className='mt-2'>
                            <NotificationsActiveOutlinedIcon className='text-purple-700' />
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300"><Avatar className=' h-10 w-10'>TN</Avatar></a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* SIDE BAR */}
            <div>
                <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
                    <div className="">
                        <List>
                        <NavLink to={'/upload'} className="active:bg-purple-600 activetext-white">
        <ListItem className="relative ml-2">
            <ListItemIcon><FileUploadOutlinedIcon className='text-white ' /></ListItemIcon>
            <ListItemText primary="Upload Docs" className='hidden text-white sm:hidden md:block ' />
        </ListItem>
    </NavLink>
                            <ListItem >
                                <ListItemIcon><PendingActionsOutlinedIcon /></ListItemIcon>
                                <ListItemText primary="Pending Docs" />
                            </ListItem>
                            <ListItem >
                                <ListItemIcon><DrawOutlinedIcon /></ListItemIcon>
                                <ListItemText primary="Signatures" />
                            </ListItem>
                        </List>
                    </div>
                </Drawer>

                <div className="flex h-screen">
                    <div className="bg-[#7f23cf] overflow-y w-[15%] sm:w-20 md:w-[15%]  ">
                        <div>
                            <div className=' mt-3 text-sm md:pl-6 md:text-2xl'>
                                <h1 className='ml-4 mb-2 text-white text-sm font-semibold md:text-2xl md:mr-5'>SIGN OFF'S</h1>
                            </div>
                        </div>
                        <div className=" text-center ">
                            <button onClick={toggleDrawer}><MenuOutlinedIcon className='text-white  md:hidden' /></button>
                            <List className='space-y-6 mt-4 text-white'>
                                <Link to={'/upload'}>
                                    <ListItem className="relative ">

                                    <SidebarItem
                                    
											Icon={FileUploadOutlinedIcon}
											text="upload"
										/>
                                        {/* <ListItemIcon><FileUploadOutlinedIcon className='text-white ' /></ListItemIcon>
                                        <ListItemText primary="Upload Docs" className='hidden text-white sm:hidden md:block ' /> */}
                                    </ListItem>
                                </Link><Link to={'/pending'}>
                                    <ListItem className="relative">
                                    <SidebarItem
											Icon={WorkHistoryOutlinedIcon}
											text="pending"
										/>
                                        {/* <ListItemIcon><WorkHistoryOutlinedIcon className='text-white ' /></ListItemIcon>
                                        <ListItemText primary="Pending Docs" className='hidden text-white sm:hidden md:block ' /> */}

                                    </ListItem>
                                    </Link>
                                    <Link to={'/signatures'}>
                                    <ListItem className="relative">
                                    <SidebarItem
											Icon={DrawOutlinedIcon}
											text="signatures"
										/>
                                        {/* 
                                        <ListItemIcon><DrawOutlinedIcon className='text-white ' /></ListItemIcon>
                                        <ListItemText primary="Signatures" className='hidden text-white sm:hidden md:block ' /> */}
                                    </ListItem>
                                </Link>
                            </List>

                            <div className="absolute bottom-0 left-0 h-16 w-16 text-white">
                                <Link to={'/'} >

                                <SidebarItem
											Icon={ExitToAppOutlinedIcon}
											text="Logout"
										/>
                                    
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-gray-200">
                        <div className="p-4">
                            {/* Render the component received as prop */}
                            <Component />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
