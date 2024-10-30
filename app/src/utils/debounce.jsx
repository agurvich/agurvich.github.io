import React, { useRef, useCallback } from 'react';

function useDebouncedCallback(callback, delay) {
    const argsRef = useRef();
    const timeout = useRef();

    const debouncedCallback = useCallback((...args) => {

        // update the arguments that will eventually get passed
        argsRef.current = args;

        // launch a new timer
        if (!timeout.current){
            timeout.current = setTimeout(() => {
                // execute the function
                if (argsRef.current) callback(...argsRef.current);

                // clear this timer
                timeout.current = undefined;
            }, delay);
        }
        
    }, [callback, delay]); // Recreate the debouncedCallback if delay changes

    return debouncedCallback;
}


export default useDebouncedCallback;