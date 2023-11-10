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
  function getOrder(fio, price, quantity) {
    console.log(
      `Заказ покупателя ${this.fio} составил ${this.price * this.quantity}`
    );
  }
  orders.forEach((order) => getOrder.call(order));
}

function task3() {
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
  function getOrder(discount) {
    console.log(
      `Заказ покупателя ${this.fio} составил ${
        this.price * this.quantity
      }, скидка составила ${discount}%`
    );
  }
  discount = prompt(`Введите размер скидки в %`);
  orders.forEach((order) => getOrder.call(order, discount));
}

function task4() {
  function Menu(...navList) {
    this.navList = navList;
    this.wrapperA = function (anchor) {
      return this.navList.map((elem, index) => `<a href='${elem}'>${anchor[index]}</a>`);
    };
  }
  let mainMenu = new Menu("home.html", "services.html", "price.html", "about.html");
  let mainMenuText = ["Главная", "Услуги", "Цены", "О нас"];
  for (elem of mainMenu.navList) console.log(elem);
  console.log(mainMenu.wrapperA(mainMenuText));
  let footerMenu = new Menu("newPage.html", "checkPage.html", "seoPage.html");
  let footerMenuText = [
    "Новая страница",
    "Страница проверки",
    "Страница оптимизации"
  ];
  for (elem of footerMenu.navList) console.log(elem);
  console.log(footerMenu.wrapperA(footerMenuText));
}
