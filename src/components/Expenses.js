import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
    const expenses = props.expenses;
    return (
        <div className={"expenses"}>
            <h2>Let's get started!</h2>
            <ExpenseItem data={expenses[0]}/>
            <ExpenseItem data={expenses[1]}/>
            <ExpenseItem data={expenses[2]}/>
            <ExpenseItem data={expenses[3]}/>
        </div>
    );

}

export default Expenses;