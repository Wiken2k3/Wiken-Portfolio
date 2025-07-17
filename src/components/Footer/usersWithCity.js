const users = [
    { id: 1, name: 'Linh', cityId: 2 },
    { id: 2, name: 'Tuan', cityId: 1 }
];
const cities = [
    { id: 1, name: 'HCMC' },
    { id: 2, name: 'Ha Noi' }
];

// Khởi tạo map 
function usersWithCity() {
    const cityMap ={};
    for (const city of cities) {
        cityMap[city.id] = city.name;
    }
    return users.map(user => ({
        userId: user.id,
        userName: user.name,
        userCityName: cityMap[user.cityId]
    }));
}
console.log(usersWithCity());
