import {useEffect, useState} from "preact/hooks";

export const useCollection = (collection, query) => {
    const [state, setState] = useState(undefined);
    useEffect(() => {
        collection.watch(query, setState);
    }, []);
    useEffect(() => {
        console.log("collection changed")
    }, [state])
    return state
}