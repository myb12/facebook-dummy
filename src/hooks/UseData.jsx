import { useEffect, useState } from 'react';

const UseData = () => {
    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('data/post.json')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setUser(data.user);
            })
    }, []);

    return [user, data];
};

export default UseData;