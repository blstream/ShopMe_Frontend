const http = {
  get(url, params, options) {
    const parseMethod = options ? options.parse : 'json';
    let getUrl = url.replace('/api/', `${process.env.REACT_APP_API}/`);

    if (params) {
      const getParams = new URLSearchParams(Object.entries(params));
      getUrl = `${getUrl}?${getParams}`;
    }

    if (parseMethod === 'none') return fetch(getUrl);

    return fetch(getUrl)
      .then(response => response[parseMethod]());
  },

  post(url, body, options) {
    const parseMethod = options ? options.parse : 'json';
    const postUrl = url.replace('/api/', `${process.env.REACT_APP_API}/`);
    const myInit = {
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    };

    if (parseMethod === 'none') return fetch(postUrl, myInit);

    return fetch(postUrl, myInit)
      .then(response => response[parseMethod]());
  },
};

export default http;
