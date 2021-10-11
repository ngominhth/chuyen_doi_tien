
function doi_tien()
{
    let thanhtien;
    let tien_dola=document.getElementById("tien_dola").value;
    let tien_candoi=document.getElementById("tien_candoi").value;
    let tiendadoi=document.getElementById("tiendadoi").value;
    
    if (tien_candoi=="usd" && tiendadoi=="vnd")
    {
       thanhtien=23000*tien_dola+" VNĐ";
    }
    else if (tien_candoi=="tien_nhat" && tiendadoi=="vnd")
    {
        thanhtien=206*tien_dola+ " VNĐ";
    }
    else if (tien_candoi=="vnd" && tiendadoi=="vnd")
    {
        thanhtien=1*tien_dola+ " VNĐ";
    }
    else if (tien_candoi=="vnd" && tiendadoi=="usd")
    {
        thanhtien=tien_dola/23000 +" USD";
    }
    else if (tien_candoi=="usd" && tiendadoi=="usd")
    {
        thanhtien=tien_dola*1 +" USD";
    }

    
    document.getElementById("hien_thi").innerHTML="Thành tiền: " + thanhtien;
}


