import React, { useState } from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function App() {
    const [data, setData] = useState()
    fetch("/api/tracker/monthlystats").then(r=>r.json()).then(r=>setData(r.data))
    return (
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col max-w-[300px] max-h-[600px] items-center">
                <h4 className="font-bold text-large text-center">John Doe</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="./default.png"
                    width={270}
                />
            </CardBody>
        </Card>
    );
}