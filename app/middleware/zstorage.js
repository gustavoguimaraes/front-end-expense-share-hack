import * as storage from 'redux-storage';
import storageEngine from '../lib/storage-engine';

export default storage.createMiddleware(storageEngine, ['@@router/LOCATION_CHANGE']);
