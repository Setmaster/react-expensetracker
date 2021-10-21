import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from "react";

const ExpenseItem = (props) => {
    // const title = ;
    const amount = props.data.amount;
    const [title, setTitle] = useState(props.data.title);
    console.log('ExpenseItem evaluated by React')

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    }


    return (
        <Card className={"expense-item"}>
            <ExpenseDate
            date={props.data.date}
            />
            <div className={"expense-item__description"}>
                <h2>{title}</h2>
                <div className={"expense-item__price"}>${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}
export default ExpenseItem;