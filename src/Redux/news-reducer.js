let initialState = {
    news: [
        {
            newsID: 1,
            newsText: 'President Putin Died',
            newsLikes: 1538468465
        },
        {
            newsID: 2,
            newsText: 'Russia withdraw the troops',
            newsLikes: 3546843555
        },
        {
            newsID: 3,
            newsText: 'New elections will take place in October',
            newsLikes: 75353
        },
    ]
}

const newsReducer = (state = initialState) => {
    return state;
}

export default newsReducer;