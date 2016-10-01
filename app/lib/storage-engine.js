import filter from 'redux-storage-decorator-filter';
import createEngine from 'redux-storage-engine-localstorage';

const engine = filter(createEngine('expenseShareHack'), ['token']);

export default engine;
