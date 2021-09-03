import React, { Component } from 'react'
import jumbopic from '../../assets/1.png';
import './jumbo.css';
import ParticlesBg from 'particles-bg';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {
    BrowserView,
    MobileView
} from 'react-device-detect';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;
const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
export class Jumbo extends Component {
    render() {
        return (
            <section id='jumboWrapper'>
                <div id='deskCob'>
                    <ParticlesBg color="#ff0000" num={100} type="cobweb" />
                </div>
                <div id='mobiCob'>
                    <ParticlesBg color="#ff0000" num={30} type="cobweb" />
                </div>
                <div id='jumboText'>
                    <h2>
                    Amazo ICO is Launching on 03-09-2021
                    </h2>
                    <p>A Global Leader In The Domain Of Real Estate, Transportation And Forex Trading.</p>
                </div>
                <div id='jumboImg'>
                    <img src={jumbopic} />
                </div>
                {/* <div id='countdownTimer'>
                <CountdownCircleTimer
                    {...timerProps}
                    colors={[["#7E2E84"]]}
                    duration={daysDuration}
                    initialRemainingTime={remainingTime}
                >
                    {({ elapsedTime }) =>
                    renderTime("days", getTimeDays(daysDuration - elapsedTime))
                    }
                </CountdownCircleTimer>
                <CountdownCircleTimer
                    {...timerProps}
                    colors={[["#D14081"]]}
                    duration={daySeconds}
                    initialRemainingTime={remainingTime % daySeconds}
                    onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > hourSeconds
                    ]}
                >
                    {({ elapsedTime }) =>
                    renderTime("hours", getTimeHours(daySeconds - elapsedTime))
                    }
                </CountdownCircleTimer>
                <CountdownCircleTimer
                    {...timerProps}
                    colors={[["#EF798A"]]}
                    duration={hourSeconds}
                    initialRemainingTime={remainingTime % hourSeconds}
                    onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > minuteSeconds
                    ]}
                >
                    {({ elapsedTime }) =>
                    renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
                    }
                </CountdownCircleTimer>
                <CountdownCircleTimer
                    {...timerProps}
                    colors={[["#218380"]]}
                    duration={minuteSeconds}
                    initialRemainingTime={remainingTime % minuteSeconds}
                    onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > 0
                    ]}
                >
                    {({ elapsedTime }) =>
                    renderTime("seconds", getTimeSeconds(elapsedTime))
                    }
                </CountdownCircleTimer>
                </div> */}
            </section>
        )
    }
}

export default Jumbo
