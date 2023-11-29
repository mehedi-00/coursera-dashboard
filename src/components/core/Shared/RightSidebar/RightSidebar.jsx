import { user } from "@/src/constant/user";
// icon
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";




const RightSidebar = () => {

    const [open, setOpen] = useState(false)
    if(open === false){
        console.log('right-65')
    }else{
        console.log('right-100')
    }



    return (
    <div className={`fixed top-0 bg-pink-100 bottom-0 w-[20%] ${open ? 'right-0' : '-right-56'} duration-700`} style={{zIndex: 9999900}}>
    <div className="flex bg-slate-400 justify-between">
        {/* open button start */}
        <div>
            <span onClick={() => setOpen(!open)}>
        <MenuOpenIcon className={`w-10 h-10 ${open ? '' : 'block'}`}></MenuOpenIcon>
            </span>
        </div>
        {/* open button end */}
        {/* close button start */}
        <div className="flex justify-between w-full items-center">
            {/* userInfo */}
            <div>
                <h1>SohanWebdevctg</h1>
            </div>
            {/* userInfo */}
            {/* close button */}
            <div onClick={() => setOpen(!open)}>
            <CloseIcon className={`w-10 h-10 ${open ? 'block' : ''}`}></CloseIcon>
            </div>
            {/* close button */}
        </div>
        {/* close button end */}
    </div>
    <div className="flex gap-1">
        <div className="flex-none h-screen overflow-scroll">
        {user.map((list, index) => (<img key={index} className="w-12 h-12 rounded-full my-3 object-cover" title={list.name} src={list.image}></img>
        ))}
        
        
        </div>
        <div className="flex-1 w-32">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam placeat distinctio doloribus atque ullam! Aspernatur quam accusamus architecto magni fuga, consectetur enim quaerat veritatis quas exercitationem dicta eveniet vero facilis consequuntur reprehenderit perferendis dolorem libero at eius. Placeat voluptates vero reiciendis? Totam temporibus adipisci, inventore eius eveniet aliquam enim vel itaque odio! Eum quam beatae modi doloribus voluptatem quis delectus reprehenderit nemo earum ex accusantium magnam repellendus iste sit optio quo excepturi necessitatibus eos, temporibus repellat cupiditate tempore molestias. Quo fugit iure eum facere sunt totam accusamus id vero voluptas. Possimus ex doloribus error eveniet libero praesentium adipisci quisquam non?</p>
            {/* message */}
        </div>
    </div>
    </div>
    );
};

export default RightSidebar;