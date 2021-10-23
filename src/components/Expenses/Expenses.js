import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import {useState} from "react";

const Expenses = (props) => {
    const {items} = props;

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (event) => {
        setFilteredYear(event.target.value);
        console.log(event.target.value);
    };

    return (
        <div>

        <Card className={"expenses"}>
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {items.map(expense => {
                return (
                    <ExpenseItem data={expense}/>
                )
            })}
        </Card>
        </div>
    );

}

export default Expenses;