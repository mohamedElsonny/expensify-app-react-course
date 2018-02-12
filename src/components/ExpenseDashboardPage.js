import React from 'react';
import ExpenseList from './ExpenseList';

import ExpesneListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpesneListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
