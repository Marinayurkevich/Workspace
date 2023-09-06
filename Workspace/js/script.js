const API_URL = "https://workspace-methed.vercel.app/";
const LOCATION_URL = "api/locations";

const getData = async (url, cbSuccess, cbError) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        cbSuccess(data)
    } catch (err) {
        cbError(err)
    }
}

const init = () => {
    const citySelect = document.querySelector('#city');
    const cityChoices = new Choices(citySelect, {
        // searchEnabled: false,
        itemSelectText: '',
    });
    getData(`${API_URL}${LOCATION_URL}`,
        (locationData) => {
            const locations = locationData.map((location) => ({
                value: location,
            }));
            cityChoices.setChoices(
                // [{ value: "Калининград" }, { value: "Шотландия" }],
                locations,
                "value",
                "label",
                false  // false - данные не заменяем
            );
        },
        (err) => {
            console.log(err)
        });
}

init();

// fetch(API_URL + LOCATION_URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })


