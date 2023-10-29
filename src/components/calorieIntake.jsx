import {CircularProgress, Card, CardBody, CardFooter, Chip} from "@nextui-org/react";

export default function App() {
  return (
    <Card className="w-[42vh] h-[42vh] border-none bg-gradient-to-r from-sky-500 to-indigo-500">
      <CardBody className="justify-center items-center pb-0">
        <CircularProgress
          classNames={{
            svg: "w-40 h-40 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          value={82}
          strokeWidth={4}
          showValueLabel={true}
        />
      </CardBody>
      <CardFooter className="justify-center items-center pt-0">
        <Chip
          classNames={{
            base: "border-1 border-white/30",
            content: "text-white/90 text-small font-semibold",
          }}
          variant="bordered"
        >
          1450 Calories
        </Chip>
      </CardFooter>
    </Card>
  );
}
