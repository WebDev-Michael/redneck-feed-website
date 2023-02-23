import React from "react";
import feedType from "../data/data.json"

function FeedCard (props) {

     props = { feedType };

    return (
        <div className="feedCard">
            {props.feedType.map(feed => (
                <h2>{feed.feedType}</h2>
            ))}
        </div>
    )
}

export default FeedCard;