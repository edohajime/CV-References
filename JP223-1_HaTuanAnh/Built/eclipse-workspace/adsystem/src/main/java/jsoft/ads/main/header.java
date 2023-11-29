package jsoft.ads.main;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import jsoft.library.Utilities;
import jsoft.objects.*;

/**
 * Servlet implementation class header
 */
@WebServlet("/header")
public class header extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	private static final String CONTENT_TYPE="text/html; charset=utf-8";
    /**
     * @see HttpServlet#HttpServlet()
     */
    public header() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		//Xác định tập ký tự mã hóa
		request.setCharacterEncoding("utf-8");
		response.setContentType(CONTENT_TYPE);
		PrintWriter out = response.getWriter();
		
		//Tìm servlet thông qua đối tượng requestDispatcgr
		out.print("<!DOCTYPE html>");
		out.print("<html lang=\"en\">");

		out.print("<head>");
		out.print("<meta charset=\"utf-8\">");
		out.print("<meta content=\"width=device-width, initial-scale=1.0\" name=\"viewport\">");

		out.print("<title>Components / Accordion - NiceAdmin Bootstrap Template</title>");
		out.print("<meta content=\"\" name=\"description\">");
		out.print("<meta content=\"\" name=\"keywords\">");

		out.print("<!-- Favicons -->");
		out.print("<link href=\"/adv/img/favicon.png\" rel=\"icon\">");
		out.print("<link href=\"/adv/img/apple-touch-icon.png\" rel=\"apple-touch-icon\">");

		out.print("<!-- Google Fonts -->");
		out.print("<link href=\"https://fonts.gstatic.com\" rel=\"preconnect\">");
		out.print("<link href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i\" rel=\"stylesheet\">");
		
		out.print("<!-- JavaScript Files -->");
		out.print("<script language=\"javascript\" src=\"/adv/js/user.js\"></script>");

		out.print("<!-- Vendor CSS Files -->");
		out.print("<link href=\"/adv/css/all.min.css\" rel=\"stylesheet\">");
		out.print("<link href=\"/adv/css/bootstrap.min.css\" rel=\"stylesheet\">");
		out.print("<link href=\"/adv/css/bootstrap-icons.css\" rel=\"stylesheet\">");
//		out.print("<link href=\"assets/vendor/boxicons/css/boxicons.min.css\" rel=\"stylesheet\">");
//		out.print("<link href=\"assets/vendor/quill/quill.snow.css\" rel=\"stylesheet\">");
//		out.print("<link href=\"assets/vendor/quill/quill.bubble.css\" rel=\"stylesheet\">");
//		out.print("<link href=\"assets/vendor/remixicon/remixicon.css\" rel=\"stylesheet\">");
//		out.print("<link href=\"assets/vendor/simple-datatables/style.css\" rel=\"stylesheet\">");

		out.print("<!-- Template Main CSS File -->");
		out.print("<link href=\"/adv/css/style.css\" rel=\"stylesheet\">");

		out.print("<!-- =======================================================");
		out.print("* Template Name: NiceAdmin - v2.4.1");
		out.print("* Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/");
		out.print("* Author: BootstrapMade.com");
		out.print("* License: https://bootstrapmade.com/license/");
		out.print("======================================================== -->");
		out.print("</head>");

		out.print("<body>");

		out.print("<!-- ======= Header ======= -->");
		out.print("<header id=\"header\" class=\"header fixed-top d-flex align-items-center\">");

		out.print("<div class=\"d-flex align-items-center justify-content-between\">");
		out.print("<a href=\"/adv/view\" class=\"logo d-flex align-items-center\">");
		out.print("<img src=\"/adv/img/logo.png\" alt=\"\">");
		out.print("<span class=\"d-none d-lg-block\">NiceAdmin</span>");
		out.print("</a>");
		out.print("<i class=\"bi bi-list toggle-sidebar-btn\"></i>");
		out.print("</div><!-- End Logo -->");

		//Xác nhận vị trí làm việc
		String pos = request.getRequestURI();
		if(pos.contains("user")) {
			pos = "/adv/user/view";
		}
		
		
		//Xác định từ khóa tìm kiếm
		String key = request.getParameter("keyword");
		String saveKey = (key!=null && !key.equalsIgnoreCase(""))? Utilities.encodeToHtml(key.trim()):"";
		
		out.print("<div class=\"search-bar\">");
		out.print("<form class=\"search-form d-flex align-items-center\" method=\"post\" action=\""+pos+"\">");
		out.print("<input type=\"text\" name=\"keyword\" value=\""+saveKey+"\" placeholder=\"Từ khóa\" title=\"Nhập từ khóa tìm kiếm\">");
		out.print("<button type=\"submit\" title=\"Search\"><i class=\"bi bi-search\"></i></button>");
		out.print("</form>");
		out.print("</div><!-- End Search Bar -->");

		out.print("<nav class=\"header-nav ms-auto\">");
		out.print("<ul class=\"d-flex align-items-center\">");

		out.print("<li class=\"nav-item d-block d-lg-none\">");
		out.print("<a class=\"nav-link nav-icon search-bar-toggle \" href=\"#\">");
		out.print("<i class=\"bi bi-search\"></i>");
		out.print("</a>");
		out.print("</li><!-- End Search Icon-->");

		out.print("<li class=\"nav-item dropdown\">");

		out.print("<a class=\"nav-link nav-icon\" href=\"#\" data-bs-toggle=\"dropdown\">");
		out.print("<i class=\"bi bi-bell\"></i>");
		out.print("<span class=\"badge bg-primary badge-number\">4</span>");
		out.print("</a><!-- End Notification Icon -->");

		out.print("<ul class=\"dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications\">");
		out.print("<li class=\"dropdown-header\">");
		out.print("You have 4 new notifications");
		out.print("<a href=\"#\"><span class=\"badge rounded-pill bg-primary p-2 ms-2\">View all</span></a>");
		out.print("</li>");
		out.print("<li>");
		out.print("<hr class=\"dropdown-divider\">");
		out.print("</li>");

		out.print("<li class=\"notification-item\">");
		out.print("<i class=\"bi bi-exclamation-circle text-warning\"></i>");
		out.print("<div>");
		out.print("<h4>Lorem Ipsum</h4>");
		out.print("<p>Quae dolorem earum veritatis oditseno</p>");
		out.print("<p>30 min. ago</p>");
		out.print("</div>");
		out.print("</li>");

		out.print("<li>");
		out.print("<hr class=\"dropdown-divider\">");
		out.print("</li>");

		out.print("<li class=\"notification-item\">");
		out.print("<i class=\"bi bi-x-circle text-danger\"></i>");
		out.print("<div>");
		out.print("<h4>Atque rerum nesciunt</h4>");
		out.print("<p>Quae dolorem earum veritatis oditseno</p>");
		out.print("<p>1 hr. ago</p>");
		out.print("</div>");
		out.print("</li>");

		out.print("<li>");
		out.print("<hr class=\"dropdown-divider\">");
		out.print("</li>");

		out.print("<li class=\"notification-item\">");
		out.print("<i class=\"bi bi-check-circle text-success\"></i>");
		out.print("<div>");
		out.print("<h4>Sit rerum fuga</h4>");
		out.print("<p>Quae dolorem earum veritatis oditseno</p>");
		out.print("<p>2 hrs. ago</p>");
		out.print("</div>");
		out.print("</li>");

		out.print("<li>");
		out.print("<hr class=\"dropdown-divider\">");
		out.print("</li>");

		out.print("<li class=\"notification-item\">");
		out.print("<i class=\"bi bi-info-circle text-primary\"></i>");
		out.print("<div>");
		out.print("<h4>Dicta reprehenderit</h4>");
		out.print("<p>Quae dolorem earum veritatis oditseno</p>");
		out.print("<p>4 hrs. ago</p>");
		out.print("</div>");
		out.print("</li>");

		out.print("<li>");
		out.print("<hr class=\"dropdown-divider\">");
		out.print("</li>");
		out.print("<li class=\"dropdown-footer\">");
		out.print("<a href=\"#\">Show all notifications</a>");
		out.print("</li>");

		out.print("</ul><!-- End Notification Dropdown Items -->");

		out.print("</li><!-- End Notification Nav -->");

		out.print("<li class=\"nav-item dropdown\">");

		out.print("<a class=\"nav-link nav-icon\" href=\"#\" data-bs-toggle=\"dropdown\">");
		out.print("<i class=\"bi bi-chat-left-text\"></i>");
		out.print("<span class=\"badge bg-success badge-number\">3</span>");
		out.print("</a><!-- End Messages Icon -->");

		out.print("<ul class=\"dropdown-menu dropdown-menu-end dropdown-menu-arrow messages\">");
		out.print("<li class=\"dropdown-header\">");
		out.print("You have 3 new messages");
		out.print("<a href=\"#\"><span class=\"badge rounded-pill bg-primary p-2 ms-2\">View all</span></a>");
		out.print("</li>");
		out.print("<li>");
		out.print("<hr class=\"dropdown-divider\">");
		out.print("</li>");

		out.print("<li class=\"message-item\">");
		out.print("<a href=\"#\">");
		out.print("<img src=\"assets/img/messages-1.jpg\" alt=\"\" class=\"rounded-circle\">");
		out.print("<div>");
		out.print("<h4>Maria Hudson</h4>");
		out.print("<p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>");
		out.print("<p>4 hrs. ago</p>");
		out.print("</div>");
		out.print("</a>");
		out.print("</li>");
		out.print("<li>");
		out.print("<hr class=\"dropdown-divider\">");
		out.print("</li>");

		out.print("<li class=\"message-item\">");
		out.print("<a href=\"#\">");
		out.print("<img src=\"assets/img/messages-2.jpg\" alt=\"\" class=\"rounded-circle\">");
		out.print("<div>");
		out.print("<h4>Anna Nelson</h4>");
		out.print("<p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>");
		out.print("<p>6 hrs. ago</p>");
		out.print("</div>");
		out.print("</a>");
		out.print("</li>");
		out.print("<li>");
		out.print("<hr class=\"dropdown-divider\">");
		out.print("</li>");

		out.print("<li class=\"message-item\">");
		out.print("<a href=\"#\">");
		out.print("<img src=\"assets/img/messages-3.jpg\" alt=\"\" class=\"rounded-circle\">");
		out.print("<div>");
		out.print("<h4>David Muldon</h4>");
		out.print("<p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>");
		out.print("<p>8 hrs. ago</p>");
		out.print("</div>");
		out.print("</a>");
		out.print("</li>");
		out.print("<li>");
		out.print("<hr class=\"dropdown-divider\">");
		out.print("</li>");

		out.print("<li class=\"dropdown-footer\">");
		out.print("<a href=\"#\">Show all messages</a>");
		out.print("</li>");

		out.print("</ul><!-- End Messages Dropdown Items -->");

		out.print("</li><!-- End Messages Nav -->");
		
		//Lấy thông tin đăng nhập trong phiên
		UserObject user = (UserObject)request.getSession().getAttribute("userLogined");
		

		out.print("<li class=\"nav-item dropdown pe-3\">");

		out.print(
				"<a class=\"nav-link nav-profile d-flex align-items-center pe-0\" href=\"#\" data-bs-toggle=\"dropdown\">");
		out.print("<img src=\"/adv/img/profile-img.jpg\" alt=\"Profile\" class=\"rounded-circle\">");
		out.print("<span class=\"d-none d-md-block dropdown-toggle ps-2\">"+user.getUser_fullname()+"</span>");
		out.print("</a><!-- End Profile Iamge Icon -->");

		
		
		
		out.print("<ul class=\"dropdown-menu dropdown-menu-end dropdown-menu-arrow profile\">");
		out.print("<li class=\"dropdown-header\">");
		out.print("<h6>"+user.getUser_fullname()+"</h6>");
		out.print("<span>"+user.getUser_name()+"</span>");
		out.print("</li>");
		out.print("<li>");
		out.print("<hr class=\"dropdown-divider\">");
		out.print("</li>");

		out.print("<li>");
		out.print("<a class=\"dropdown-item d-flex align-items-center\" href=\"/adv/user/profiles?t=e&id="+user.getUser_id()+"\">");
		out.print("<i class=\"bi bi-person\"></i>");
		out.print("<span>My Profile</span>");
		out.print("</a>");
		out.print("</li>");
		out.print("<li>");
		out.print("<hr class=\"dropdown-divider\">");
		out.print("</li>");

		out.print("<li>");
		out.print("<a class=\"dropdown-item d-flex align-items-center\" href=\"/adv/user/profiles?t=s&id="+user.getUser_id()+"\">");
		out.print("<i class=\"bi bi-gear\"></i>");
		out.print("<span>Account Settings</span>");
		out.print("</a>");
		out.print("</li>");
		out.print("<li>");
		out.print("<hr class=\"dropdown-divider\">");
		out.print("</li>");

		out.print("<li>");
		out.print("<a class=\"dropdown-item d-flex align-items-center\" href=\"pages-faq.html\">");
		out.print("<i class=\"bi bi-question-circle\"></i>");
		out.print("<span>Need Help?</span>");
		out.print("</a>");
		out.print("</li>");
		out.print("<li>");
		out.print("<hr class=\"dropdown-divider\">");
		out.print("</li>");

		out.print("<li>");
		out.print("<a class=\"dropdown-item d-flex align-items-center\" href=\"/adv/user/logout\">");
		out.print("<i class=\"bi bi-box-arrow-right\"></i>");
		out.print("<span>Sign Out</span>");
		out.print("</a>");
		out.print("</li>");

		out.print("</ul><!-- End Profile Dropdown Items -->");
		out.print("</li><!-- End Profile Nav -->");

		out.print("</ul>");
		out.print("</nav><!-- End Icons Navigation -->");

		out.print("</header><!-- End Header -->");
		
		RequestDispatcher menu = request.getRequestDispatcher("/menu");
		if(menu!=null) {
			menu.include(request, response);
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
