import {useEffect, useState} from "preact/hooks";

export const useCollection = (collection, query, d = null) => {
    const [state, setState] = useState(d);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        console.log('re-rendered');
        console.log(collection)
        collection.watch(query, ({collection}) => setState(collection));
    }, []);
    useEffect(() => {
        console.log("collection changed")
    }, [state])
    return {data: state, loading, error}
}