import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    const {filteredExpenses} = props;

    if (filteredExpenses.length === 0) {
        return (
            <h2 className={"expenses-list__fallback"}>
                No expenses found
            </h2>
        )
    }
    return (
        <ul className={"expenses-list"}>
            {
                (filteredExpenses.map(expense => {
                    return (
                        <ExpenseItem
                            key={expense.id}
                            data={expense}
                        />
                    )
                }))
            }
        </ul>
    );
};

export default ExpensesList;