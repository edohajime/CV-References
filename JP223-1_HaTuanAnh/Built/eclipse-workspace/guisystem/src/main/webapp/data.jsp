<%@page import="java.util.ArrayList"%>
<%@page import="jsoft.gui.category.CategoryControl"%>
<%@page import="jsoft.gui.product.ProductSort"%>
<%@page import="jsoft.gui.product.ProductControl"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="jsoft.*, jsoft.objects.*"%>
<%@ page import="jsoft.gui.article.*, jsoft.gui.product.*"%>
<%@ page import="jsoft.library.*" %>


<%
// Xac dinh ma hoa trang
request.setCharacterEncoding("UTF-8");

// Tim bo quan ly ket noi trong ngu canh ung dung
ConnectionPool cp = (ConnectionPool) application.getAttribute("CPool");

// Khai bao doi tuong loc thong tin
ArticleObject similar = new ArticleObject();

// Lay chuyen muc tin tuc
similar.setArticle_section_id((short) 2);

// Lay nhung bai viet khong bi danh dau xoa
similar.setArticle_delete(false);

// Lấy đường dẫn thực thi
String uri = request.getRequestURI().substring(6); // Loại bỏ "/home/"
// Xác định vị trí lấy ra menu con
int at = uri.indexOf("/");
String menu = "";

// Tổng số bài viết cần lấy
// byte total_article = 3;

if (at != -1) {
	menu = uri.substring(0, at);
	if (menu.equalsIgnoreCase("news")) {
		// Lay cau truc hien thi news
		
			// Tao doi tuong thuc thi chuc nang
			ArticleControl ac = new ArticleControl(cp);
			if (cp == null) {
				application.setAttribute("CPool", ac.getCP());
			}
			
			//Tìm ID xem chi tiết nếu có
			int id = Utilities.getIntParam(request, "id");
			if(id>0){
				String detail = ac.viewArticleDetail(id);
				session.setAttribute("detail", detail);
			} else {
				// Lấy thể loại bài viết
				short cid = Utilities.getShortParam(request, "cid");
				
				if(cid>0){
					similar.setCategory_id(cid);
				}
				
				String news = ac.viewNews(similar, (byte) 12, false);
				// Truyen vao vi tri hien thi o news.jsp thong qua phien lam viec
				session.setAttribute("subnews", news);
			}
				// Lấy danh sách các tin tức mới nhất
				ArticleObject similar2 = new ArticleObject();
				similar2.setArticle_delete(false); // Lấy những bài viết ko bị xóa
				String recentNews = (String) session.getAttribute("recentNews");
				if (recentNews == null){
					recentNews = ac.viewRecentNews(similar2, (byte) 5);
					
					// Lưu dữ liệu vào session chuyển cho sidebar.jsp
					session.setAttribute("recentNews", recentNews);
				}
				
				// tra ve ket noi
				ac.releaseConnection();
				
				// Lấy danh sách các thể loại
				String categories = (String) session.getAttribute("categories");
				if (categories == null) {
					// Tạo đối tượng thực thi chức năng
					CategoryControl cc = new CategoryControl(cp);
					
					categories = cc.viewCategories_sidebar((byte) 28);
					
					// Truyền cấu trúc hiển thị vào session truyền sang bên sidebar.jsp
					session.setAttribute("categories", categories);
					
					cc.releaseConnection();
				}
			}
	} else if(menu.equalsIgnoreCase("product")){
		String products = (String) session.getAttribute("listproducts");
		if (products == null){
			ProductControl pc = new ProductControl(cp);
			if(cp == null) {
				application.setAttribute("CPool", pc.getCP());
			}
			
			products = pc.viewProducts(null, (byte) 12);
			
			session.setAttribute("listproducts", products);
			
			pc.releaseConnection();
		}
	
} else {
	String news = (String) session.getAttribute("homenews");
	if (news == null) {
		// Tao doi tuong thuc thi chuc nang
		ArticleControl ac = new ArticleControl(cp);
		if (cp == null) {
			application.setAttribute("CPool", ac.getCP());
		}
		
		news = ac.viewNews(similar, (byte) 3, true);
		// Truyen vao vi tri hien thi o news.jsp thong qua phien lam viec
		session.setAttribute("homenews", news);

		// tra ve ket noi
		ac.releaseConnection();
	}
}


%>