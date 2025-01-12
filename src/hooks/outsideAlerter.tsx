import React, { useRef, useEffect, ReactNode } from "react";

function useOutsideAlerter(ref: React.RefObject<HTMLElement>, callback: () => void) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

function OutsideAlerter(props: { children: ReactNode, callback: () => void }) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    useOutsideAlerter(wrapperRef, props.callback);

    return <div ref={wrapperRef}>{props.children}</div>;
}

export default OutsideAlerter;