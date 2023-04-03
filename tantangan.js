function init(){
    document.getElementById("form1").style.display='none';
  }
  function SimpanForm(){
   
  // output nama
    let nama = document.querySelector(".nama");
    let nama_input = document.querySelector(".form1").nama_input.value;
    nama.innerHTML=nama_input;
    console.log(nama_input)


 // output Bidang
    let jabatan = document.querySelector(".bidang");
    let jabatan_input = document.querySelector(".form1").role_input.value;
    jabatan.innerHTML=jabatan_input;
    console.log(role_input)


 // output avaibility
    let av = document.querySelector(".avail");
    let av_input = document.querySelector(".form1").avail_input.value;
    av.innerHTML=av_input;
    console.log(av_input)


 // output age
    let us = document.querySelector(".usia");
    let us_input = document.querySelector(".form1").umur_input.value;
    us.innerHTML=us_input+" Tahun";
    console.log(us_input)


 // output lokasi
    let lok = document.querySelector(".lokasi");
    let lok_input = document.querySelector(".form1").lokasi_input.value;
    lok.innerHTML=lok_input;
    console.log(lok_input)


 // output pengalaman
    let pengalaman = document.querySelector(".pengalaman");
    let pengalaman_input = document.querySelector(".form1").pengalaman_input.value;
    pengalaman.innerHTML=pengalaman_input+" Tahun";
    console.log(pengalaman_input)


 // output email
    let email = document.querySelector(".email");
    let email_input = document.querySelector(".form1").email_input.value;
    email.innerHTML=email_input;
    console.log(email_input)
    
   // style
    document.getElementById("form1").style.display='none';
    document.getElementById("card1").style.display='inline';  
  }
  function showForm(){
    document.getElementById("form1").style.display='inline';  
    document.getElementById("Card1").style.display='none';  
  }