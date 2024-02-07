const renderContent = (dataPhone) => {
  let content = '';
  for (let i = 0; i < dataPhone.length; i++) {
    content += `
  <tr>
            <th scope="row">${dataPhone[i].id}</th>
            <td>${dataPhone[i].name}</td>
            <td>
                <img
                    src="../image/${dataPhone[i].img}"
                    alt="..."
                   width="100px"
                />
            </td>
            <td>
                ${dataPhone[i].price}
            </td>
            <td>
            <button class="btn btn-success">Sửa</button>
            <button class="btn btn-danger">Xoá</button>
            </td>
    </tr>
  `;
  }

  document.getElementById('t_body').innerHTML = content;
};

axios({
  method: 'GET',
  url: 'https://62f8b754e0564480352bf3de.mockapi.io/product',
})
  .then((data) => {
    console.log(data.data);
    let dataListPhone = data.data;
    renderContent(dataListPhone);
  })
  .catch((err) => {
    console.log('err', err);
  });
