import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import {useState} from "react";

const Expenses = (props) => {
    const {expenses} = props;

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (event) => {
        setFilteredYear(event.target.value);
        console.log(event.target.value);
    };

    return (
        <div>
            <ExpenseFilter
            onChangeFilter={filterChangeHandler}
            />
        <Card className={"expenses"}>
            <h2>Let's get started!</h2>
            <ExpenseItem data={expenses[0]}/>
            <ExpenseItem data={expenses[1]}/>
            <ExpenseItem data={expenses[2]}/>
            <ExpenseItem data={expenses[3]}/>
        </Card>
        </div>
    );

}

export default Expenses;