import { openDB } from 'idb';

const DATABASE_NAME = 'jate';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'jate';

let dbPromise = initializeDatabase();

const initializeDatabase = async () => {
    return openDB(DATABASE_NAME, DATABASE_VERSION, {
        upgrade: upgradeDatabase,
    });
};

function upgradeDatabase(db) {
    if (!db.objectStoreNames.contains(OBJECT_STORE_NAME)) {
        db.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id', autoIncrement: true });
        console.log(`${OBJECT_STORE_NAME} database created`);
    } else {
        console.log(`${OBJECT_STORE_NAME} database already exists`);
    }
}

export const putDb = async (content) => {
    const db = await dbPromise;
    const result = await saveDataToStore(db, content);

    console.log('Data saved', result);
};

async function saveDataToStore(db, content) {
    const transaction = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const store = transaction.objectStore(OBJECT_STORE_NAME);

    return store.put({ id: 1, value: content });
}

export const getDb = async () => {
    const db = await dbPromise;
    const result = await getAllDataFromStore(db);

    console.log('Data retrieved', result);
    return result;
};

async function getAllDataFromStore(db) {
    const transaction = db.transaction(OBJECT_STORE_NAME, 'readonly');
    const store = transaction.objectStore(OBJECT_STORE_NAME);

    return store.getAll();
}