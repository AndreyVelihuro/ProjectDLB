function redirectToNewPage(event) {
    event.preventDefault(); // מניעת שליחת הטופס
  
    // כאן ניתן לבצע פעולות נוספות לפני הניתוב לדף החדש
  
    window.location.href = "דף_חדש.html"; // הניתוב לדף החדש
  }
  