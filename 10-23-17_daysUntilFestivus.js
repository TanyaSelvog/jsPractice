today=new Date();
var festivusDate= new Date(today.getFullYear(), 11, 23);
if (today.getMonth()==11 && today.getDate()>23)
{
festivusDate.setFullYear(festivusDate.getFullYear()+1);
}
var one_day=1000*60*60*24;
console.log(Math.ceil((festivusDate.getTime()-today.getTime())/(one_day))+
" days left until Festivus!");
