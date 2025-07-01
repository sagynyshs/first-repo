// const presidents = [
//     { first: 'George', last: 'Washington', born: 1732, died: 1799 },
//     { first: 'John', last: 'Adams', born: 1735, died: 1826 },
//     { first: 'Ronald', last: 'Reagan', born: 1911, died: 2004 },
//     { first: 'Gerald', last: 'Ford', born: 1913, died: 2006 },
//     { first: 'Richard', last: 'Nixon', born: 1913, died: 1994 },
//     { first: 'John F.', last: 'Kennedy', born: 1917, died: 1963 },
//     { first: 'Harry S.', last: 'Truman', born: 1884, died: 1972 },
//     { first: 'Grover', last: 'Cleveland', born: 1837, died: 1908 },
//     { first: 'Chester A.', last: 'Arthur', born: 1829, died: 1886 },
//     { first: 'Abraham', last: 'Lincoln', born: 1809, died: 1865 },
//     { first: 'Franklin', last: 'Pierce', born: 1804, died: 1869 },
//     { first: 'Lyndon B.', last: 'Johnson', born: 1908, died: 1973 },
//     { first: 'Dwight D.', last: 'Eisenhower', born: 1890, died: 1969 },
//   ];


// const writers = ['Василий, Жуковский', 'Александр, Грибоедов', 'Александр, Пушкин', 'Владимир, Даль',
// 'Николай, Языков', 'Федор, Тютчев', 'Николай, Гоголь', 'Алексей, Кольцов', 'Александр, Герцен',
// 'Иван, Гончаров', 'Михаил, Лермонтов', 'Пётр, Ершов', 'Алексей, Толстой', 'Даниил, Заточник',
// 'Александр, Радищев', 'Евгений, Баратынский', 'Петр, Вяземский', 'Александр, Бестужев-Марлинский',
// 'Михаил, Загоскин', 'Сергей, Аксаков', 'Владимир, Одоевский', 'Григорий, Данилевский',
// 'Алексей, Писемский', 'Дмитрий, Григорович', 'Яков, Полонский', 'Леонид, Андреев',
// 'Валерий, Брюсов', 'Саша, Черный', 'Юрий, Трифонов', 'Федор, Абрамов',
// 'Дмитрий, Кедрин', 'Василий, Шукшин'];



  // Array.prototype.filter()
  // 1. Отфильтровать президентов которые родились в 1700-х годах.

  // const filterPresidents = presidents.filter((el)=>el.born >= 1700 && el.died <= 1800);


  // Array.prototype.map()
  // 2. Создать массив, который содержит только имя и фамилию каждого президента

  // const onlyNameAndSurName = presidents.map((i)=>`${i.first} ${i.last}`);

  // Array.prototype.sort()
  // 3. Отсортировать президентов по году рождения - от старшего к младшему 

    // const ageSort = presidents.sort((a, b)=>b.born - a.born)



  // Array.prototype.reduce()
  // 4. Подсчитать общее количество лет жизни всех президентов

  // const obasa = presidents.reduce((prev, el)=>prev+=(el.died-el.born), 0);


  // 5. Отсортировать президентов в зависимости от количества прожитых лет (от большего к меньшему)

  // const ads = presidents.sort((a,b)=>(b.died-b.born)-(a.died-a.born));


  // 6. Создать список названий городов (City) и областей (County) Калифорнии содержащих "San"
  // https://en.wikipedia.org/wiki/List_of_cities_and_towns_in_California

  // fetch('https://en.wikipedia.org/wiki/List_of_cities_and_towns_in_California')
  //   .then((res)=>res.json())
  //   .then((data)=>console.log(data))


  // 7. Упражнение по сортировке
  // Отсортировать массив "writers" по фамилии в алфавитном порядке

  // let str = "Addy 2 Daddy 3 WoW 9 Modern 4 Architecture 87";

  // const sortThis = (str) => {
  //   const arr = str.replaceAll(' ', '').split('').filter((el,id, arr)=>arr.indexOf(el) == id).sort();

  //   const arr1 = arr.filter((el)=>el != el.toUpperCase()).join('');
  //   const arr2 = arr.filter((el)=>el != el.toLowerCase()).join('');
  //   const arr3 = arr.filter((el)=>el == Number(el)).join('');

  //   return arr1.concat(arr2).concat(arr3);
  // };
  // "acdehinortuyADMW234789"

  // 8. Упражнение по использованию метода Reduce
  // Подсчитать - сколько раз встречается каждый элемент в массиве
  // const data = ['truck', 'car', 'car', 'truck', 'bike', 'walk', 'car', 'van', 'bike',
  //   'walk', 'car', 'van', 'car', 'truck', 'velo'];

  // const search = (data) =>{
  //   const obj = data.reduce((prev, el)=>{
  //     !prev[el] ? prev[el] = 1 : prev[el]++;

  //     return prev;
  //   }, {});
    
  //   return obj;
  // }

  // console.log(search(data));
  // 9. Упражнение по использованию методов .forEach и Object.keys();
  // Создать массив, который будет содержать только уникальные значения данного массива:
  // const fruits = ['apples', 'bananas', 'oranges', 'apples', 'grapes', 'bananas', 'peaches',
  //   'strawberries', 'oranges', 'apricots', 'bananas'];

  // const fruitsUniq = (fruits)=>{
  //   const arr = fruits.filter((el, id, arr)=> arr.indexOf(el) == id);

  //   return arr;
  // }


  // ______________________________________________________________________________________________


  // const temp1 = 'One,Two,Three,Four,Five,Six,Seven,Eight,Nine';
  // const temp2 = 'Two, One,Four, Three, Six, Five, Seven, Nine, Eight';
  
  // const changeStringToNum = (str) =>{
  //   const obj = {
  //     One: 1,
  //     Two: 2,
  //     Three: 3,
  //     Four: 4,
  //     Five: 5,
  //     Six: 6,
  //     Seven: 7,
  //     Eight: 8,
  //     Nine: 9
  //   }

  //   const res = [];

  //   str.replaceAll(' ', '').split(',').forEach((el)=>res.push(obj[el]));

  //   return res.join(', ');
  // }
  
  // console.log(changeStringToNum(temp1));
  
  // console.log(changeStringToNum(temp2));
  
  // //[1, 2, 3, 4, 5, 6, 7, 8, 9]
  // //[2, 1, 4, 3, 6, 5, 7, 9, 8]



  // var packages = {
  //   UPS: { length: 120, weight: 44 },
  //   FedeX: { length: 135, weight: 130 },
  //   USPS: { length: 150 }
  // }
  
  // function calculateAvgLength(packages) {
  //   let acc = 0;
  //   let keys = Object.keys(packages);

  //   keys.forEach((el)=>acc += packages[el].length);

  //   return acc / keys.length;
  // }
  
  // console.log(calculateAvgLength(packages));




const arr = ["A", "B", "C", "D", "S", "W", "A", "B", "B", "C", "G"];

const inputs = ["C", "B"];

function search(arr, inputs) {
  const obj = {};

  // for(let i = 0; i < inputs.length; i++){
  //   let acc = 0;

  //   for(let j = 0; j < arr.length; j++){
  //     if(inputs[i] === arr[j]){
  //       acc++;
  //     }
  //   }

  //   obj[inputs[i]] = acc;
  // }

  return inputs.reduce((prev, el)=>prev++, arr)

  return obj
}

let res = search(arr, inputs);

console.log(res);
console.log(res);