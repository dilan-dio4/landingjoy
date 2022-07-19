import React, { useEffect, useState } from 'react';

const useId = () => {
    const [id, setId] = useState<number>();
    useEffect(() => {
        setId(Math.round(Math.random() * 100) + 1);
    }, []);
    return id;
};

export default useId;