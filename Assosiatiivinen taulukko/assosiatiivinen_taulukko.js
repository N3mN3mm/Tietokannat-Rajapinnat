let arr = [];

arr.push({id_book: 1, name: "Everything You Ever Wanted to Know", author: "Upton", isbn: "082305649x"});
arr.push({id_book: 2, name: "Photography", author: "Vilppu", isbn: "205711499"});
arr.push({id_book: 3, name: "Drawing Manual Vilppu", author: "Zelanshi", isbn: "1892053039"});
arr.push({id_book: 4, name: "TBA", author: "Zelanshi", isbn: "0534613932"});
arr.push({id_book: 5, name: "Shaping Space", author: "Speight", isbn: "0534613934"});
arr.push({id_book: 6, name: "Art Since 1940", author: "Speight", isbn: "0131839780"});
arr.push({id_book: 7, name: "Make it in Clay", author: "Stokstad", isbn: "0076417011"});
arr.push({id_book: 8, name: "Art History Vol II & ala carte tab", author: "Stokstad", isbn: "205795617"});
arr.push({id_book: 9, name: "Accounting Concepts", author: "Albrecht", isbn: "1111287856"});
arr.push({id_book: 10, name: "Intermediate Accounting", author: "Stice", isbn: "0538479736"});
arr.push({id_book: 11, name: "Management Info Systems", author: "Marakas", isbn: "9780073376813"});
arr.push({id_book: 12, name: "Management", author: "Williams", isbn: "9780757524028"});
arr.push({id_book: 13, name: "Leadership Wisdom of Jesus", author: "Manz", isbn: "9781609940041"});
arr.push({id_book: 14, name: "Business Law Today", author: "Miller", isbn: "9780324786156"});
arr.push({id_book: 15, name: "Management Info Systems", author: "Marakas", isbn: "9780073376813"});

console.log(typeof arr);
console.log(arr);
console.log(arr[0]);
console.log(arr[0].name);
console.log(arr.length);
for (let i=0; i < arr.length; i++)
{
    console.log(arr[i].name);
}