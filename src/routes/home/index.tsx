// @ts-ignore
import Tab from '../../components/aboutTabs.jsx'
import './index.css'
import { Image } from '@nextui-org/react'
import heroImg from '/hero-main.jpg'
import {Button} from "@nextui-org/react";
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div className="flex min-h-screen max-h-screen rounded-lg 
                            bg-gradient-to-r from-kelp-green to-black items-center" 
                 id="hero-image">
                <div className='flex self-center min-h-[30vmax] max-w-[40vmax] mx-[8vmax] items-center p-10 justify-center' id = "box">
                    <h1 className='text-left font-semibold'>Healthcare that's <span className='bg-gradient-to-r from-baby-blue to-blue-400 bg-clip-text text-transparent'>Tailored</span> towards you
                        <br />
                        <Link to={'/signup'}>
                            <Button variant="shadow" className='min-w-[20vmax] min-h-[4vmax] mt-2 font-semibold text-[30px] p-4 bg-gradient-to-r from-blue-400 to-violet-400'>Get started ⤳</Button>
                        </Link>
                    </h1>
                </div>
                <div className='flex place-self-center min-h-mr-0 mx-[6vmax]'>
                    <Image isBlurred
                           alt = "NextUI hero Image"
                           src = {heroImg}
                           className='h-[30vmax] w-[45vmax]'
                    />
                </div>
            </div>
            <div className='flex-1 p-[5%]' id='body'>
                <Tab/>
            </div>
            
        </>
    )
}