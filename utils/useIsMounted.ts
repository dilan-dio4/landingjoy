import React, { useEffect, useRef } from 'react';

export const useIsMounted = () => {
    const ref = useRef<boolean>();
    useEffect(() => {
        ref.current = true;
    }, []);
    return ref.current;
};

export default useIsMounted;
