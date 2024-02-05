// import { dataPhone } from './dataPhone.js';
// let content = '';
// for (let i = 0; i < dataPhone.length; i++) {
//   content += `
//   <div class="col-3">
//   <div class="card h-100">
//     <img
//       src="./image/${dataPhone[i].img}"
//       class="card-img-top img-product"
//       alt="..."
//     />
//     <div class="card-body">
//       <h5 class="card-title">${dataPhone[i].name}</h5>
//       <p class="card-text">
//       ${dataPhone[i].desc}
//       </p>
//       <a href="#" class="btn btn-primary">Xem chi tiết</a>
//     </div>
//   </div>
// </div>
//   `;
// }

// document.getElementById('productList').innerHTML = content;
const renderProductList = (dataListPhone) => {
  let content = '';
  for (let i = 0; i < dataListPhone.length; i++) {
    content += `
  <div class="col-3">
  <div class="card h-100">
    <img
      src="${dataListPhone[i].img}"
      class="card-img-top img-product"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">${dataListPhone[i].name}</h5>
      <p class="card-text">
      ${dataListPhone[i].desc}
      </p>
      <a href="#" class="btn btn-primary">Xem chi tiết</a>
    </div>
  </div>
</div>
  `;
  }

  document.getElementById('productList').innerHTML = content;
};
axios({
  method: 'GET',
  url: 'https://62f8b754e0564480352bf3de.mockapi.io/product',
})
  .then((data) => {
    console.log(data.data);
    let dataListPhone = data.data;
    renderProductList(dataListPhone);
  })
  .catch((err) => {
    console.log('err', err);
  });
