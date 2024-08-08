import { useState,useEffect,useRef } from 'react';

function useCountDown(duration,onComplete){
    const [timeLeft,setTimeLeft] = useState(duration);
    const startTimeRef = useRef(Data.now());
    const requestRef = useRef();

    useEffect(() => {
        const updateCountDown = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTimeRef.current;
            const remaining = Math.max(duration - elapsed,0);

            setTimeLeft(remaining);

            if(remaining <= 0){
                if(onComplete) onComplete()
            } else {
                requestRef.current = requestAnimationFrame(updateCountDown);
            }
        };

        requestRef.current = requestAnimationFrame(updateCountDown);

        return () => {
            if(requestRef.current){
                cancelAnimationFrame(requestRef.current)
            }
        }
    },[duration,onComplete])

    return {
        timeLeft
    }
}

export default useCountDown;