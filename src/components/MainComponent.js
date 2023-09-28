import React, { useState } from "react";
import JoinUsSection from "./JoinUsSection";
import CommunitySection from './BigCommunitySection';
import { validate } from "../utils/emailValidator";
import sendEmail from "../utils/sendEmail";
import unsubscribe from "../utils/unsubscribe";
import './Style.css';

function MainComponent() {
    const [email, setEmail] = useState(localStorage.getItem('email') || "");
    const [isSubscribed, setIsSubscribed] = useState(localStorage.getItem('subscribed') === 'true');
    const [loading, setLoading] = useState(false);
    const handleButtonClick = async (event) => {
        event.preventDefault();
        setLoading(true);
        if (!isSubscribed && validate(email)) {
            try {
                await sendEmail(email);
                localStorage.setItem('subscribed', 'true');
                localStorage.setItem('email', email);
                setIsSubscribed(true);
                setEmail('');
            } catch (error) {
                console.error('Error sending email:', error);
            }
        } else if (isSubscribed) {
            try {
                await unsubscribe();
                localStorage.removeItem('subscribed');
                localStorage.removeItem('email');
                setIsSubscribed(false);
            } catch (error) {
                console.error('Error unsubscribing:', error);
            }
        } else {
            alert('Not valid email');
        }
        setLoading(false);
    };

    return (
        <div>
            <CommunitySection />
            <JoinUsSection 
                email={email}
                setEmail={setEmail}
                isSubscribed={isSubscribed}
                onButtonClick={handleButtonClick}
                loading={loading}
            />
        </div>
    );
}

export default MainComponent;


