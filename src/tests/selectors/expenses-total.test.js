import moment from 'moment';
import selectExpensesTotal from '../../selectors/expenses-total';

const expenses = [
  {
    id: '1',
    description: 'Gum',
    amount: 195,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Rent',
    amount: 109500,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf()
  },
  {
    id: '3',
    description: 'Credit Card',
    amount: 4500,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
  }
];

test('should return the sum of amounts', () => {
  const total = selectExpensesTotal(expenses);
  expect(total).toBe(114195);
});

test('should return the sum of amounts', () => {
  const total = selectExpensesTotal([expenses[0]]);
  expect(total).toBe(195);
});

test('should return 0 of empty array', () => {
  const total = selectExpensesTotal([]);
  expect(total).toBe(0);
});
