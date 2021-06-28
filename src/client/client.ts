interface IClient {
  endpoint: string;
}

export async function client(props: IClient) {
  const { endpoint } = props;
  const apiKey = process.env.REACT_APP_TMDB_V4_KEY;
  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${apiKey}`,
  };

  const config = {
    method: 'GET',
    headers,
  };
  const endpointUrl = `${process.env.REACT_APP_TMDB_BASE_URL}${endpoint}`;
  let data;
  try {
    const response = await window.fetch(endpointUrl, config);
    data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error(response.statusText);
  } catch (err) {
    return Promise.reject(err.message ? err.message : data);
  }
}

client.get = function (endpoint: string) {
  return client({ endpoint });
};
