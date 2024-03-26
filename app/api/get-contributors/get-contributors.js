export const fetchContributors = () =>
  new Promise((resolve, reject) => {
    fetch(
      `${process.env.NEXT_PUBLIC_STATIC_URL}/repos/microsoft/generative-ai-for-beginners/contributors`,
      process.env.GITHUB_TOKEN && {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
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
