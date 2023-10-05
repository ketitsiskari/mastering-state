import React from "react";
import JoinUsSection from "./JoinUsSection";
import CommunitySection from './BigCommunitySection';
import './Style.css';

function MainComponent() {
    return (
        <div>
            <CommunitySection />
            <JoinUsSection />
        </div>
    );
}

export default MainComponent;
