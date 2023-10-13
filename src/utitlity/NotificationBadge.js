import React from 'react';

const NotificationBadge = ({ count, classes }) => {
    return (
        <div className={`flex items-center justify-center w-5 h-5 rounded-full   text-xs font-bold ${classes}`}>
            {count}
        </div>
    );
};

export default NotificationBadge;