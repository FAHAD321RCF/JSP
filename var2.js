const price = 5000;

if(price>=5000){
 const discount = price*10/100;
 const payamount = price-discount;
 console.log(payamount);
}
else{
    console.log(price);
}