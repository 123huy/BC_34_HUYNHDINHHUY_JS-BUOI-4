// bt1
function sapXepTangDan (soThu1, soThu2, soThu3){
  if (soThu1 < soThu2 && soThu1 < soThu3) {
    return soThu1;
  } else if (soThu2 < soThu1 && soThu2 < soThu3) {
    return soThu2;
  } else if (soThu3 < soThu1 && soThu3 < soThu2) {
    return soThu3;
  }
}
document.getElementById("btnSapXep").onclick = function() {
    var soThu1 = document.getElementById("soThu1").value;
    var soThu2 = document.getElementById("soThu2").value;
    var soThu3 = document.getElementById("soThu3").value;
     var reslut = sapXepTangDan(soThu1, soThu2, soThu3);

     document.getElementById("thongBaoSapXep").innerHTML = "Day so tang dan: " + sapXepTangDan;
};



// bt2
function kiemTraSo(a) {
  if (a % 2 === 0) {
    //chan
    return true;
  } else {
    //le
    return false;
  }
}

document.getElementById("btnDem").onclick = function () {
  //Đầu vào
  var soThu1 = document.getElementById("soThu1").value * 1;
  var soThu2 = document.getElementById("soThu2").value *1;
  var soThu3 = document.getElementById("soThu3").value *1;

  //Xử lý
  var res = kiemTraSo(soThu1, soThu2, soThu3);
  var text = "";

  if (res) {
    text = "Day la so chan";
  } else {
    text = "Day la so le";
  }

  //Đầu ra
  document.getElementById("thongBaoDem").innerHTML = text;
};