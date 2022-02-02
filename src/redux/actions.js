export function addPosts(netPosts) {
    return {
        type: 'ADD_POSTS',
        payload: {
            newPosts: netPosts
        }
    }
}

export function fetchPosts() {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data=> {
            dispatch(addPosts(data))
        })
    }
}