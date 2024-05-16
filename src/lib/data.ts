type Expanse = {
    id: string;
    amount: number;
    description: string;
    date: string;
    category: string;
    note: string;
}
let expense : Expanse[] = [];

export const getExpenses = () => {
    return expense;
}

export const addExpense = (newExpense: Expanse) => {
    expense.push(newExpense);
}

export const deleteExpense = (id: string) => {
    expense = expense.filter(exp => exp.id !== id);
}

export const updateExpense = (id: string, updatedExpense: Expanse) => {
    expense = expense.map(exp => exp.id === id ? updatedExpense : exp);
}

export const getExpense = (id: string) => {
    return expense.find(exp => exp.id === id);
}

// sum of expenses amounts
export const getTotalExpenses = () => {
    return expense.reduce((acc, exp) => acc + exp.amount, 0);
}