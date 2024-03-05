import { useEffect } from "react";

function useTitle(text: string) {
    useEffect(() => {
        document.title = text;
    }, []);
}
export default useTitle;