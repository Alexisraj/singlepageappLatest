import Day from './day';


const weekD = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];
function WeekDays(){

    return(
        weekD.map(d => 
            <Day title={d} />
        )
    );
}

export default WeekDays;