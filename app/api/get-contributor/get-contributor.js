export const fetchContributor = ({ login }) =>
  new Promise((resolve, reject) => {
    fetch(
      `${process.env.NEXT_PUBLIC_STATIC_URL}/users/${login}`,
      process.env.GITHUB_TOKEN && {
        method: 'GET',
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      },
    )
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
