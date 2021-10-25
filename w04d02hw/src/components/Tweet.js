import React from 'react'


const Tweet = (props) => {
    console.log(props);
    
    const list=props.tweets.map((curr,i)=><li>{props.tweets[i]}</li>);
    let parentItem=<div>{list}</div>;
    
    return (
        <div>
        <h3> User name: {props.name} </h3>
        <img src={props.image}/>
        <h3>Tweets:</h3>
        <ul>
        {parentItem}
        </ul>
        <hr/>
        </div>
    )
}

export default Tweet  