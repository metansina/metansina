/* Task 3 */
var time1 = process.argv[2];
var time2 = process.argv[3];
var time = Number(time1)+Number(time2);
if (time < 60){
 console.log(time+ " секунд");
}
else if (time < 3600){
    var min = parseInt(time/60);
    var sec = time - min*60;
    console.log(min+" минут "+sec+" секунд");
}
else {
    var hour = parseInt(time/3600);
    var temp = time - hour*3600;
    var min = parseInt(temp/60);
    var sec = temp - min*60;
    console.log(hour+" часов "+min+" минут "+sec+" секунд");
}
