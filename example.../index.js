


// function sleep() {
//     return new Promise(resolve => setTimeout(() => resolve('I am wake up!'), 1000));

// }

// // function func() {
// //     sleep()
// //         .then(res => {
// //             alert(res);
// //         })

// // }

// async function func() {
//     const res = await sleep();

//     alert(res);

// }

// func();







console.log(111);

// async function getData(url) {
//     const request = await fetch(url);

//     if (request.status !== 200) {
//         throw new Error(`Request is failed!`)
//     }

//     const result = await request.json();

//     return result;
// }

// let s = getData('https://api.chucknorris.io/jokes/categories')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch(err => console.log(err))

//     console.log(s);
function f() {
    console.log(111);
}