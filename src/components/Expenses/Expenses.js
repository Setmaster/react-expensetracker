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

    let expensesContent = (<p>No expenses found</p>);

    if(getFilteredExpenses().length > 0){
        expensesContent = (getFilteredExpenses().map(expense => {
            return (
                <ExpenseItem
                    key={expense.id}
                    data={expense}
                />
            )
        }));
    }

    return (
        <div>

            <Card className={"expenses"}>
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {expensesContent}
            </Card>
        </div>
    );

}

export default Expenses;