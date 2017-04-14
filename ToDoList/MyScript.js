var btnTambah = document.getElementById("btnAdd");
var arrHistoryDone = [];

var counter = 0;

function tambahItemlist(tambah_ul, textList)
{
	counter++;

	var text_li = document.createElement("li");
	var cek_box = document.createElement("input");

	cek_box.type = "checkbox";
	cek_box.id = "IDcekbox"+counter;
	cek_box.className += "text-center";
	cek_box.onclick = CrossText;

	var span = document.createElement("span");
	span.id = "IDspan"+counter;
	span.className += "text-center";
	span.innerText = textList;

	tambah_ul.appendChild(text_li);
	text_li.appendChild(cek_box);
	text_li.appendChild(span);

}

function CrossText()
{
	var cekbox_id = this.id.replace("IDcekbox", "");
	var span_txt = document.getElementById("IDspan" + cekbox_id);

	if (this.checked) {
		span_txt.style.textDecoration = "line-through";
		console.log(span_txt.value);
	}
	else{
		span_txt.style.textDecoration = "none";
	}
}

btnTambah.onclick = function()
{
	var txt = document.getElementById("txtList").value;
	if (document.getElementById("txtList").value=="") {
		alert("Text Must Field");
	}
	else {
	tambahItemlist(document.getElementById("listditambah"), txt);
	document.getElementById("txtList").value="";

	arrHistoryDone.push(txt);
	}

}


btnHistory.onclick= function()
{	
	var jumlah_list = 0
	for(var i = 0 ; i<arrHistoryDone.length; i++)
	{
		jumlah_list ++;
	}

	alert("Anda mempunyai jumlah "+jumlah_list+" list");
}


