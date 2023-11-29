package jsoft.ads.article;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import jsoft.*;
import jsoft.objects.*;

/**
 * Servlet implementation class View
 */
@WebServlet("/article/add")
public class ArticleAdd extends HttpServlet {
	private static final long serialVersionUID = 1L;

	// Định nghĩa kiểu nội dung xuất về trình khách
	private static final String CONTENT_TYPE = "text/html; charset=utf-8";

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public ArticleAdd() {
		super();
		// TODO Auto-generated constructor stub
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// Tìm thông tin đăng nhập trong phiên làm việc
		UserObject user = (UserObject) request.getSession().getAttribute("userLogined");
		if (user != null) {

			view(request, response);
		} else {
			response.sendRedirect("/adv/user/login");
		}

	}

	/**
	 * 
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void view(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		// Xác định kiểu nội dung xuất về trình khách
		response.setContentType(CONTENT_TYPE);

		// Tạo đối tượng xuất nội dung về trình khách
		PrintWriter out = response.getWriter();

		RequestDispatcher header = request.getRequestDispatcher("/header");
		if (header != null) {
			header.include(request, response);
		}

		out.print("<main id=\"main\" class=\"main\">");

		out.print("<div class=\"pagetitle\">");

		// Tìm tham số báo lỗi
		String error = request.getParameter("err");
		String state = request.getParameter("stat");
		String message = "";

		if (error != null) {
			if (error.equalsIgnoreCase("value")){
				message = "Hãy điền hết tất cả các trường thông tin!";
			} else if (error.equalsIgnoreCase("notok")) {
				message = "Thao tác không thành công! Bài viết có thể đã tồn tại hoặc tên thể loại bạn nhập vào không tồn tại!";
			} 
		}

		if (message.compareToIgnoreCase("") != 0) {
			out.print("<div class=\"row my-3\">");
			out.print("<div class=\"col-md-12 text-center\">");
			out.print("<div class=\"text-bg-danger py-3\"><i class=\"fa-solid fa-circle-exclamation\"></i>" + message
					+ "</div>");
			out.print("</div> ");
		} 
		if (state != null){
			message = "Đã thêm thành công";
			out.print("<div class=\"row my-3\">");
			out.print("<div class=\"col-md-12 text-center\">");
			out.print("<div class=\"text-bg-success py-3\"><i class=\"fa-solid fa-circle-exclamation\"></i>" + message
					+ "</div>");
			out.print("</div> ");
		}
		out.print("</div>");

		out.print("<h1>Article Management</h1>");
		out.print("<nav>");
		out.print("<ol class=\"breadcrumb\">");
		out.print("<li class=\"breadcrumb-item\"><a href=\"/adv/view\">Home</a></li>");
		out.print("<li class=\"breadcrumb-item\">Article Management</li>");
		out.print("<li class=\"breadcrumb-item active\">Article List</li>");
		out.print("</ol>");
		out.print("</nav>");
		out.print("</div><!-- End Page Title -->");

		out.print("<section class=\"section\">");
		out.print("<div class=\"row\">");
		out.print("<div class=\"col-lg-12\">");

		// Tìm bộ quản lý kết nối
		ConnectionPool cp = (ConnectionPool) getServletContext().getAttribute("CPool");

		// Tạo đối tượng thực thi chức năng
		ArticleControl ac = new ArticleControl(cp);

		if (cp == null) {
			getServletContext().setAttribute("CPool", ac.getCP());
		}

		// Lấy cấu trúc hiển thị
		String view = ac.viewAddArticle();

		// Trả về kết nối
		ac.releaseConnection();

		// Hiển thị
		out.print(view);

		out.print("</div>");
		out.print("</div>");
		out.print("</section>");

		out.print("</main><!-- End #main -->");

		RequestDispatcher footer = request.getRequestDispatcher("/footer");
		if (footer != null) {
			footer.include(request, response);
		}

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// Tham chiếu ngữ cảnh ứng dụng
		ServletContext application = getServletConfig().getServletContext();

		// Tìm bộ quản lý kết nối
		ConnectionPool cp = (ConnectionPool) application.getAttribute("CPool");

		// Tạo đối tượng thực thi chức năng
		ArticleControl ac = new ArticleControl(cp);

		if (cp == null) {
			application.setAttribute("CPool", ac.getCP());
		}

		ArticleObject article = new ArticleObject();
		// Lấy thông tin trên giao diện
		String articletitle = request.getParameter("txtArticleTitle").trim();
		article.setArticle_title(articletitle);
		String articlesummary = request.getParameter("txtArticleSummary").trim();
		article.setArticle_summary(articlesummary);
		String articleauthorname = request.getParameter("txtArticleAuthorName").trim();
		article.setArticle_author_name(articleauthorname);
		String articlesource = request.getParameter("txtArticleSource").trim();
		article.setArticle_source(articlesource);
		String categoryname = request.getParameter("txtCategoryName").trim();
		article.setCategory_name(categoryname);

		

		
		if (articletitle.compareToIgnoreCase("") == 0 || articlesummary.compareToIgnoreCase("") == 0
				|| articleauthorname.compareToIgnoreCase("") == 0 || articlesource.compareToIgnoreCase("") == 0
				|| categoryname.compareToIgnoreCase("") == 0) {
			response.sendRedirect("/adv/article/add?err=value");
			
		} else {

			boolean result = ac.addArticleObject(article);
			if (!result) {
				response.sendRedirect("/adv/article/add?err=notok");
			}
		}
		

	}

}
