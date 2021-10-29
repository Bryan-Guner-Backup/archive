import uuid from 'uuid/v1';

const TRACK_URL = 'https://analytics.callbell.eu';
const COOKIE_NAME = 'callbell_uid';
const COOKIE_REGEX = /(?:(?:^|.*;\s*)callbell_uid\s*\=\s*([^;]*).*$)|^.*$/;

class Tracking {
    params = {
        callbell_uid: this.userUUID,
        script_token: window.callbellIframeData.scriptToken,
        utm_source: `${window.parent.window.location.host}${
      window.parent.location.pathname
    }`
    };

    constructor(params) {
        this.params = { ...this.params,
            ...params
        };
        this.setUUIDCookie();
    }

    get userUUID() {
        return document.cookie.replace(COOKIE_REGEX, '$1');
    }

    get isCookieAlreadySet() {
        return this.userUUID !== '';
    }

    encodeParams(params) {
        return Object.keys(params)
            .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
            .join('&');
    }

    setUUIDCookie() {
        if (!this.isCookieAlreadySet) {
            this.setCookie(COOKIE_NAME, uuid());
            this.params.callbell_uid = this.userUUID;
        }
    }

    setCookie(name, value = '', days = 365) {
        let expires = '';

        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = '; expires=' + date.toUTCString();
        }

        document.cookie = `${name}=${value}${expires}; path=/`;
    }

    track(event = 'visit', params = {}) {
        // https://github.com/whatwg/fetch/pull/388
        fetch(
            `${[TRACK_URL, event].join('/')}?${this.encodeParams({
        ...this.params,
        ...params
      })}`, {
                method: 'GET',
                credentials: 'include',
                mode: 'no-cors',
                keepalive: true
            }
        ).catch(() => null);
    }
}

export default Tracking;