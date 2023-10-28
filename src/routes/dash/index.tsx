import './index.css'
import {CircularProgress, Card, CardBody, CardFooter, Chip} from "@nextui-org/react";
import Chart from 'chart.js/auto';


export default function Dash() {
    const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];
    
    window.onload = () => {
    try{
        var chart = new Chart(
            document.getElementById('acquisitions'),
            {
              type: 'line',
              data: {
                labels: data.map(row => row.year),
                datasets: [
                  {
                    label: 'Acquisitions by year',
                    data: data.map(row => row.count),
                    borderColor:"#ffffff"
                  }
                ]
              },
              options:{
                responsive:true
              }
            }
          );

          chart.canvas.style.width = toString(window.innerWidth/2)

          
    }
    catch{
        //give up
    }
}
    return (
        <>
        
            <div id="app">
                <h1>Dashboard</h1>
                <Card className="w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500">
                    <CardBody className="justify-center items-center pb-0">
                        <CircularProgress
                            classNames={{
                                svg: "w-36 h-36 drop-shadow-md",
                                indicator: "stroke-white",
                                track: "stroke-white/10",
                                value: "text-3xl font-semibold text-white",
                            }}
                            value={70}
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
                            2800 Data points
                        </Chip>
                    </CardFooter>
                </Card>
            </div>

            <canvas id="acquisitions" className='charts'></canvas>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.min.js" integrity="sha512-7U4rRB8aGAHGVad3u2jiC7GA5/1YhQcQjxKeaVms/bT66i3LVBMRcBI9KwABNWnxOSwulkuSXxZLGuyfvo7V1A==" ></script>
        </>
    )
}