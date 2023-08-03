import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }

      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
});


export const putDb = async (content) => {
  const dB = await openDB('jate', 1);
  const tx = dB.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id:1, value: content });
  const result = await request;
  console.log('Data saved', result);
};


export const getDb = async () => {
  const dB = await openDB('jate', 1);
  const tx = dB.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('Data retrieved', result);
  return result;
};

initdb();