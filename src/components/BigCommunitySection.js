import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleVisibility } from '../redux/visibilitySlice';
import { fetchUsers } from '../redux/usersSlice';


function CommunitySection() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.data);
    const isLoading = useSelector((state) => state.users.isLoading);
    const error = useSelector((state) => state.users.error);
    const isContentVisible = useSelector((state) => state.visibility.isContentVisible);

    React.useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

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
                <button className="hide-section-btn" onClick={() => dispatch(toggleVisibility())}>
                    {isContentVisible ? "Hide section" : "Show section"}
                </button>
            </div>
            {isContentVisible && (
                <>
                    <p>We’re proud of our products, and we’re really excited <br/> when we get feedback from our users.</p>
                    <div className='community-grid'>
                        {users.map(member => (
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
