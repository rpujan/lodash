const _ = require('lodash');
const users = require('../lodash-demo/data/users2.json');

// filter
// const user = _.filter(users, (u) => u.gender === 'male');
// console.log(user);

// orderBy
// const sortByAge = _.orderBy(users, ['age'], ['asc']);
// console.log(sortByAge);

let truncatedUserDetail = [];

for(let i = 0; i < users.length; i++)
	truncatedUserDetail.push({name: users[i].name, age: users[i].age, eyeColor: users[i].eyeColor});

console.log(truncatedUserDetail);
