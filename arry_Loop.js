const array = [
  'arry one',
  'arry two',
  'arry three',
  'arry four',
  'arry five',
  'arry six',
  'arry end',
];

let limit = 0;

// function arryloop() {

//     console.log(arry[limit]);

//     limit++;

//     if(limit == arry.length){limit = 0}

//     setTimeout(arryloop, 1000)
//   }

//   arryloop();

let index = 0;
setInterval(() => {
  index = index >= array.length ? 0 : index;

  console.log(array[index++]);
}, 1000);
