const setHTML = (id, data) => {
  const user = document.getElementById(`user-${id}`);
  user.innerHTML = `
    <h3>Latin title: ${data.title}</h3>
    <p>User ID: ${data.id}</p>
    <p>Completed Status: ${data.completed}</p>
  `;
};

const getUserByXHR = (id) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://jsonplaceholder.typicode.com/todos/${id}`);
  // xhr.responseType = 'json'; // THIS DOES NOT WORK IN IE11 EVEN WITH POLYFILLS!
  xhr.send();
  xhr.onload = () => {
    setHTML(id, JSON.parse(xhr.response));
  };
};

const getUserByFetch = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => response.json())
    .then((json) => {
      setHTML(id, json);
    });
};

const getUserByFetchAsyncAwait = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const json = await response.json();
  setHTML(id, json);
};

getUserByXHR(1);
getUserByFetch(2);
getUserByFetchAsyncAwait(3);
