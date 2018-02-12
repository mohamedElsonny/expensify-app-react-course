import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  return (
    <div>
      <h2>
        Viewing {expensesCount} {`${expensesCount !== 1 ? 'expenses' : 'expense'}`}{' '}
        totalling {numeral(expensesTotal).format('$0,0.00')}
      </h2>
    </div>
  );
};

const mapStateToProps = state => {
  const expenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    expensesCount: expenses.length,
    expensesTotal: expensesTotal(expenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
