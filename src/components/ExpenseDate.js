const ExpenseDate = (props) => {
    const date = props.date;
    const day = date.toLocaleString('en-us', {day: 'numeric'});
    const month = date.toLocaleString('en-us', {month: 'long'});
    const year = date.getFullYear();

    return (
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    );
}

export default ExpenseDate;