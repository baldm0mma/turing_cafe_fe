const url = 'http://localhost:3001/api/v1/reservations';

export const getData = async () => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw Error('Not today, junior!!!');
  }
};

export const postData = async newRez => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newRez)
  };
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    throw Error('Can\'t post that shizz, sry!');
  }
};
