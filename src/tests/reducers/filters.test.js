import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };

  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'hay' });
  expect(state.text).toBe('hay');
});

test('should set startDate filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate: moment().startOf('day')
  });
  expect(state.startDate).toEqual(moment().startOf('day'));
});

test('should set endDate filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate: moment().endOf('day')
  });
  expect(state.endDate).toEqual(moment().endOf('day'));
});
