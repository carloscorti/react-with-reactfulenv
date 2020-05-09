import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from 'components/App';

import utils from '../services/utils'

export async function serverRenderer() {
  const initialData = {
    appName: 'Stars Match',
    starInit: utils.random(1,9)
  };

  const pageData = {
    title: `${initialData.appName}`,
  };

  return Promise.resolve({
    initialData,
    initialMarkup: ReactDOMServer.renderToString(
      <App initialData={initialData} />
    ),
    pageData,
  });
}
