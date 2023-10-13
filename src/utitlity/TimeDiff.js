import React from 'react';
import moment from 'moment';

const TimeDifference = ({ date }) => {
    const now = moment();
    const pastDate = moment(date);

    const duration = moment.duration(now.diff(pastDate));
    const days = duration.asDays();
    const hours = duration.asHours();
    const minutes = duration.asMinutes();

    let formattedDiff = '';

    if (days >= 1) {
        formattedDiff = `${Math.floor(days)}d `;
    }

    if (hours >= 1) {
        formattedDiff = `${Math.floor(hours % 24)}h `;
    }

    if (minutes >= 1) {
        formattedDiff = `${Math.floor(minutes % 60)}m `;
    }

    return <span>{formattedDiff.trim()}</span>;
};

export default TimeDifference;