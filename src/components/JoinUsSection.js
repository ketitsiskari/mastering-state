// src/components/JoinUsSection.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSubscription } from '../redux/subscriptionSlice'; 
import joinImage from '../assets/images/join.WebP';
import sendEmail from "../utils/sendEmail";
import unsubscribe from "../utils/unsubscribe";
import { validate } from "../utils/emailValidator";

function JoinUsSection() {
    const [email, setEmail] = useState(localStorage.getItem('email') || "");
    const isSubscribed = useSelector(state => state.subscription.isSubscribed);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const handleSubscriptionToggle = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!isSubscribed && validate(email)) {
            try {
                await sendEmail(email);
                localStorage.setItem('subscribed', 'true');
                localStorage.setItem('email', email);
                dispatch(toggleSubscription());
                setEmail('');
            } catch (error) {
                console.error('Error sending email:', error);
            }
        } else if (isSubscribed) {
            try {
                await unsubscribe();
                localStorage.removeItem('subscribed');
                localStorage.removeItem('email');
                dispatch(toggleSubscription());
            } catch (error) {
                console.error('Error unsubscribing:', error);
            }
        } else {
            alert('Not a valid email');
        }
        setLoading(false);
    };

    const sectionStyle = {
        backgroundImage: `url(${joinImage})`
    };

    return (
        <section className="join-section" style={sectionStyle}>
            <div className="cover-content">
                <h1>Join Our Program</h1>
                <p>Sed do eiusmod tempor incididunt <br/> ut labore et dolore magna aliqua.</p>
                <form onSubmit={handleSubscriptionToggle}>
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
