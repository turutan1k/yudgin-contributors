export const fetchContributor = ({ token, login }) =>
  new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${login}`, {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch contributors');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
