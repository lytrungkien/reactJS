import React, { Component } from 'react';
import toDoList from './ToDoList.css';
import checkComplete from './image/correct.svg';
import Delete from './image/close.svg';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item, onClick, onClickDelete } = this.props;
        let classTask = "task";
        if (item.isComplete) {
            classTask += " ToDoList-complete";
        }
        return (
            <div className="ToDoList">
                <img
                    src={checkComplete}
                    onClick={onClick}
                    className="complete"
                    title="Completed"
                />
                <p className={classTask}>
                    {item.title}
                </p>
                <img
                    src={Delete}
                    onClick={onClickDelete}
                    className="delete"
                    title="Delete"
                />
            </div >
        )
    }
}

export default ToDoList;