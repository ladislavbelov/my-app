import React from 'react';

const News = (props) => {
    return (
        <div>
            <h2>News:</h2>
            {
                props.news.news.map(n =>
                <div key={n.newsID}>
                    <p>{n.newsText}</p>
                    <p>{n.newsLikes} likes</p>
                </div>
                )
            }
        </div>
    );
};

export default News;