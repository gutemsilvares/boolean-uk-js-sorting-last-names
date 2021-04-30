const data = [
	{
		firstName: "Rico",
		lastName: "Jackson",
		department: "Designer",
		phone: "3984593454",
		_createdAt: 1573318917513,
		_id: "CD1234",
	},
	{
		firstName: "Adam",
		lastName: "Silver",
		department: "RH",
		phone: "43434343",
		_createdAt: 1573318688559,
		_id: "DC8978687",
	},
	{
		firstName: "River",
		lastName: "White",
		department: "IT",
		phone: "64545",
		_createdAt: 1573318681479,
		_id: "cd45678",
	},
];

const sortedList = (list, key = "_createdAt") => {
	return list.slice().sort(function (a, b) {
		if (a[key] < b[key]) {
			return -1;
		}
		if (a[key] > b[key]) {
			return 1;
		}
		return 0;
	});
};

const name = sortedList(data, "lastName");

console.log(name);
