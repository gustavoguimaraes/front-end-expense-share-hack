export default () => {
  let token = null;

  try {
    const storage = JSON.parse(localStorage.dashboard);

    token = storage.token.data.token;
  } finally {
    return token;
  }
};
