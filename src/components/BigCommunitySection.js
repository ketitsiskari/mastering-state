import React, { useState, useEffect } from 'react';

function CommunitySection() {
    const [communityMembers, setCommunityMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isContentVisible, setIsContentVisible] = useState(true); // to manage content visibility

    useEffect(() => {
        fetch('http://localhost:3000/community')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch community members.');
                }
                return response.json();
            })
            .then(data => {
                setCommunityMembers(data);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    }, []);

    const toggleContentVisibility = () => {
        setIsContentVisible(prevState => !prevState);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='community-section'>
            <div className="section-header">
                <h1 className='community-title'>Big community of <br/>  people like you</h1>
                <button className="hide-section-btn" onClick={toggleContentVisibility}>
                    {isContentVisible ? "Hide section" : "Show section"}
                </button>
            </div>
            {isContentVisible && (
                <>
                    <p>We’re proud of our products, and we’re really excited <br/> when we get feedback from our users.</p>
                    <div className='community-grid'>
                        {communityMembers.map(member => (
                            <div key={member.id} className="community-item">
                                <img src={member.avatar} alt={`${member.firstName} ${member.lastName}`} />
                                <h2 className="name">{member.firstName} {member.lastName}</h2>
                                <p className="designation">{member.position}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

function CombinedComponent() {
    return (
        <div>
            <CommunitySection />
        </div>
    );
}

export default CombinedComponent;




