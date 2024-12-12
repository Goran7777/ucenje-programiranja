const popup = document.getElementById("popup");
 justDetectAdblock.detectAnyAdblocker().then(function (detected) {
   if (detected) {
     popup.style.display = "flex";
   } else {
     popup.style.display = "none";
   }
 });
 // for adbloker ultimate
 detectAdblock(function (isUsingAdblock) {
   // isUsingAdblock is either `true`, `false` or `unknown`
   if (isUsingAdblock === true || isUsingAdblock === "unknown") {
     popup.style.display = "flex";
   } else {
     popup.style.display = "none";
   }
 });













