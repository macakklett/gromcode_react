const baseURL = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

export const getWeather = async () => {
  try {
    const response = await fetch(baseURL);

    if (!response.ok) {
      throw new Error('Failed request');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
  }
};
