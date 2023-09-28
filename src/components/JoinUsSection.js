import React from 'react';
import joinImage from '../assets/images/join.WebP';

function JoinUsSection({ email, setEmail, isSubscribed, onButtonClick, loading }) {
    const sectionStyle = {
        backgroundImage: `url(${joinImage})`
    };

    return (
        <section className="join-section" style={sectionStyle}>
            <div className="cover-content">
                <h1>Join Our Program</h1>
                <p>Sed do eiusmod tempor incididunt <br/> ut labore et dolore magna aliqua.</p>
                <form onSubmit={onButtonClick}>
                    {!isSubscribed && (
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="email-input" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    )}
                    <button className="subscribe-button" disabled={loading} style={loading ? {opacity: 0.5} : {}}>
                        {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default JoinUsSection;




