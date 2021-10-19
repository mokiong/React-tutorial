import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetups() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://test-udemy-react-7eba4-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const meetupsArray = [];

                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key],
                    };

                    meetupsArray.push(meetup);
                }

                setIsLoading(false);
                setMeetups(meetupsArray);
            });
    }, []); // eslint-disable-line

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
}

export default AllMeetups;
