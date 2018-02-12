import React from 'react';
import ExpenseList from './ExpenseList';

import ExpesneListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpesneListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;