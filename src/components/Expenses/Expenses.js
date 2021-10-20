import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
    const expenses = props.expenses;
    return (
        <Card className={"expenses"}>
            <h2>Let's get started!</h2>
            <ExpenseItem data={expenses[0]}/>
            <ExpenseItem data={expenses[1]}/>
            <ExpenseItem data={expenses[2]}/>
            <ExpenseItem data={expenses[3]}/>
        </Card>
    );

}

export default Expenses;