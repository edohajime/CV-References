//Các xử lý kịch bản cho index.html

var def = "---từ khóa---";
let emp = ""; //let - phiên bản 2015 trở đi

function setFirstTime(){
	window.document.frmSearch.txtKeyword.value = def;
	//window.document.form[0].txtKeyword.value = def;
	//document.getElementById("txtKeyword").value = def;
	
}

function setFirstTime_v2(fn){
	fn.txtKeyword.value = def;
}

function setValue(fn, isClicked){
	let value = fn.txtKeyword.value;
	
	//Nếu là sự kiện nhấp chuột vào
	if (isClicked){
		if (value.trim() == def) {
			fn.txtKeyword.value = emp;
		}
	}else{
		if (value.trim() == emp) {
			fn.txtKeyword.value = def;
		}
	}
}

function checkValidKeyword(fn){
	let value = fn.txtKeyword.value;
	
	let message = "Hãy nhập từ khóa để tìm kiếm!";
	
	if((value.trim() == def) || (value.trim() == emp)){
		window.alert(message);
		fn.txtKeyword.focus(); //Di chuyển con trỏ vào đối tượng nhập
		fn.txtKeyword.select(); //Tạo trạng thái sãn sàng nhập dữ liệu ngay
	}
}