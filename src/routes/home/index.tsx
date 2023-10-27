import Nav from '../../components/navbar.jsx'
import Tab from '../../components/aboutTabs.jsx'
import './index.css'
import { Divider } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import heroImg from '/hero-main.jpg'

export default function Home() {
    return (
        <>
            <Nav/>
            <div className="flex min-h-screen max-h-screen -mt-[5vmax] rounded-lg 
                            bg-gradient-to-r from-kelp-green to-black items-center" 
                 id="hero-image">
                <div className='flex self-center min-h-[30vmax] max-w-[40vmax] mx-[8vmax] items-center p-10 justify-center' id = "box">
                    <h1 className='text-left font-semibold'>Healthcare that's <span className='bg-gradient-to-r from-baby-blue to-blue-400   bg-clip-text text-transparent'>Tailored</span> towards you</h1>
                </div>
                <div className='flex place-self-center mr-0 mx-[6vmax]'>
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
            <Divider/>
            <footer className="mt-3 pb-4 text-center">Made by team BYTEOVERFLOW</footer>
        </>
    )
}