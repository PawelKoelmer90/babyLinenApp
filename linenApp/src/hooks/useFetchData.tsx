export enum FetchLink {
  CATEGORIES = 'categories',
  ITEMS = 'items',
}

export const useFetchData = () => {
  const baseUrl = process.env.API_ROOT;

  const fetchData = async (urlLink: FetchLink) => {
    try {
      const response = await fetch(`${baseUrl}/${urlLink}`);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteItem = async (urlLink: FetchLink, id: number | undefined) => {
    try {
      await fetch(`${baseUrl}/${urlLink}/${id}`, { method: 'DELETE' });
    } catch (error) {
      console.error(error);
    }
  };

  const postItem = async (urlLink: FetchLink, item: any) => {
    try {
      await fetch(`${baseUrl}/${urlLink}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...item }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return { fetchData, deleteItem, postItem };
};
