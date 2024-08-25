const baseURL = 'https://api.github.com/users';

export const getUser = async userId => {
  try {
    const response = await fetch(`${baseURL}/${userId}`);

    if (!response.ok) {
      throw new Error('Failed to getting user');
    }

    return await response.json();
  } catch (error) {
    console.error('Error deleting event:', error);
  }
};
