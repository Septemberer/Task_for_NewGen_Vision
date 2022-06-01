// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];
let requiredRange4 = [500, null];

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

function choose(courses, range) {
    let map = new Map();
    let keys_set = new Set();
    let keys = [];
    let answ = [];
    for (let i = 0; i < courses.length; i++) {
        let course = courses[i];
        let price = course.prices;
        let range_left, range_right, price_left, price_right;
        range_left = range[0]; // 100
        range_right = range[1]; // 350
        price_left = price[0]; // 0
        price_right = price[1]; // 100
        if (range_left == null) range_left = 0;
        if (range_right == null) range_right = Number.MAX_SAFE_INTEGER;
        if (price_left == null) price_left = 0;
        if (price_right == null) price_right = Number.MAX_SAFE_INTEGER;
        if (!(range_right <= price_left) && !(price_right <= range_left)){
            keys_set.add(price_left);
            let courses_ = [];
            if (map.get(price_left) != undefined){
                for (let i = 0; i < map.get(price_left).length; i++) {
                    courses_.push(map.get(price_left)[i])
                }
            }
            courses_.push(course)
            map.set(price_left, courses_)
        }
    }
    for (let key of keys_set) keys.push(key);
    
    keys.sort(compareNumeric);
    for (let i = 0; i < keys.length; i++) for (let course of map.get(keys[i])) answ.push(course);
    return answ;
}

alert("Test of first range");
alert(choose(courses, requiredRange1));
/* result of work
[ { name: 'Courses in England', prices: [ 0, 100 ] },
  { name: 'Courses in Russia', prices: [ null, 400 ] },
  { name: 'Courses in France', prices: [ null, null ] },
  { name: 'Courses in China', prices: [ 50, 250 ] },
  { name: 'Courses in Kazakhstan', prices: [ 56, 324 ] },
  { name: 'Courses in Italy', prices: [ 100, 200 ] } ]
*/
alert("Test of second range");
alert(choose(courses, requiredRange2));
/* result of work
[ { name: 'Courses in Russia', prices: [ null, 400 ] },
  { name: 'Courses in France', prices: [ null, null ] },
  { name: 'Courses in China', prices: [ 50, 250 ] },
  { name: 'Courses in Kazakhstan', prices: [ 56, 324 ] },
  { name: 'Courses in Italy', prices: [ 100, 200 ] },
  { name: 'Courses in USA', prices: [ 200, null ] } ]
*/
alert("Test of third range");
alert(choose(courses, requiredRange3));
/* result of work
[ { name: 'Courses in Russia', prices: [ null, 400 ] },
  { name: 'Courses in France', prices: [ null, null ] },
  { name: 'Courses in China', prices: [ 50, 250 ] },
  { name: 'Courses in Kazakhstan', prices: [ 56, 324 ] },
  { name: 'Courses in USA', prices: [ 200, null ] },
  { name: 'Courses in Germany', prices: [ 500, null ] } ]
*/
alert("Test of 4th range");
alert(choose(courses, requiredRange4));
/* result of work
[ { name: 'Courses in France', prices: [ null, null ] },
  { name: 'Courses in USA', prices: [ 200, null ] },
  { name: 'Courses in Germany', prices: [ 500, null ] } ]
*/





