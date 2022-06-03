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
let requiredRange5 = [null, null];

function compareCourses(course1, course2) {
    let floor_price1 = course1.prices[0];
    let floor_price2 = course2.prices[0];
    let name1 = course1.name
    let name2 = course2.name
    
    if (floor_price1 > floor_price2) return 1;
    if (floor_price1 == floor_price2) {
        if (name1 > name2) return 1;
        if (name1 == name2) return 0;
        if (name1 < name2) return -1;
    }
    if (floor_price1 < floor_price2) return -1;
}

function filter(courses, range) {
    let answ = [];
    for (let i = 0; i < courses.length; i++) {
        let course = courses[i];
        
        let range_left = range[0];
        let range_right = range[1];
        let price_left = course.prices[0];
        let price_right = course.prices[1];
        
        if (range_right == null) range_right = Number.MAX_SAFE_INTEGER;
        if (price_right == null) price_right = Number.MAX_SAFE_INTEGER;
        
        if (!(range_right <= price_left) && !(price_right <= range_left)){
            answ.push(course)
        }
    }
    answ.sort(compareCourses);
    return answ;
}

alert("Test of first range");
alert(filter(courses, requiredRange1));
/* result of work
[ { name: 'Courses in England', prices: [ 0, 100 ] },
  { name: 'Courses in France', prices: [ null, null ] },
  { name: 'Courses in Russia', prices: [ null, 400 ] },
  { name: 'Courses in China', prices: [ 50, 250 ] },
  { name: 'Courses in Kazakhstan', prices: [ 56, 324 ] },
  { name: 'Courses in Italy', prices: [ 100, 200 ] } ]
*/

alert("Test of second range");
alert(filter(courses, requiredRange2));
/* result of work
[ { name: 'Courses in France', prices: [ null, null ] },
  { name: 'Courses in Russia', prices: [ null, 400 ] },
  { name: 'Courses in China', prices: [ 50, 250 ] },
  { name: 'Courses in Kazakhstan', prices: [ 56, 324 ] },
  { name: 'Courses in Italy', prices: [ 100, 200 ] },
  { name: 'Courses in USA', prices: [ 200, null ] } ]
*/

alert("Test of third range");
alert(filter(courses, requiredRange3));
/* result of work
[ { name: 'Courses in France', prices: [ null, null ] },
  { name: 'Courses in Russia', prices: [ null, 400 ] },
  { name: 'Courses in China', prices: [ 50, 250 ] },
  { name: 'Courses in Kazakhstan', prices: [ 56, 324 ] },
  { name: 'Courses in USA', prices: [ 200, null ] },
  { name: 'Courses in Germany', prices: [ 500, null ] } ]
*/

alert("Test of 4th range");
alert(filter(courses, requiredRange4));
/* result of work
[ { name: 'Courses in France', prices: [ null, null ] },
  { name: 'Courses in USA', prices: [ 200, null ] },
  { name: 'Courses in Germany', prices: [ 500, null ] } ]
*/

alert("Test of 5th range");
alert(filter(courses, requiredRange5));
/* result of work
[ { name: 'Courses in England', prices: [ 0, 100 ] },
  { name: 'Courses in France', prices: [ null, null ] },
  { name: 'Courses in Russia', prices: [ null, 400 ] },
  { name: 'Courses in China', prices: [ 50, 250 ] },
  { name: 'Courses in Kazakhstan', prices: [ 56, 324 ] },
  { name: 'Courses in Italy', prices: [ 100, 200 ] },
  { name: 'Courses in USA', prices: [ 200, null ] },
  { name: 'Courses in Germany', prices: [ 500, null ] } ]
*/



