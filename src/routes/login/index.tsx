/* eslint-disable @typescript-eslint/ban-ts-comment */
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Input,
    Link,
    Spinner,
} from '@nextui-org/react';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

export default function Login() {
    const login = () => {
        setLock(true);
        // @ts-ignore
        setButtontext(<Spinner size="md" color="white" />);
        setButtoncolor('warning');

        fetch('/api/auth/login', {
            body: JSON.stringify({ username: email, password }),
        })
            .then((r) => r.json())
            .then(
                (r: {
                    error: boolean;
                    message: string;
                    data: { token: string };
                }) => {
                    if (r.error) {
                        setButtoncolor('danger');
                        setButtontext(
                            // @ts-ignore
                            <FontAwesomeIcon icon={faXmark} size="2x" />
                        );
                        // setModalData()
                    }
                }
            );
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
    const [modalData, setModalData] = useState();

    return (
        <div className="justify-center flex items-center h-[100vh] bg-gradient-to-r from-blue-500 to-transparent">
            <Card className="w-[40%] h-[35%]">
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
                    <div className="pt-5 justify-center">
                        Don't have an account? Signup{' '}
                        <Link href="/signup">here.</Link>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
