import React, { useEffect, useState } from "react";
import "./kimbu.css";

function AnimatedCounter({ end, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const frameRate = 1000 / 60; 
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(end * progress);
      setCount(currentCount);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [end, duration]);

  return <span>{count}+</span>;
}

function CounterSection() {
  return (
    <section className="counter-section">
      <div className="counter-item">
        <div className="iconn">
            <img src="./public/Group (5).svg" alt="img" />
        </div>
        <h2><AnimatedCounter end={420} duration={2000} /></h2>
        <p>Mamnun o‘quvchilar</p>
      </div>

      <div className="counter-item">
        <div className="iconn">
            <img src="./public/Group (6).svg" alt="" />
        </div>
        <h2><AnimatedCounter end={12} duration={2000} /></h2>
        <p>Tajribali ustozlar</p>
      </div>

      <div className="counter-item">
        <div className="iconn">
            <img src="./public/library-learn-study-knowledge_svgrepo.com.svg" alt="" />
        </div>
        <h2><AnimatedCounter end={5} duration={2000} /></h2>
        <p>Yordamchi ustozlar</p>
      </div>
    </section>
  );
}

export default CounterSection;