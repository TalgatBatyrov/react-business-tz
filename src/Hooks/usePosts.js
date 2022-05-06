import { useMemo } from "react";

const useSortedPosts = (posts, sort) => {
    const sorteredPosts = useMemo(() => {
        if (sort === 'id') {
            return [...posts].sort((a, b) => b[sort] - a[sort])
        }
        return [...posts].sort((a, b) => a[sort]?.localeCompare(b[sort]))
    }, [sort, posts]);

    return sorteredPosts
}

export const useSearchPosts = (posts, sort, query) => {

    const sorteredPosts = useSortedPosts(posts, sort)

    const sortAndSearchPosts = useMemo(() => {
        return sorteredPosts.filter(p => p.title?.includes(query))
    }, [query, sorteredPosts]);

    return sortAndSearchPosts
}