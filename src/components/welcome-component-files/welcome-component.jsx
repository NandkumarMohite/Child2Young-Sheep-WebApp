import './welcome-component-css.css'
import DisplayCardComponent from '../reusable-component/display-card-component/display-card-component';
import DropdownCardComponent from '../reusable-component/dropdown-card-component/dropdown-card-component';
import TimeCardComponent from '../reusable-component/time-card-component/time-card-component';
function WelcomeComponent() {
    const dateData=[{
        key: "initial",
        time : {
            startDate: {
                date:'1999-10-02',
                text: "Start Date"
        },
            endDate: {
                date:'1999-10-05',
                text: "End Date"
        }
        },
    },{
        key: "previous",
        time : {
            startDate: {
                date:'1999-10-08',
                text: "Prev Start Date"
        },
            endDate: {
                date:'1999-10-09',
                text: "Prev End Date"
        }
    }
    }
    ]
    const dropDownData = [{
        title: 'Webinar Name',
        options: ['Hindu', 'Muslim', 'Christan', 'Boodist']
    }, {
        title: 'Webinar Name',
        options: ['Hindu1', 'Muslim1', 'Christan1', 'Boodist1']
    }, {
        title: 'Cast2',
        options: ['Hindu2', 'Muslim2', 'Christan2', 'Boodist2']
    }];
    const shipData = [{
        title: 'Total Female Sheeps',
        data: '200',
        prevData: '197',
        increment: '+3'
    },
    {
        title: 'No. Sheeps Now Pregnent',
        data: '158',
        prevData: '160',
        increment: '-2'
    },
    {
        title: 'No. Sheeps Have XYZ Vacination',
        data: '190',
        prevData: '200',
        increment: '-10'
    },
    {
        title: 'No. Sheeps Have ABC Vacination',
        data: '188',
        prevData: '200',
        increment: '-12'
    },
    {
        title: 'No. Sheeps Have OPC Vacination',
        data: '200',
        prevData: '200',
        increment: '0'
    }]
    return (
        <>
            <div className="carding">
            {dateData.map((item) => (
                    <div className="dropdownCardComponent">
                        <TimeCardComponent key={item.key} title={item.key} timeData ={item.time} />
                    </div>
                ))}
                {dropDownData.map((item) => (
                    <div className="dropdownCardComponent">
                        <DropdownCardComponent key={item.title} title={item.title} options={item.options} />
                    </div>
                ))}
            </div>
            <div className="carding">
                {shipData.map((item) => (
                    <div className="displayCardComponent">
                        <DisplayCardComponent key={item.title} title={item.title} data={item.data} prevData={item.prevData} increment={item.increment} />
                    </div>
                ))}
            </div>

        </>
    )
};
export default WelcomeComponent;