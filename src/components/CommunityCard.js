import React from 'react';

function CommunityCard({ data }) {
    return (
        <div className="community-item">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <p className="name">{`${data.firstName} ${data.lastName}`}</p>
            <p className="designation">{data.position}</p>
        </div>
    );
}

export default CommunityCard;

