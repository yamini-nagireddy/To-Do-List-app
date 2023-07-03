import React from 'react';

function ListItem(props) {
    const itemClass = props.item.isComplete ? 'done': 'todo';
    const handleClick = () => {
        props.toggle(props.item.id);
    }
    return(
        <div className={itemClass} onClick={handleClick}>
            {props.item.content}
        </div>
    );
}

export default ListItem;