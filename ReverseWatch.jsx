import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CardRow from './CardRow';

const ReverseWatch = () => {
    const initialTime = {
        days: 3,
        hours: 21,
        minutes: 15,
        seconds: 13,
    };

    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let timer;

        if (isActive) {
            timer = setInterval(() => {
                setTimeLeft(prevTime => {
                    const totalSeconds = prevTime.days * 86400 + prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds;

                    if (totalSeconds <= 0) {
                        clearInterval(timer);
                        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
                    }

                    const newSeconds = totalSeconds - 1;
                    const newDays = Math.floor(newSeconds / 86400);
                    const newHours = Math.floor((newSeconds % 86400) / 3600);
                    const newMinutes = Math.floor((newSeconds % 3600) / 60);
                    const finalSeconds = newSeconds % 60;

                    return {
                        days: newDays,
                        hours: newHours,
                        minutes: newMinutes,
                        seconds: finalSeconds,
                    };
                });
            }, 1000); 
        }

        return () => clearInterval(timer); 
    }, [isActive]);

    return (
        <div className="container text-center mt-5" style={{ backgroundColor: '#f8e8e0', padding: '20px', borderRadius: '10px' }}>
            <div className="d-flex justify-content-center align-items-center">
                <h2 className="mb-0" style={{ fontWeight: 'bold' }}>Limited Time Deals</h2>
                <div className="d-flex align-items-center mx-4"> 
                    {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
                        <React.Fragment key={unit}>
                            <div className="mx-2 text-center">
                                <div className="p-3 border rounded" style={{ backgroundColor: '#fff', display: 'inline-block' }}>
                                    <span style={{ fontSize: '24px', color: 'red' }}>{timeLeft[unit]}{unit.charAt(0)}</span>
                                </div>
                            </div>
                            {index < 3 && <span className="mx-2" style={{ fontSize: '24px', color: 'red' }}>:</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <CardRow /> {}
        </div>
        
    );
};

export default ReverseWatch;
