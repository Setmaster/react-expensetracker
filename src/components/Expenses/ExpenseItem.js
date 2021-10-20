import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

    const title = props.data.title;
    const amount = props.data.amount;
    const clickHandler = () => {
        console.log("Clicked");
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