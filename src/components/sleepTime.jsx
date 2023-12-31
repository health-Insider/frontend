import {CircularProgress, Card, CardBody, CardFooter, Chip} from "@nextui-org/react";

export default function App() {
  return (
    <Card className="w-[42vh] h-[42vh] border-none bg-gradient-to-r from-purple-500 to-pink-500">
      <CardBody className="justify-center items-center pb-0">
        <CircularProgress
          classNames={{
            svg: "w-40 h-40 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          value={65}
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
          4h 30min
        </Chip>
      </CardFooter>
    </Card>
  );
}
