const apiURL = "http://localhost:3001/api";

const get = (url, params, token) => {
  url = new URL(`${apiURL}${url}`);
  if (params)
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(async (response) => {
      if (response.status === 401) {
        return response;
      }
      response.payload = await response.json();
      return response;
    })
    .catch((err) => err);
};

const post = (url, data, header, token) => {
  console.log(apiURL);
  let dataBody = JSON.stringify(data);
  return fetch(`${apiURL}${url}`, {
    method: "POST",
    headers: header
      ? header
      : {
          Accept: "application/json",
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
    body: dataBody,
    mode: "cors",
  })
    .then(async (response) => {
      if (response.status === 401) {
        return response;
      }
      response.payload = await response.json();
      return response;
    })
    .catch((err) => err);
};

export { get, post };
