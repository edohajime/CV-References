package jsoft.ads.article.category;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import jsoft.ConnectionPool;
import jsoft.objects.UserObject;
import jsoft.ads.article.category.CategoryControl;;

/**
 * Servlet implementation class CategoryView
 */
@WebServlet("/category/view")
public class CategoryView extends HttpServlet {
	private static final long serialVersionUID = 1L;
	// Định nghĩa kiểu nội dung xuất về trình khách
	private static final String CONTENT_TYPE = "text/html; charset=utf-8";   
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CategoryView() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		UserObject user = (UserObject) request.getSession().getAttribute("userLogined");
		if (user != null) {
			view(request, response);
		} else {
			response.sendRedirect("/adv/user/login");
		}
	}
    
	protected void view(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// Xác định kiểu nội dung xuất về trình khách
		response.setContentType(CONTENT_TYPE);

		// Tạo đối tượng xuất nội dung (html) về trình khách
		PrintWriter out = response.getWriter();
		// TODO Auto-generated method stub
		//Tìm servlet thông qua đối tượng requestDispatcher
		RequestDispatcher header = request.getRequestDispatcher("/header");
		if(header!=null) {
			header.include(request, response);
		}
		

		

		out.print("<main id=\"main\" class=\"main\">");

		out.print("<div class=\"pagetitle\">");
		out.print("<h1>Category management</h1>");
		out.print("<nav>");
		out.print("<ol class=\"breadcrumb\">");
		out.print("<li class=\"breadcrumb-item\"><a href=\"/adv/view\">Home</a></li>");
		out.print("<li class=\"breadcrumb-item\">Category management</li>");
		out.print("<li class=\"breadcrumb-item active\">Category list</li>");
		out.print("</ol>");
		out.print("</nav>");
		out.print("</div><!-- End Page Title -->");

		out.print("<section class=\"section\">");
		out.print("<div class=\"row\">");
		out.print("<div class=\"col-lg-12\">");
		
		ConnectionPool cp = (ConnectionPool)getServletContext().getAttribute("CPool");
		CategoryControl cc = new CategoryControl(cp);
		
		if(cp==null) {
			getServletContext().setAttribute("CPool", cc.getCP());
		}
		String view= cc.viewCategories(null, CategorySort.NAME, (short)1, (byte)10);
		
		out.print(view);

		out.print("</div>");
		out.print("</div>");
		out.print("</section>");

		out.print("</main><!-- End #main -->");

		RequestDispatcher footer = request.getRequestDispatcher("/footer");
		if(footer!=null) {
			footer.include(request, response);
		}
	}
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
