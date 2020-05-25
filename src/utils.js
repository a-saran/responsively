export const getHeightAndWidth = (size) => size.split('x')

export const arrayMove = (array, from, to) => {
  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
};

export const filterWithoutDuplicate = (a, b) => {
  console.log(a)
  console.log(b)
  let withoutDuplicate = [];

  for (let i = 0; i < b.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < a.length; j++) {
      if(b[i].id === a[j].id) {
        isDuplicate = true;
        break;
      }
    }
    if(!isDuplicate) {
      withoutDuplicate.push(b[i])
    }
  }

  return withoutDuplicate;
}