import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {

    const title = props.data.title;
    const amount = props.data.amount;

    return (
        <div className={"expense-item"}>
            <ExpenseDate
            date={props.data.date}
            />

            <div className={"expense-item__description"}>
                <h2>{title}</h2>
                <div className={"expense-item__price"}>${amount}</div>
            </div>
        </div>
    )
}
export default ExpenseItem;