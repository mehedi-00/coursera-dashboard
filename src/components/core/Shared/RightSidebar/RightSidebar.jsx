
import { user } from "@/src/constant/user";
// icon

import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import CloseIcon from '@mui/icons-material/Close';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import { useState } from "react";




const RightSidebar = () => {

    const [open, setOpen] = useState(false)
    const [userIndex, setUserIndex] = useState(-1)
    console.log(userIndex)



    return (
    <div className={`fixed top-0 bg-white bottom-0 w-[22%] ${open ? 'right-0' : '-right-60'} duration-700`} style={{zIndex: 9999900}}>
    <div className="flex bg-black justify-between items-center h-16">
        {/* open button start */}
        <div className="p-3">
            {
                userIndex === -1 ?
                <span onClick={() => setOpen(!open)}><ForumOutlinedIcon className={`w-7 h-7 ${open ? '' : 'block'}`}></ForumOutlinedIcon>
                </span>
                : <span>
                    <img className="w-10 h-10 rounded-full object-cover"  title={user[userIndex].name} src={user[userIndex].image}/>
                </span>
            }
        </div>
        {/* open button end */}
        {/* close button start */}
        <div className="flex justify-around w-full items-center">
            {/* userInfo */}
            <div>
            {
                userIndex === -1 ?
                <span>
                    <h1 className="text-white">Team Chat</h1>
                </span>
                : <span>
                    <h1 className="text-white">{user[userIndex].name}</h1>
                </span>
            }
            </div>
            {/* userInfo */}
            {/* close button */}
            <div onClick={() => setOpen(!open)}>
            <CloseIcon className={`w-7 h-7 ${open ? 'block' : ''}`}></CloseIcon>
            </div>
            {/* close button */}
        </div>
        {/* close button end */}
    </div>
    <div className="flex gap-1">
        <div className="flex-none bar">
        {user.map((list, index) => (<img key={index} className={`w-10 h-10 rounded-full my-4 mx-3 object-cover ${userIndex ? '' : 'border-r-2 border-red-500'}`} onClick={() => setUserIndex(index)}  title={list.name} src={list.image}></img>
        ))}
        </div>
        <div className="flex-1 w-32 text-black">
            {/* message start */}
            {
                userIndex === -1 ? 
                <div className="h-screen flex justify-center items-center">
                    <div className="text-center">
                        <TextsmsOutlinedIcon className="w-32 h-32"></TextsmsOutlinedIcon>
                        <p>Select a contact to start a conversation</p>
                    </div>
                </div> 
                : <span>yes data</span>
            }
            {/* message end */}
        </div>
    </div>
    </div>
    );
};

export default RightSidebar;