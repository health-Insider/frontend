/* eslint-disable @typescript-eslint/ban-ts-comment */
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

export default function Contact() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [lock, setLock] = useState(false);


    return (
        <div className="justify-center flex items-center h-[50vmax] bg-gradient-to-r from-fuchsia-500 to-transparent">
            <Card className="min-w-[40%] h-max-[35%]">
                <CardHeader className="text-center justify-center font-extrabold text-2xl p-5">
                    Contact Portal
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
                        type="text"
                        isDisabled={lock}
                        placeholder="Query"
                        // @ts-ignore
                        onValueChange={setPassword}
                        value={password}
                        className="pb-10"
                    />
                    <Button
                        children={'Submit'}
                        // @ts-ignore
                        color={'primary'}

                    />
                </CardBody>
            </Card>
        </div>
    );  
}
