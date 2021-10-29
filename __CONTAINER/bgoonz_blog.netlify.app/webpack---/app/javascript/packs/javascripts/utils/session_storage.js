const STORAGE_PREFIX = 'callbell';

class SessionStorage {
    get(value) {
        return sessionStorage.getItem(`${STORAGE_PREFIX}_${encodeURI(value)}`);
    }

    set(key, value) {
        sessionStorage.setItem(`${STORAGE_PREFIX}_${encodeURI(key)}`, value);
    }
}

export default SessionStorage;