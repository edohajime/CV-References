package jsoft.ads.main;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class header
 */
@WebServlet("/menu")
public class menu extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	private static final String CONTENT_TYPE="text/html; charset=utf-8";
    /**
     * @see HttpServlet#HttpServlet()
     */
    public menu() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType(CONTENT_TYPE);
		PrintWriter out = response.getWriter();
		out.print("<!-- ======= Sidebar ======= -->");
		out.print("<aside id=\"sidebar\" class=\"sidebar\">");

		out.print("<ul class=\"sidebar-nav\" id=\"sidebar-nav\">");

		out.print("<li class=\"nav-item\">");
		out.print("<a class=\"nav-link collapsed\" href=\"/adv/view\">");
		out.print("<i class=\"bi bi-grid\"></i>");
		out.print("<span>Dashboard</span>");
		out.print("</a>");
		out.print("</li><!-- End Dashboard Nav -->");

		out.print("<li class=\"nav-item\">");
		out.print("<a class=\"nav-link collapsed\" data-bs-target=\"#user-nav\" data-bs-toggle=\"collapse\" href=\"#\">");
		out.print("<i class=\"fa-solid fa-user-group\"></i><span>User management</span><i class=\"bi bi-chevron-down ms-auto\"></i>");
		out.print("</a>");
		out.print("<ul id=\"user-nav\" class=\"nav-content collapse \" data-bs-parent=\"#sidebar-nav\">");
		out.print("<li>");
		out.print("<a href=\"/adv/user/view\">");
		out.print("<i class=\"fa-solid fa-user\"></i><span>User accounts</span>");
		out.print("</a>");
		out.print("</li>");
		out.print("<li>");
		out.print("<a href=\"/adv/user/add\">");
		out.print("<i class=\"fa-solid fa-user-plus\"></i><span>Add user</span>");
		out.print("</a>");
		out.print("</li>");
		out.print("<li>");
		out.print("<a href=\"/adv/user/trash\">");
		out.print("<i class=\"fa-solid fa-trash\"></i><span>Trash</span>");
		out.print("</a>");
		out.print("</li>");

		out.print("</ul>");
		out.print("</li><!-- End Components Nav -->");

		out.print("<li class=\"nav-item\">");
		out.print("<a class=\"nav-link collapsed\" data-bs-target=\"#section-nav\" data-bs-toggle=\"collapse\" href=\"#\">");
		out.print("<i class=\"bi bi-journal-text\"></i><span>Section management</span><i class=\"bi bi-chevron-down ms-auto\"></i>");
		out.print("</a>");
		out.print("<ul id=\"section-nav\" class=\"nav-content collapse \" data-bs-parent=\"#sidebar-nav\">");
		out.print("<li>");
		out.print("<a href=\"/adv/section/view\">");
		out.print("<i class=\"bi bi-circle\"></i><span>Section list</span>");
		out.print("</a>");
		out.print("</li>");
		
		out.print("<li>");
		out.print("<a href=\"/adv/section/add\">");
		out.print("<i class=\"bi bi-circle\"></i><span>Add section</span>");
		out.print("</a>");
		out.print("</li>");
		
		out.print("<li>");
		out.print("<a href=\"/adv/section/catelist\">");
		out.print("<i class=\"bi bi-circle\"></i><span>Category Of Section list</span>");
		out.print("</a>");
		out.print("</li>");
		
		out.print("<li>");
		out.print("<a href=\"/adv/section/trash\">");
		out.print("<i class=\"fa-solid fa-trash\"></i><span>Trash</span>");
		out.print("</a>");
		out.print("</li>");
		out.print("</ul>");
		out.print("</li><!-- End Section Nav -->");

		out.print("<li class=\"nav-item\">");
		out.print("<a class=\"nav-link collapsed\" data-bs-target=\"#category-nav\" data-bs-toggle=\"collapse\" href=\"#\">");
		out.print("<i class=\"bi bi-layout-text-window-reverse\"></i><span>Category management</span><i class=\"bi bi-chevron-down ms-auto\"></i>");
		out.print("</a>");
		out.print("<ul id=\"category-nav\" class=\"nav-content collapse \" data-bs-parent=\"#sidebar-nav\">");
		out.print("<li>");
		out.print("<a href=\"/adv/category/view\">");
		out.print("<i class=\"bi bi-circle\"></i><span>Category list</span>");
		out.print("</a>");
		out.print("</li>");
		out.print("<li>");
		out.print("<a href=\"/adv/category/add\">");
		out.print("<i class=\"bi bi-circle\"></i><span>Add category</span>");
		out.print("</a>");
		out.print("</li>");
		out.print("<li>");
		out.print("<a href=\"/adv/category/trash\">");
		out.print("<i class=\"fa-solid fa-trash\"></i><span>Trash</span>");
		out.print("</a>");
		out.print("</li>");
		out.print("</ul>");
		out.print("</li><!-- End Category Nav -->");

		out.print("<li class=\"nav-item\">");
		out.print("<a class=\"nav-link collapsed\" data-bs-target=\"#article-nav\" data-bs-toggle=\"collapse\" href=\"#\">");
		out.print("<i class=\"fa-regular fa-newspaper\"></i><span>Article management</span><i class=\"bi bi-chevron-down ms-auto\"></i>");
		out.print("</a>");
		out.print("<ul id=\"article-nav\" class=\"nav-content collapse \" data-bs-parent=\"#sidebar-nav\">");
		out.print("<li>");
		out.print("<a href=\"/adv/article/view\">");
		out.print("<i class=\"bi bi-circle\"></i><span>Article list</span>");
		out.print("</a>");
		out.print("</li>");
		out.print("<li>");
		out.print("<a href=\"/adv/article/add\">");
		out.print("<i class=\"bi bi-circle\"></i><span>Add article</span>");
		out.print("</a>");
		out.print("</li>");
		out.print("<li>");
		out.print("<a href=\"/adv/article/trash\">");
		out.print("<i class=\"fa-solid fa-trash\"></i><span>Trash</span>");
		out.print("</a>");
		out.print("</li>");
		out.print("</ul>");
		out.print("</li><!-- End Article Nav -->");

		out.print("<li class=\"nav-item\">");
		out.print("<a class=\"nav-link collapsed\" data-bs-target=\"#icons-nav\" data-bs-toggle=\"collapse\" href=\"#\">");
		out.print("<i class=\"bi bi-gem\"></i><span>Icons</span><i class=\"bi bi-chevron-down ms-auto\"></i>");
		out.print("</a>");
		out.print("<ul id=\"icons-nav\" class=\"nav-content collapse \" data-bs-parent=\"#sidebar-nav\">");
		out.print("<li>");
		out.print("<a href=\"icons-bootstrap.html\">");
		out.print("<i class=\"bi bi-circle\"></i><span>Bootstrap Icons</span>");
		out.print("</a>");
		out.print("</li>");
		out.print("<li>");
		out.print("<a href=\"icons-remix.html\">");
		out.print("<i class=\"bi bi-circle\"></i><span>Remix Icons</span>");
		out.print("</a>");
		out.print("</li>");
		out.print("<li>");
		out.print("<a href=\"icons-boxicons.html\">");
		out.print("<i class=\"bi bi-circle\"></i><span>Boxicons</span>");
		out.print("</a>");
		out.print("</li>");
		out.print("</ul>");
		out.print("</li><!-- End Icons Nav -->");

		out.print("<li class=\"nav-heading\">Pages</li>");

		out.print("<li class=\"nav-item\">");
		out.print("<a class=\"nav-link collapsed\" href=\"users-profile.html\">");
		out.print("<i class=\"bi bi-person\"></i>");
		out.print("<span>Profile</span>");
		out.print("</a>");
		out.print("</li><!-- End Profile Page Nav -->");

		out.print("<li class=\"nav-item\">");
		out.print("<a class=\"nav-link collapsed\" href=\"pages-faq.html\">");
		out.print("<i class=\"bi bi-question-circle\"></i>");
		out.print("<span>F.A.Q</span>");
		out.print("</a>");
		out.print("</li><!-- End F.A.Q Page Nav -->");

		out.print("<li class=\"nav-item\">");
		out.print("<a class=\"nav-link collapsed\" href=\"pages-contact.html\">");
		out.print("<i class=\"bi bi-envelope\"></i>");
		out.print("<span>Contact</span>");
		out.print("</a>");
		out.print("</li><!-- End Contact Page Nav -->");

		out.print("<li class=\"nav-item\">");
		out.print("<a class=\"nav-link collapsed\" href=\"pages-register.html\">");
		out.print("<i class=\"bi bi-card-list\"></i>");
		out.print("<span>Register</span>");
		out.print("</a>");
		out.print("</li><!-- End Register Page Nav -->");

		out.print("<li class=\"nav-item\">");
		out.print("<a class=\"nav-link collapsed\" href=\"pages-login.html\">");
		out.print("<i class=\"bi bi-box-arrow-in-right\"></i>");
		out.print("<span>Login</span>");
		out.print("</a>");
		out.print("</li><!-- End Login Page Nav -->");

		out.print("<li class=\"nav-item\">");
		out.print("<a class=\"nav-link collapsed\" href=\"pages-error-404.html\">");
		out.print("<i class=\"bi bi-dash-circle\"></i>");
		out.print("<span>Error 404</span>");
		out.print("</a>");
		out.print("</li><!-- End Error 404 Page Nav -->");

		out.print("<li class=\"nav-item\">");
		out.print("<a class=\"nav-link \" href=\"pages-blank.html\">");
		out.print("<i class=\"bi bi-file-earmark\"></i>");
		out.print("<span>Blank</span>");
		out.print("</a>");
		out.print("</li><!-- End Blank Page Nav -->");

		out.print("</ul>");

		out.print("</aside><!-- End Sidebar-->");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
