/* Task 1 */
var str = process.argv[2];
str = str.replace("Р", "");
str = str.replace("р", "");
str = str.replace("К", "");
str = str.replace("к", "");
str = str.replace("Н", "");
str = str.replace("н", "");
process.stdout.write(str);