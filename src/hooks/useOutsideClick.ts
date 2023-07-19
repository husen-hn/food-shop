import React, { useCallback, useEffect } from 'react'

export function useOutsideClick(
    ref: React.RefObject<Element>,
    onClickOut: () => void
) {
    const handleOutSideClick = useCallback(() => {
        onClickOut()
    }, [onClickOut])

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (
                ref.current &&
                !ref.current.contains(event.target as Node) &&
                event.target !== ref.current
            ) {
                handleOutSideClick()
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
