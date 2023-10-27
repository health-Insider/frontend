/* eslint-disable @typescript-eslint/ban-ts-comment */
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Input,
    Spinner,
} from '@nextui-org/react';
import { useState } from 'react';

export default function Login() {
    const login = () => {
        setLock(true);
        // @ts-ignore
        setButtontext(<Spinner size="md" color="white" />);
        setButtoncolor('warning');
        setTimeout(() => {
            setButtoncolor('success');
            // @ts-ignore
            setButtontext(<FontAwesomeIcon icon={faCheck} size="2x" />);
        }, 2000);
        // Process login
    };

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [lock, setLock] = useState(false);
    const [buttontext, setButtontext] = useState('LOGIN');
    const [buttoncolor, setButtoncolor] = useState('primary');

    return (
        <div className="justify-center flex items-center h-[100vh] bg-gradient-to-r from-blue-500 to-transparent">
            <Card className="w-[40%] h-[30%]">
                <CardHeader className="text-center justify-center font-extrabold text-2xl p-5">
                    Login Portal
                </CardHeader>
                <CardBody className="p-5">
                    <Input
                        required
                        type="email"
                        isDisabled={lock}
                        placeholder="Email"
                        value={email}
                        // @ts-ignore
                        onValueChange={setEmail}
                        className="pb-5"
                    />
                    <Input
                        required
                        type="password"
                        isDisabled={lock}
                        placeholder="Password"
                        // @ts-ignore
                        onValueChange={setPassword}
                        value={password}
                        className="pb-10"
                    />
                    <Button
                        children={buttontext}
                        // @ts-ignore
                        color={buttoncolor}
                        onClick={login}
                    />
                </CardBody>
            </Card>
        </div>
    );
}
