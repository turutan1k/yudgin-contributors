export const fetchContributor = ({ login }) =>
  new Promise((resolve, reject) => {
    fetch(
      `${process.env.NEXT_PUBLIC_STATIC_URL}/users/${login}`,
      process.env.NEXT_PUBLIC_GITHUB_TOKEN && {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
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
