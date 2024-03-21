import "./deal.css";

import { useState, useEffect } from "react";

export default function Deal() {
  //TODO: CREATE A COUNTDOWN FUNCTION FOR DISCOUNTD DAY

  const calculateTimeRemaining = () => {
    const discountDate = new Date("2025-03-01T00:00:00").getTime();
    const now = new Date().getTime();
    const timeRemaining = discountDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="deal">
      <div className="deal-content">
        <span className="discountText">Super sale 30% off</span>
        <h2 className="dealTitle">Best electronics deals</h2>
        <div className="dealTimer">
          <div className="days">
            <div className="displayTimer">{timeRemaining.days}</div>
            <span>Days</span>
          </div>
          <div className="hrs">
            <div className="displayTimer">{timeRemaining.hours}</div>
            <span>Hours</span>
          </div>
          <div className="mins">
            <div className="displayTimer">{timeRemaining.minutes}</div>
            <span>Minutes</span>
          </div>
          <div className="sec">
            <div className="displayTimer">{timeRemaining.seconds}</div>
            <span>Seconds</span>
          </div>
        </div>
        <div className="dealBtn">
          <button>SHOP NOW</button>
        </div>
      </div>
    </section>
  );
}
