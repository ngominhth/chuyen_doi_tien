
function doi_tien()
{
    let thanhtien;
    let tien_dola=document.getElementById("tien_dola").value;
    var tien_candoi=document.getElementById("tien_candoi").value;
    if (tien_candoi=="usd")
    {
       thanhtien=23000;
    }
    else if (tien_candoi=="tien_nhat")
    {
        thanhtien=206;
    }

    let doitien=thanhtien*tien_dola;
    document.getElementById("hien_thi").innerHTML="Thành tiền: " + doitien + " vnđ";
}


