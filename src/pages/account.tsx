import { useEffect, useState } from 'react';

const Account = () => {  // Pass ID + region in with props later, for now useState for test
    const [data, setData] = useState('');
    const [region, setRegion] = useState('na1');
    const [id, setId] = useState('123');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect( // Currently creating backend, this is for items idk why
        () => {
            fetch(`https://ddragon.leagueoflegends.com/cdn/11.15.1/data/en_US/item.json`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));
            })
            .catch(error => {
                setError(error);
                console.error(`Error fetching data: ${error}`);
            })
            .finally(() => {
                setLoading(false);
            });
        },
        [id, region]
    );

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>ERROR</p>;
    }

    return (
        <div>
            <h2>Account Page</h2>
            <p>{data}</p>
        </div>
    );
}

export default Account;