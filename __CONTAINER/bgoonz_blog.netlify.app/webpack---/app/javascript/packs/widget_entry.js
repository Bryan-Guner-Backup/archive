import React from 'react';
import ReactDOM from 'react-dom';

import Widget from '../widget_components/Widget';

ReactDOM.render( <
    Widget { ...window.callbellIframeData.data
    }
    />,
    document.getElementById('widget-root')
);