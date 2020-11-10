const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '',
      s: searchTerm
    }
  });

  console.log(response.data);
};

let timeoutId;
const onInput = event => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    fetchData(event.target.value);
  }, 500)
};

input.addEventListener('input', onInput);

