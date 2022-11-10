"use strict";

const button = document.getElementById("get-users");

button.addEventListener(
  "click",
  () => {
    fetch("https://reqres.in/api/users?per_page=12", { method: "GET" })
      .then((response) => response.json())
      .then((result) => {
        const usersData = result.data;
        let arrayKeys = [];
        let arrayKeysFilter = [];

        console.log('-----------');
        console.log('Пункт №2:');
        console.log('-----------');

        console.log("Фамилии всех пользователей в цикле");
        usersData.map((element) => {
          console.log(" " + element.last_name);
        });

        console.log('-----------');
        console.log('Пункт №3:');
        console.log('-----------');

        console.log(
          "Данные всех пользователей, фамилия которых начинается на F"
        );
        usersData.forEach((element) => {
          if (element.last_name[0] === "F") {
            console.log(" " + element.last_name + ":");
            for (const item in element) {
              console.log(" ".repeat(4) + item + ":" + element[item] + ",");
            }
          }
        });

        console.log('-----------');
        console.log('Пункт №4:');
        console.log('-----------');

        console.log("Имена и фамилии всех пользователей");
        const reduceUser = usersData.reduce(
          (accumulator, item, index, array) => {
            let resString = `${item.first_name} ${item.last_name}`;
            if (index !== array.length - 1) {
              resString += ",";
            } else {
              resString += ".";
            }
            accumulator += resString;
            return accumulator;
          },
          ""
        );
        console.log(
          `Наша база содержит данные следующих пользователей: ${reduceUser}`
        );

        console.log('-----------');
        console.log('Пункт №5:');
        console.log('-----------');
        
        console.log("Названия всех ключей в объекте пользователя");
        arrayKeys = usersData.reduce(
          (container, obj) => [...container, ...Object.keys(obj)],
          []
        );
        arrayKeysFilter = [...new Set(arrayKeys)];
        console.log(arrayKeysFilter.join(","));
      })

      .catch((e) => {
        console.log(e);
      });
  },
  { once: true }
);
