import React, { useEffect } from 'react'

export function useOutsideClick(
    ref: React.RefObject<Element>,
    onClickOut: () => void
) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClickOut()
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside)
        }
    })
}
