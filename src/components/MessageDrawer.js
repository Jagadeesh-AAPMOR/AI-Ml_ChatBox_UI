import {  Box, Drawer, IconButton, Stack,  Card, Chip  } from "@mui/material";

import CameraIcon from '@mui/icons-material/Camera';
import SendIcon from '@mui/icons-material/Send';
import MinimizeIcon from '@mui/icons-material/Minimize';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';

import "./MessageDrawer.css"
import { useState } from "react";


export default function MessageDrawer() {
    const [status, setStatus] = useState(false)
    const [drawerExpand, setDrawerExpand] = useState(false)
    const [userSelected, setUserSelected] = useState("")

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setStatus(open);
        setDrawerExpand(false)
      };

    // Chat Box Total UI
    const chatBox = () => (
        <Box 
        
        sx={{
            minHeight: "400px",
            maxHeight: "500px",
            padding: "0px 20px",
        }}>
            {/* navigation controls */}
            <Box>
                <Stack direction="row" justifyContent="space-between">
                    <Stack direction="row" alignItems="center">
                        <IconButton>
                        <CameraIcon/> 
                        </IconButton>
                        <Box component={"span"}>IGA Gen A1</Box> 
                    </Stack>
                    <Stack direction="row" alignItems="center">
                       {!drawerExpand ? (<>
                        <IconButton onClick={() => setDrawerExpand(true)}>
                            <LaunchIcon/>
                        </IconButton>
                        <IconButton onClick={toggleDrawer(false)}>
                        <MinimizeIcon/> 
                        </IconButton>
                       </>) :
                        (<IconButton onClick={toggleDrawer(false)}>
                        <CloseIcon/> 
                        </IconButton>)}
                    </Stack>
                </Stack>
            </Box>
            {/* chat message */}
            <Stack direction={"column"} spacing={4} my={20} mr={5}>
              <Stack direction="row" alignItems="top" >
                <Box>
                  <IconButton>
                    <CameraIcon/> 
                  </IconButton>
                </Box>

              
                <Card variant="outlined" my={2} sx={{
                  width: "max-content",
                  padding: "15px 10px",
                  }}>
                  <Stack direction={'column'} spacing={1}>
                    <Box>
                    Hi, Naveen
                      What would you like to do today?
                    </Box>
                    <Chip  label="Raise an access request" onClick={() => {setUserSelected("Raise an access request")}} sx={{
                      width: "max-content",
                      borderRadius: "10px"
                    }} />
                    <Chip label="Track request status" sx={{
                      width: "max-content",
                      borderRadius: "10px"
                    }} />
                    <Chip label="View request history" sx={{
                      width: "max-content",
                      borderRadius: "10px"
                    }} />
                    </Stack>
                </Card>

              
                  
              </Stack>
              {/* User chat Inputs */}
              {
                  userSelected ? (
                    <Stack direction={"row"} justifyContent={"end"} my={5}>
                    <Chip color="primary" sx={{
                      width: "max-content",
                      borderRadius: "10px"
                      
                    }} label={userSelected} />
                    <IconButton>
                      <PersonIcon/>
                    </IconButton>
                    </Stack>
                  ) : null
                }
            </Stack>
             {/* Input Message Box */}
            <div className="messageBox" style={{
                width: "85%",
                position: "absolute",
                bottom: "20px",
                left: "40px",
                backgroundColor: "white"
            }}>
                <IconButton>
                <CameraIcon/>
                </IconButton> 
                <input type="text"/>
                <IconButton color="primary">
                    <SendIcon sx={{
                        bgcolor: "white"
                    }}/> 
                </IconButton>
            </div>
        </Box>
    )

  return (
    <div className="main" style={{
        height: "inherit"
    }}>
        {/* Input Message Box */}
        <div className="messageBox">
            <IconButton>
               <CameraIcon/>
            </IconButton> 
            <input onClick={() => setStatus(true)} 
            type="text" placeholder="Hi Naveen. How can IGA Gen A1 help today?"/>
            <IconButton color="primary">
                <SendIcon sx={{
                    bgcolor: "white"
                }}/> 
            </IconButton>
        </div>
        {/* Drawer */}
        <Drawer anchor="bottom" open={status} 
                hideBackdrop
                sx={{
                    padding: "10px 20px",
                    '& .MuiDrawer-paper': { 
                                                boxSizing: 'border-box', width: `${drawerExpand ? "54rem" : "48rem"}`,  position: "absolute",
                                                bottom: "0px",
                                                left: `${drawerExpand ? "200px" : "240px"}`,
                                                backdropFilter:" blur(10px)",
                                                backgroundColor: "rgba(87, 83, 131, 0.09)",
                                            },
                  }}
        >
                {
                    chatBox()
                }
        </Drawer>
    </div>
  )
}