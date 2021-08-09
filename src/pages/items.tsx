import { useEffect, useState } from 'react';

const Items = () => {  // Pass ID + region in with props later, for now useState for test
    const [data, setData] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(//Use dispatch + reducer later, fetch for now
        () => {
            //
        },
        []
    );

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>ERROR</p>;
    }

    return (
        <div>
            <h2>Items Page</h2>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
}

export default Items;