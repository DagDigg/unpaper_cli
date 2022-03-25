import React, { useEffect } from 'react';

/**
 * Hook that exec a callback on click outside of the passed ref
 */
export default function useClickOutside(ref: React.MutableRefObject<any>, cb: (ref: React.MutableRefObject<any>) => void) {
    useEffect(() => {
        /**
         * Exec callback if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                cb(ref);
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, cb]);
}
