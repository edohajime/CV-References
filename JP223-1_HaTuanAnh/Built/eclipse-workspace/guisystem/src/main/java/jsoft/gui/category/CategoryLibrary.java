package jsoft.gui.category;

import java.util.*;

import jsoft.library.*;
import jsoft.objects.*;

public class CategoryLibrary {

	public static String viewCategories(ArrayList<CategoryObject> items) {
		String tmp = "";
		tmp += "<div class=\"card\">";
		tmp += "<div class=\"card-body\">";
		tmp += "<h5 class=\"card-title\">DANH SÁCH THỂ LOẠI</h5>\n";

		tmp += "<table class=\"table table-striped\">";
		tmp += "<thead>";
		tmp += "<tr>";
		tmp += "<th scope=\"col\">ID</th>";
		tmp += "<th scope=\"col\">Ngày tạo</th>";
		tmp += "<th scope=\"col\">Tên thể loại</th>";
		tmp += "<th scope=\"col\">Tên chuyên mục</th>";
		tmp += "<th scope=\"col\">Người tạo</th>";
		tmp += "<th scope=\"col\">Mô tả</th>";
		tmp += "<th scope=\"col\" colspan=2 >Thực hiện</th>";
		tmp += "</tr>";
		tmp += "</thead>\n";
		tmp += "<tbody>";

		for (CategoryObject item : items) {
			tmp += "<tr>";
			tmp += "<th scope=\"row\">" + item.getCategory_id() + "</th>";
			tmp += "<td>" + item.getCategory_created_date() + "</td>";
			tmp += "<td>" + item.getCategory_name() + "</td>";
			tmp += "<td>" + item.getSection_name() + "</td>";
			tmp += "<td>" + Utilities.getInfo(item.getCategory_notes(), (byte) 1) + "</td>";
			tmp += "<td>" + Utilities.getInfo(item.getCategory_notes(), (byte) 0) + "</td>";
			tmp += "<td><a href=\"#\" class=\"btn btn-primary btn-sm\" ><i class=\"fa-solid fa-user-pen\"></i></a></td>";
			tmp += "<td><a href=\"#\" class=\"btn btn-danger btn-sm\" ><i class=\"fa-solid fa-trash-can\"></i></a></td>";
			tmp += "</tr>\n";
		}

		tmp += "</tbody>";
		tmp += "</table>";
		tmp += "</div>";
		tmp += "</div>";
		return tmp;
	}

	public static String listCategories_sidebar(ArrayList<CategoryObject> items) {
		String tmp = "";

		for (CategoryObject item : items) {
			tmp += "<li><a href=\"#\">" + 
					item.getCategory_name() + " (" + 
					item.getCategory_article_count() + ")</a></li>";
		}
		return tmp;
	}

}
