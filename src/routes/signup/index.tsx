/* eslint-disable @typescript-eslint/ban-ts-comment */
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

export default function Signup() {
    const login = () => {
        setLock(true);
        // @ts-ignore
        setButtontext(<Spinner size="md" color="white" />);
        setButtoncolor('warning');

        fetch('/api/auth/signup', {
            body: JSON.stringify({
                username: email,
                password,
                firstName: fname,
                lastName: lname,
            }),
            method: 'POST',
        })
            .then((r) => r.json())
            .then(
                (r: {
                    error: boolean;
                    message: string;
                    data: { token: { uuid: string } };
                }) => {
                    if (r.error) {
                        setButtoncolor('danger');
                        setButtontext(
                            // @ts-ignore
                            <FontAwesomeIcon icon={faXmark} size="2x" />
                        );
                        setTimeout(() => setButtontext('SIGNUP'), 1000);
                        // setModalData(
                        return;
                    }
                    localStorage.setItem('token', r.data.token.uuid.toString());
                    setButtoncolor('success');
                    // @ts-ignore
                    setButtontext(<FontAwesomeIcon icon={faCheck} size="2x" />);
                    setTimeout(() => {
                        window.location.href = '/dashboard';
                    }, 1000);
                }
            );
        setLock(false);
    };

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [lock, setLock] = useState(false);
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [buttontext, setButtontext] = useState('SIGNUP');
    const [buttoncolor, setButtoncolor] = useState('primary');

    return (
        <div className="justify-center flex items-center h-[90vh] bg-gradient-to-r from-blue-500 to-transparent">
            <Card className="min-w-[40%] min-h-[42%]">
                <CardHeader className="text-center justify-center font-extrabold text-2xl p-5">
                    Login Portal
                </CardHeader>
                <CardBody className="p-5">
                    <div className="grid grid-cols-2 grid-rows-1">
                        <Input
                            required
                            type="text"
                            isDisabled={lock}
                            placeholder="First Name"
                            value={fname}
                            // @ts-ignore
                            onValueChange={setFname}
                            className="pb-5 pr-2 flex"
                        />
                        <Input
                            required
                            type="text"
                            isDisabled={lock}
                            placeholder="Last Name"
                            value={lname}
                            // @ts-ignore
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
                <div className="pb-7 justify-center text-center">
                    Already have an account? Login{' '}
                    <Link href="/signup">here.</Link>
                </div>
            </Card>
        </div>
    );
}
