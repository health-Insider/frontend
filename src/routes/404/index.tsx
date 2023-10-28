import React from 'react';
import {Button} from "@nextui-org/react";
import { Link } from 'react-router-dom';

export default function Error() {
    return <><div className="flex min-h-screen max-h-screen -mt-[5vmax] rounded-lg 
    bg-black items-center justify-center text-center" >
		<div>
        <h1 className='text-6xl'>We can't find that page for you</h1><br />
		<Link to={'/'}>
                            <Button variant="shadow" className='min-w-[10vmax] min-h-[2vmax] mt-2 font-semibold text-[15px] p-4 bg-gradient-to-r from-blue-400 to-violet-400'>Go Back ⤳</Button>
                        </Link>
        </div>
	</div></>
	
}

