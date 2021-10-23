import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from "react";

const ExpenseItem = (props) => {

    const {amount, title} = props.data;

    return (
        <li>
        <Card className={"expense-item"}>
            <ExpenseDate
            date={props.data.date}
            />
            <div className={"expense-item__description"}>
                <h2>{title}</h2>
                <div className={"expense-item__price"}>${amount}</div>
            </div>
        </Card>
        </li>
    )
}
export default ExpenseItem;