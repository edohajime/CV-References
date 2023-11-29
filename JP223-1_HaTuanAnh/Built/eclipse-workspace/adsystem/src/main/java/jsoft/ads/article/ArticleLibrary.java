package jsoft.ads.article;

import java.util.ArrayList;

import jsoft.objects.ArticleObject;

public class ArticleLibrary {

	public static String viewArticles(ArrayList<ArticleObject> items) {
		String tmp="";
		
		tmp += "<div class=\"card\">";
		tmp += "<div class=\"card-body\">";
		tmp += "<h5 class=\"card-title\">DANH SÁCH NGƯỜI SỬ DỤNG</h5>";
		
		tmp += "<table class=\"table table-striped\">";
		tmp += "<thead>";
		tmp += "<tr>";
		tmp += "<th scope=\"col\">ID</th>";
		tmp += "<th scope=\"col\">Tiêu đề</th>";
		tmp += "<th scope=\"col\">Ngày tạo</th>";
		tmp += "<th scope=\"col\">Lượt xem</th>";
		tmp += "<th scope=\"col\" colspan=2>Thực hiện</th>";
		tmp += "</tr>";
		tmp += "</thead>\n";
		tmp += "<tbody>";
		
		for(ArticleObject item:items) {
			tmp += "<tr>";
			tmp += "<th scope=\"row\">"+item.getArticle_id()+"</th>";
			tmp += "<td>"+item.getArticle_title()+"</td>";
			tmp += "<td>"+item.getArticle_created_date()+"</td>";
			tmp += "<td>"+item.getArticle_visited()+"</td>";
			tmp += "<td><a href=\"#\" class=\"btn btn-primary btn-sm\"><i class=\"fa-regular fa-pen-to-square\"></i></a></td>";
			tmp += "<td><a href=\"#\" class=\"btn btn-danger btn-sm\"><i class=\"fa-solid fa-trash-can\"></i></a></td>";
			tmp += "</tr>\n";
		}
		
		tmp += "</tbody>";
		tmp += "</table>";
		tmp += "<!-- End Table with stripped rows -->";
		tmp += "";
		tmp += "</div>";
		tmp += "</div>";
		
		
		return tmp;
	}
}
