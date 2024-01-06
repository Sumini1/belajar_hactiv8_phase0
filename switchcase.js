// SWITCH CASE
/* 
adalah salah bentuk percabangan yg dirancang khusus untuk menaangani 
kondisi suatu value yg melibatkan sejumlah atau banyak alternatif 
penyelesaian
*/
// kelebihan switchCase hanya digunakan untuk 1 dengan 1, yaitu 
// satu variable dengan varibale lainnya. dan ini tidak bisa 
//melakukan operasi matematika, hanya string equality

let trafficLight = "blue"

switch (trafficLight) {
    case  "red":
       console.log("stop")
       break
    case "yellow":
        console.log("hati - hati kakak")
        break
    case "green":
        console.log("gol");
        break
    default:
        console.log(`error`);

}

