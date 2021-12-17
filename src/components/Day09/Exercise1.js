import * as React from "react"
import Card from 'react-bootstrap/Card';

const SEASONS = [
    "Spring", "Summer", "Fall", "Winter"
];
const TIME_OF_DAY = {
    MORNING: 'Morning',
    NOON: 'Noon',
    EVENING: 'Evening',
    NIGHT: 'Night'
};

const ClassesMap = {
    Spring: "success",
    Summer: "danger",
    Fall: "warning",
    Winter: "info",
    Morning: "info",
    Noon: "light",
    Evening: "warning",
    Night: "primary"
}

class Exercise1 extends React.Component {
    getSeason = () => SEASONS[Math.floor(((new Date()).getMonth() / 12 * 4)) % 4];

    getTimeOfDay = () => {
        let hour = new Date().getHours();
        if (hour >= 6 && hour < 12) {
            return TIME_OF_DAY.MORNING
        } else if (hour >= 12 && hour < 14) {
            return TIME_OF_DAY.NOON
        } else if (hour >= 14 && hour < 19) {
            return TIME_OF_DAY.EVENING
        } else {
            return TIME_OF_DAY.NIGHT;
        }
    }

    state = {
        season: this.getSeason(),
        timeOfDay: this.getTimeOfDay()
    }

    render() {
        return (
            <React.Fragment>
                <Card
                    bg={ClassesMap[this.state.season]}
                    text={ClassesMap[this.state.season] === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mt-2"
                >
                    <Card.Body>
                        <Card.Text>
                            {this.state.season}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card
                    bg={ClassesMap[this.state.timeOfDay]}
                    text={ClassesMap[this.state.timeOfDay] === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mt-2"
                >
                    <Card.Body>
                        <Card.Text>
                            {this.state.timeOfDay}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </React.Fragment>
        )
    }
}

export default Exercise1