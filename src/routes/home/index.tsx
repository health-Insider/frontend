import Nav from '../../components/navbar.jsx'
import './index.css'
import { Divider } from '@nextui-org/react'

export default function Home() {
    return (
        <>
            <Nav/>
            <div className="flex min-h-screen max-h-screen -mt-12 rounded-lg 
                            bg-gradient-to-r from-kelp-green to-black" 
                 id="hero-image">
                <div className='flex self-center min-h-[40vh] max-w-[80vh] mx-[12vh] items-center p-10 justify-center' id = "box">
                    <h1 className='text-left font-semibold'>Healthcare that adjusts to you</h1>
                </div>
                <div className='flex self-center min-h-[40vh] max-w-[80vh] mx-[12vh]'>
                </div>
            </div>
            <div className='flex-1 p-5 text-white' id='body'>
                <h3 className='font-bold text-[35px] my-2'>What we do</h3>
                <Divider className="my-6"/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at orci in nisi interdum sollicitudin. Etiam lobortis luctus nisl fringilla faucibus. Pellentesque fringilla, lacus ut tempus fringilla, urna massa ullamcorper nulla, vitae finibus ligula eros in libero. Nullam id quam hendrerit enim pretium consectetur quis id lectus. Duis eu enim et ex laoreet placerat eu ut orci. Nam ex urna, porttitor sed orci nec, venenatis vehicula tellus. Mauris a neque egestas, viverra ex vel, mollis nisi. Donec sed aliquam lacus. Donec sed est sodales, elementum odio eget, vulputate odio. Fusce lacus lectus, sollicitudin quis dignissim ac, sollicitudin tempus orci. Phasellus viverra elementum ante ut pellentesque. Donec molestie diam at lacus hendrerit dignissim. Duis cursus dolor ac erat gravida, et ultrices ligula vehicula.
                </p>
            </div>
        </>
    )
}