export const fetchContributors = () =>
  new Promise((resolve, reject) => {
    fetch(
      'https://api.github.com/repos/microsoft/generative-ai-for-beginners/contributors',
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
