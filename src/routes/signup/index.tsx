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

export default function Signup() {
    const login = () => {
        setLock(true);
        setButtontext(<Spinner size="md" color="white" />);
        setButtoncolor('warning');
        setTimeout(() => {
            setButtoncolor('success');
            setButtontext(<FontAwesomeIcon icon={faCheck} size="2x" />);
        }, 2000);
        // Process login
    };

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [lock, setLock] = useState(false);
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [buttontext, setButtontext] = useState('SIGNUP');
    const [buttoncolor, setButtoncolor] = useState('primary');

    return (
        <div className="justify-center flex items-center h-[100vh] bg-gradient-to-r from-blue-500 to-transparent">
            <Card className="w-[40%] h-[40%]">
                <CardHeader className="text-center justify-center font-extrabold text-2xl p-5">
                    Login Portal
                </CardHeader>
                <CardBody className="p-5">
                    <div className="grid grid-cols-2 grid-rows-1">
                        <Input
                            required
                            type="email"
                            isDisabled={lock}
                            placeholder="First Name"
                            value={fname}
                            onValueChange={setFname}
                            className="pb-5 pr-2 flex"
                        />
                        <Input
                            required
                            type="email"
                            isDisabled={lock}
                            placeholder="Last Name"
                            value={lname}
                            onValueChange={setLname}
                            className="pb-5 pl-2 flex"
                        />
                    </div>
                    <Input
                        required
                        type="email"
                        isDisabled={lock}
                        placeholder="Email"
                        value={email}
                        onValueChange={setEmail}
                        className="pb-5"
                    />
                    <Input
                        required
                        type="password"
                        isDisabled={lock}
                        placeholder="Password"
                        onValueChange={setPassword}
                        value={password}
                        className="pb-10"
                    />
                    <Button
                        children={buttontext}
                        color={buttoncolor}
                        onClick={login}
                    />
                </CardBody>
            </Card>
        </div>
    );
}
