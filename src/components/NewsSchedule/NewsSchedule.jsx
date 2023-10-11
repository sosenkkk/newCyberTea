import React from 'react';
import './NewsSchedule.css';

const NewsSchedule = () => {
    return (
        <div id="NewsSchedule">
            <div id="news">
                <div className="NewsSchedule-header">
                    <h1>News</h1>
                </div>
                <div className="NewsSchedule-body">
                    <h3>Comming soon</h3>
                </div>
            </div>
            <div id="schedule">
                <div className="NewsSchedule-header">
                    <h1>Schedule</h1>
                </div>
                <div className="NewsSchedule-body">
                    <ul>
                        <li>Yet to be decided</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NewsSchedule;
