// @ts-ignore
import ProfileCard from '../../components/card.jsx'
// @ts-ignore
import StepsCard from '../../components/stepsCard.jsx'
// @ts-ignore
import CalorieIntake from '../../components/calorieIntake.jsx'
// @ts-ignore
import CalorieConsumption from '../../components/calorieConsumption.jsx'
//@ts-ignore
import Sleep from '../../components/sleepTime.jsx'
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

      const data2 = [
        { year: 2010, count: 20 },
        { year: 2011, count: 10 },
        { year: 2012, count: 35 },
        { year: 2013, count: 15 },
        { year: 2014, count: 42 },
        { year: 2015, count: 10 },
        { year: 2016, count: 38 },
      ];
        
        window.onload = () => {
        try{
            new Chart(
                document.getElementById('steps'),
                {
                  type: 'line',
                  data: {
                    labels: data.map(row => row.year),
                    datasets: [
                      {
                        label: 'Steps',
                        axisY:{
                            labelFontSize: 10,
                          },
                        data: data.map(row => row.count),
                        borderColor:"#ffffff",
                        fontSize: 70,
                      }
                    ]
                  },
                  options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontSize: 100
                            }
                        }]
                    }
                }
                }
              );
              new Chart(
                document.getElementById('weight'),
                {
                  type: 'line',
                  data: {
                    labels: data2.map(row => row.year),
                    datasets: [
                      {
                        label: 'Steps',
                        data: data2.map(row => row.count),
                        borderColor:"#ffffff"
                      }
                    ]
                  },
                  options:{
                    responsive:true
                  }
                }
              );
        }
        catch{
            //give up
        }
    }
    return (
        <>
            <div className="grid grid-rows-2 grid-cols-3 min-h-screen max-h-screen rounded-lg bg-gradient-to-r from-royal-blue to-black items-center" id="hero-image">
                <div className = "col-start-1 row-span-2 m-[10vh]">
                    <ProfileCard/>
                </div>
                <div className = "col-start-2 row-start-1"> 
                    <StepsCard/>
                </div>
                <div className = "col-start-2 row-start-2">
                    <CalorieConsumption/>
                </div>
                <div className = "col-start-3 row-start-1">
                    <CalorieIntake/>
                </div>
                <div className = "col-start-3 row-start-2">
                    <Sleep/>
                </div>
            </div>
            
            <div className='' >
            <br /><br />
            <h1 className='text-center text-3xl'>Weight</h1><br />
            <canvas id="weight" className='!w-1/2 !h-1/2 m-auto '></canvas>
            
            <br /><br />
            <h1 className='text-center text-3xl'>Steps</h1><br />
            <canvas id="steps" className='!w-1/2 !h-1/2 m-auto '></canvas>

            </div>




        </>
    );
}