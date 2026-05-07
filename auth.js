(function () {
    const AUTH_KEY = 'shifacare-auth-v2';

    function readStorage(storage) {
        try {
            const raw = storage.getItem(AUTH_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch (error) {
            console.error('Unable to read auth state', error);
            return null;
        }
    }

    function get() {
        return readStorage(localStorage) || readStorage(sessionStorage);
    }

    function set(payload) {
        const data = JSON.stringify({
            ...payload,
            authenticated: true,
            savedAt: new Date().toISOString()
        });

        const targetStorage = payload?.remember ? localStorage : sessionStorage;
        const otherStorage = payload?.remember ? sessionStorage : localStorage;

        otherStorage.removeItem(AUTH_KEY);
        targetStorage.setItem(AUTH_KEY, data);
    }

    function clear() {
        localStorage.removeItem(AUTH_KEY);
        sessionStorage.removeItem(AUTH_KEY);
    }

    function isAuthenticated() {
        return Boolean(get()?.authenticated);
    }

    window.ShifaCareAuth = {
        key: AUTH_KEY,
        get,
        set,
        clear,
        isAuthenticated
    };
})();
