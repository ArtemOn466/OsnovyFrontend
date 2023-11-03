function fetchAndDisplayUserList() {
    const apiUrl = "https://randomuser.me/api/?results=5"; // Отримати дані про 5 користувачів

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Помилка HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            const userList = data.results;

            const userContainer = document.getElementById("user-list");
            userContainer.innerHTML = ""; // Очистити контейнер перед оновленням

            userList.forEach((user, index) => {
                const userAvatar = user.picture.large;
                const userCity = user.location.city;
                const userCountry = user.location.country;
                const userPostcode = user.location.postcode;
                const userEmail = user.email;

                const userDiv = document.createElement("div");
                userDiv.innerHTML = `
              <p>Користувач ${index + 1}:</p>
              <p>Фото: <img src="${userAvatar}" alt="Аватар"></p>
              <p>Місто: ${userCity}</p>
              <p>Країна: ${userCountry}</p>
              <p>Поштовий індекс: ${userPostcode}</p>
              <p>Email: ${userEmail}</p>
            `;

                userContainer.appendChild(userDiv);
            });
        })
        .catch((error) => {
            console.error("Помилка:", error);
        });
}

// Отримуємо посилання на кнопку
const fetchDataButton = document.getElementById("fetch-data-button");

// Додаємо обробник подій для кнопки
fetchDataButton.addEventListener("click", fetchAndDisplayUserList);