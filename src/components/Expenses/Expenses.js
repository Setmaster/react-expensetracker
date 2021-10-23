import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import {useState} from "react";

const Expenses = (props) => {
    const {items} = props;

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (event) => {
        setFilteredYear(event.target.value);
    };
    const getFilteredExpenses = () => {
        if (filteredYear === 'All') {
            return items;
        }
        return items.filter(
            expense =>
                expense.date.getFullYear().toString() === filteredYear
        );
    };



    return (
        <div>
            <Card className={"expenses"}>
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesList
                filteredExpenses={getFilteredExpenses()}
                />
            </Card>
        </div>
    );
}

export default Expenses;