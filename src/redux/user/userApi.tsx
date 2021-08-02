export interface userProps {
  page: number;
}

const getArticlesFromApi = async () => {
  try {
    let response = await fetch('https://reqres.in/api/users?page=1');
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const getUsersApi = () => {
  return getArticlesFromApi();
};

// export const getUsersApi = () => {
//   // let page = route.params._id;
//   // fetch(`${baseUrl}/update`, {
//   return fetch('https://reqres.in/api/users?page=2', {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       page,
//       per_page,
//       total,
//       total_pages,
//       data,
//     }),
//   });
// };
