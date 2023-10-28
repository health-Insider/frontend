// @ts-ignore
import ProfileCard from '../../components/card.jsx';
// @ts-ignore
import StepsCard from '../../components/stepsCard.jsx';
// @ts-ignore
import CalorieIntake from '../../components/calorieIntake.jsx';
// @ts-ignore
import CalorieConsumption from '../../components/calorieConsumption.jsx';
//@ts-ignore
import Sleep from '../../components/sleepTime.jsx';

export default function Dash() {
    if (!localStorage.getItem('token')) {
        window.location.href = '/login';
    }
    return (
        <>
            <div
                className="grid grid-rows-2 grid-cols-3 min-h-screen max-h-screen rounded-lg bg-gradient-to-r from-royal-blue to-black items-center"
                id="hero-image"
            >
                <div className="col-start-1 row-span-2 m-[10vh]">
                    <ProfileCard />
                </div>
                <div className="col-start-2 row-start-1">
                    <StepsCard />
                </div>
                <div className="col-start-2 row-start-2">
                    <CalorieConsumption />
                </div>
                <div className="col-start-3 row-start-1">
                    <CalorieIntake />
                </div>
                <div className="col-start-3 row-start-2">
                    <Sleep />
                </div>
            </div>
        </>
    );
}
