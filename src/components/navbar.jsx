import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from '@nextui-org/react';
import { Logo } from './logo.jsx';

export default function App() {
    return (
        <Navbar isBordered maxWidth='full'>
            <NavbarBrand>
                <Logo />
                <p className="font-bold text-inherit mx-3">Health Insighter</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex text-center !justify-center">
                <NavbarItem>
                    <Link color="foreground" href="/Dashboard">
                        Dashboard 
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="/" aria-current="page">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/contact">
                        Contact 
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="/login">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button
                        as={Link}
                        color="primary"
                        href="/signup"
                        variant="flat"
                    >
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
