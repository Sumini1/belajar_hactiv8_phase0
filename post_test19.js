
// data
const data = [
    {
        name: "Joe",
        age: 23,
        job: "Artist",
        hoby: "Drawing",
    },
    {
        name: "Michael",
        age: 21,
        job: "Engineer",
        hoby: "Fishing",
    },
    {
        name: "Jenifer",
        age: 22,
        job: "Dentist",
        hoby: "Gardening",
    },
]
// Soal:
// Bentuklah objek dengan isi sebagai berikut dengan memanfaatkan function pada array (unshift, shift, push, pop, etc)
// {
//     header: ["number", "name", "age", "job", "hoby"],
//     data: data
// }

// expected output:

// [
//  { name: 'Joe', age: 23, job: 'Artist', hoby: 'Drawing' },
//  { name: 'Michael', age: 21, job: 'Engineer', hoby: 'Fishing' },
//  { name: 'Jenifer', age: 22, job: 'Dentist', hoby: 'Gardening' }
// ]

// Tidak boleh langsung print expected output
// NOTE : berikan comment penjelasan pada baris kode yang dirasa penting

// Jawaban
// write your code here
const header = ["number", "name", "age", "age", "age", "job", "hoby"]

const formattedData = []; // inisialisasi data dengan array kosong
// membentuk object data  dengan for loop
for(let i = 0; i < data.length; i++) {
    const person = data[i];
    const formattedPerson = {
        number : i + 1,
        name : person.name,
        age: person.age,
        job: person.job,
        hoby: person.hoby,
    };
    formattedData.push(formattedPerson);
}
// membentuk objek akhir dengan prroperti header dan data
const table = {
    header,
    data: formattedData,
};


console.log(table.data)
