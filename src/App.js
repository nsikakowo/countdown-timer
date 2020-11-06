import React, { useEffect, useRef, useState} from 'react';
import './App.css';

function App() {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let  interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date('December 3, 2020 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor(distance % (1000 * 60 * 60 ) / (1000 * 60));
      const seconds = Math.floor(distance % (1000 * 60 ) / 1000);

      if (distance < 0 ){
          //stop timer
          clearInterval(interval.current);
      }else{
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
      }
    }, 1000);
  }

  //componetDidmount
  useEffect(() => {
    startTimer();
    return() => {
      clearInterval(interval.current);
    }
  });
  
  return (
    <section className="main-app">
      <main>
      <div className="container">
        <h2>Next Event Timer</h2>
        <p>Mark your calenders for the next big event</p>
      </div>
      <section className="timer">
        <div>
          <p>{timerDays}</p>
          <p><small>Days</small></p>
        </div>
          <span>:</span>
        <div>
          <p>{timerHours}</p>
          <p><small>Hours</small></p>
        </div>
          <span>:</span>
        <div>
          <p> {timerMinutes} </p>
          <p><small>Minutes</small></p>
        </div>
          <span>:</span>
        <div>
          <p> {timerSeconds} </p>
          <p><small>Seconds</small></p>
        </div>
          
      </section>
      </main>
    </section>
  );
}

export default App;
