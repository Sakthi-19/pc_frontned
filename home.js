const t1body = document.querySelector('#t1body');

const getdata1 = async () => {
  const endpoint = "http://127.0.0.1:8000/api/product/",
        response = await fetch(endpoint),
        data = await response.json();

 data.forEach(countryObj => {
    let {fields} = countryObj;
    tbody.innerHTML += `<tr>
        <td>${fields}</td>
    </tr>`;
 });

}
getdata1();

const t2body = document.querySelector('#t2body');

const getdata = async () => {
  const endpoint = "http://127.0.0.1:8000/api/category/",
        response = await fetch(endpoint),
        data = await response.json();

 data.forEach(countryObj => {
    let {fields} = countryObj;
    tbody.innerHTML += `<tr>
        <td>${fields}</td>
    </tr>`;
 });

}
getdata();