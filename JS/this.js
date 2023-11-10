function task1() {
  function getAdd(category) {
    return function (cod) {
      return `http://myshop.ru/${category}/${cod}`;
    };
  }
  let createPCLink = getAdd(`pc`);
  let createNotebooksLink = getAdd(`notebooks`);
  let createMonitorLink = getAdd(`monitor`);
  console.log(createPCLink(1001));
  console.log(createNotebooksLink(4004));
  console.log(createMonitorLink(345));
}

function task2() {
  let orders = [
    {
      fio: "Ivan",
      tovar: "phone",
      price: 10000,
      quantity: 2,
    },
    {
      fio: "Peter",
      tovar: "usb",
      price: 2300,
      quantity: 5,
    },
    {
      fio: "Mary",
      tovar: "connector",
      price: 100,
      quantity: 100,
    },
  ];
  function getOrder() {
    console.log(
      `Заказ покупателя ${this.fio} составил ${this.price * this.quantity}`
    );
  }
  orders.forEach((order) => getOrder.call(order));
}

function task3() {}

function task4() {}
