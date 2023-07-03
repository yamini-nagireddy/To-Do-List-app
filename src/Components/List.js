import React from 'react';
import ListItem from './ListItem.js';

function List(props) {
    return (
        <div className='list'>
            {props.data.map( item => {
                return (
                    <div className='list-item'>
                        <ListItem item={item} toggle={props.toggle}/>
                    </div>
                );
            })}
            <button className='update-list' onClick={props.filter}>Update List</button>
        </div>
    );
}

export default List;