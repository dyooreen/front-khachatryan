import { useRef } from "react"

const useFocus = () => {
    const htmlElRef = useRef<HTMLInputElement>(null)
    const setFocus = () => { htmlElRef.current?.focus() }

    return [htmlElRef, setFocus]
}
export default useFocus