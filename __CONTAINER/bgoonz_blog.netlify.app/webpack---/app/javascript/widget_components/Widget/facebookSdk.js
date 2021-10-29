import formatBcp47 from 'format-bcp-47';
import {
    isMobile,
    isAndroid
} from 'react-device-detect';
import navigatorLanguages from 'navigator-languages';

function Deferred() {
    const self = this;

    this.promise = new Promise(function(resolve, reject) {
        self.reject = reject;
        self.resolve = resolve;
    });
}

export function loadFacebookSdk() {
    window.fbLoaded = new Deferred();

    if (isMobile || isAndroid) return window.fbLoaded.reject();

    window.fbAsyncInit = function() {
        FB.init({
            xfbml: true,
            version: 'v8.0'
        });

        window.fbLoaded.resolve();
    };

    const languages = navigatorLanguages();
    let language = 'en_US';

    if (languages.length > 0) {
        language = formatBcp47(languages[0]);
    }

    (function(d, s, id) {
        var js,
            fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = `https://connect.facebook.net/${language.replace(
      '-',
      '_'
    )}/sdk/xfbml.customerchat.js`;
        fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
}