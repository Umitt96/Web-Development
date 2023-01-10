urun = 0;
TpUrun = 0;
money = 0;
CrMoney = 0;
tane = 30;
let talep;

//işçiler
worker = 0;
workRev = 1.1;
CostWorker = 1000;
WorkerUpdate = Date.now();
autoBuy = false;
Costauto = 20;

//madde
byMadde = 200;
CostMadde = 200;
CostMaddeMax = 200;
madde = 3000;
CostMaddeUpdate = Date.now();


setInterval(Update,500);
function Sorgu(a,b) { return a <= b; }
function Update (){
  //değerler
  document.getElementById("urun").innerHTML = urun;
  document.getElementById("money").innerHTML = money;
  document.getElementById("madde").innerHTML = madde;
  document.getElementById("tane").innerHTML = tane;
  document.getElementById("TpUrun").innerHTML = "Toplam ürün sayısı: "+TpUrun;
  document.getElementById("worker").innerHTML = worker;
  document.getElementById("talep").innerHTML = "% "+talep;
  document.getElementById("Bcreate").disabled = !Sorgu(byMadde,madde);
  document.getElementById("BbuyMat").disabled = !Sorgu(CostMadde,money);
  document.getElementById("BbuyMat").innerHTML = "Satın al "+CostMadde+" ₺";
  document.getElementById("az").disabled = !Sorgu(talep,95);
  document.getElementById("cok").disabled = Sorgu(talep,5);
  document.getElementById("workmu").disabled = !Sorgu(CostWorker,money);
  document.getElementById("workmu").innerHTML = "Satın al "+CostWorker+" ₺";

  AutoMadde2();

  //ürün fiyatı değişimi
  if(Date.now() - CostMaddeUpdate > 10000){
    CostMadde = Math.floor(Math.random()*180 +CostMaddeMax);
    CostMaddeUpdate = Date.now();
  }

  //talep dengesi 
  talep = Math.floor(100 -((tane)/70)*120);
  if( Math.random() *100 < talep && Sorgu(1,urun)) { sellUrun(); }

  // Otomatik üretici
  if(Date.now() - WorkerUpdate > 1000){
    if(Sorgu(byMadde,madde)){
    Workers(); }
    WorkerUpdate = Date.now();
 }
 
}

    function deger(number){ if(Sorgu(2,tane)) {tane+=number}}

    function sellUrun(){ 
      urun-=1; 
      money += tane;
      CrMoney += tane;
    }

    function create() { TpUrun++; urun++; madde-=byMadde;}

    function BuyMadde() { 
      madde+=3000; 
      money-=CostMadde;
      CostMadde+=Math.floor(Math.random()*20); }  

    function BuyWorker() { 
      worker++; 
      money-=CostWorker;
      CostWorker+= Math.floor(CostWorker/100)*15;
    }
    function Workers(){
      urun += worker*Math.floor(workRev);
      TpUrun += worker*Math.floor(workRev);

      if(Sorgu(1,worker)){ 
          madde-=byMadde*worker;
      }
    }

    function AutoMadde2(){

      if(madde <= 400 && autoBuy){ 
        BuyMadde();
      }
    }

    function AutoMadde(){ 
      if(Sorgu(Costauto,money)) {
        var elm = document.getElementById('automu');
        document.getElementById("automu2").innerHTML = "Aktif";
        elm.parentNode.removeChild(elm);
        autoBuy = true; 
        money-=Costauto;
        }
      
      return false;
    }