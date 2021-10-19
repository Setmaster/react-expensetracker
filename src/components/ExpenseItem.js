import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const date = props.data.date;
    const day = date.toLocaleString('en-us', {day: 'numeric'});
    const month = date.toLocaleString('en-us', {month: 'long'});
    const year = date.getFullYear();
    const title = props.data.title;
    const amount = props.data.amount;

    return (
        <div className={"expense-item"}>
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>

            <div className={"expense-item__description"}>
                <h2>{title}</h2>
                <div className={"expense-item__price"}>${amount}</div>
            </div>
        </div>
    )
}
export default ExpenseItem;