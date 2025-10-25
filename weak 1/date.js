// // Function - dateMethods() shows how to:
// // Create a Date object
// // Extract specific parts (day, month, year, etc.)
// // Modify date/time values
// // Work with timestamps (milliseconds since Jan 1, 1970 — the Unix epoch)

// function dateMethods() { 
//     const currentDate = new Date();        //new date() - it represents the current system date and time.
//     console.log("Current Date:", currentDate);
  
//     // Getting various components of the date
//     console.log("Date:", currentDate.getDate());           // Day of the month (1–31)
//     console.log("Month:", currentDate.getMonth() + 1);     // Months are zero-indexed, so adding 1
//     console.log("Year:", currentDate.getFullYear());       // Full year (e.g. 2025)
//     console.log("Hours:", currentDate.getHours());         //Hour (0–23)
//     console.log("Minutes:", currentDate.getMinutes());     // Minutes (0–59)
//     console.log("Seconds:", currentDate.getSeconds());     // Seconds (0–59)



//     // Setting components of the date
//     currentDate.setFullYear(2022);
//     console.log("After setFullYear:", currentDate);
  

//     currentDate.setMonth(5); // Setting month to June (zero-indexed)
//     console.log("After setMonth:", currentDate);
  

//     // Getting and setting time in milliseconds since 1970
//     console.log("Time in milliseconds since 1970:", currentDate.getTime());
  
//     const newDate = new Date(2023, 8, 15);    //Creating a new date manually overriding the system local dat and time, year
//     console.log("New Date:", newDate);        //now print the Created date for September 15 2023 (month = 8 because of zero indexing).
//   }
  

//   // Example Usage for Date Methods
//   dateMethods();
  



// // You’re just flexing the Date API:
// // get → extract parts
// // set → modify
// // new Date() → create custom date/time







// //if u want to print time every second -
// function currenttimeprint(){
//   console.log(new Date().getTime());              //This prints the current timestamp every time the function runs. 
//                                                   //new Date - creates a new Date object containing the current local date and time.   
//                                                   //getTime - converts that date into the number of milliseconds since January 1, 1970 (UTC) — also known as the Unix Epoch time.
// }

// setInterval(currenttimeprint, 1000);              //setInterval is a global funct. it will print the time every 1000 = 1second.




function currenttimeprint(){
  console.log(new Date());              //This prints the current timestamp every time the function runs. 
                                                  //new Date - creates a new Date object containing the current local date and time.   
                                                  //getTime - converts that date into the number of milliseconds since January 1, 1970 (UTC) — also known as the Unix Epoch time.
}

setInterval(currenttimeprint, 1000);              //setInterval is a global funct. it will print the time every 1000 = 1second.