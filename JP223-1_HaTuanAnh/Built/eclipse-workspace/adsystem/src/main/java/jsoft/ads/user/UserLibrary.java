package jsoft.ads.user;

import jsoft.objects.*;
import java.util.*;

public class UserLibrary {

	public static String viewUsers(ArrayList<UserObject> items) {
		String tmp="";
		
		tmp += "<div class=\"card\">";
		tmp += "<div class=\"card-body\">";
		tmp += "<h5 class=\"card-title\">DANH SÁCH NGƯỜI SỬ DỤNG</h5>";
		
		tmp += "<table class=\"table table-striped table-sm\">";
		tmp += "<thead>";
		tmp += "<tr>";
		tmp += "<th scope=\"col\">ID</th>";
		tmp += "<th scope=\"col\">Ngày tạo</th>";
		tmp += "<th scope=\"col\">Tên đăng nhập</th>";
		tmp += "<th scope=\"col\">Tên đầy đủ</th>";
		tmp += "<th scope=\"col\">Hộp thư</th>";
		tmp += "<th scope=\"col\">Điện thoại</th>";
		tmp += "<th scope=\"col\">Lần đăng nhập</th>";
		tmp += "<th scope=\"col\" colspan=2>Thực hiện</th>";
		tmp += "</tr>";
		tmp += "</thead>\n";
		tmp += "<tbody>";
		
		for(UserObject item:items) {
			tmp += "<tr>";
			tmp += "<th scope=\"row\">"+item.getUser_id()+"</th>";
			tmp += "<td>"+item.getUser_created_date()+"</td>";
			tmp += "<td>"+item.getUser_name()+"</td>";
			tmp += "<td>"+item.getUser_fullname()+"</td>";
			tmp += "<td>"+item.getUser_email()+"</td>";
			tmp += "<td>"+item.getUser_mobilephone()+"</td>";
			tmp += "<td>"+item.getUser_logined()+"</td>";
			tmp += "<td><a href=\"/adv/user/profiles?t=e&id="+item.getUser_id()+"\" class=\"btn btn-primary btn-sm\"><i class=\"fa-solid fa-user-pen\"></i></a></td>";
			tmp += "<td><a href=\"#\" class=\"btn btn-danger btn-sm\" data-bs-toggle=\"modal\" data-bs-target=\"#modal"+item.getUser_id()+"\" ><i class=\"fa-solid fa-trash-can\"></i></a></td>";
			tmp += "</tr>";
			tmp += UserLibrary.viewModal(item);
		}
		tmp += "</tbody>";
		tmp += "</table>";
		tmp += "<!-- End Table with stripped rows -->";
		tmp += "";
		tmp += "</div>";
		tmp += "</div>";
		
		
		return tmp;
	}
	
	private static String viewModal(UserObject item) {
		String tmp = "";
		
		tmp+="<div class=\"modal fade\" id=\"modal"+item.getUser_id()+"\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">";
		tmp+="<div class=\"modal-dialog\">";
		tmp+="<div class=\"modal-content\">";
		tmp+="<div class=\"modal-header\">";
		tmp+="<h1 class=\"modal-title fs-5\" id=\"exampleModalLabel\"><i class=\"fa-solid fa-triangle-exclamation\"></i> Xác nhận xóa</h1>";
		tmp+="<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>";
		tmp+="</div>";
		tmp+="<div class=\"modal-body\">";
		tmp+="Bạn có chắc chắn xóa tài khoản: <b>"+item.getUser_fullname()+"("+item.getUser_name()+")"+"</b>";
		tmp+="</div>";
		tmp+="<div class=\"modal-footer\">";
		tmp+="<a href=\"/adv/user/del?id="+item.getUser_id()+"\" class=\"btn btn-danger\"><i class=\"fa-solid fa-trash\"></i> Xóa</a>";
		tmp+="<button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\"><i class=\"fa-solid fa-circle-xmark\"></i> Hủy</button>";
		tmp+="</div>";
		tmp+="</div>";
		tmp+="</div>";
		tmp+="</div>";
		
		return tmp;
	}
}
