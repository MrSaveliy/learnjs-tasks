alert( alert(1) || 2 || alert(3) );
/* вызов alert - undefined(false),
 выведет сначала 1 - false, пото 2 и остановится, 
 так как 2 - true */