package jsoft.ads.user.profiles;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import jsoft.*;
import jsoft.ads.user.UserControl;
import jsoft.library.Utilities;
import jsoft.objects.*;

import java.time.*;

/**
 * Servlet implementation class overview
 */
@WebServlet("/user/profiles/edit")
public class edit extends HttpServlet {
	private static final long serialVersionUID = 1L;
	// Định nghĩa kiểu nội dung xuất về trình khách
	private static final String CONTENT_TYPE = "text/html; charset=utf-8";

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public edit() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		// Xác định kiểu nội dung xuất về trình khách
		response.setContentType(CONTENT_TYPE);
		int id = Utilities.getIntParam(request, "id");
		
		String name = "", fullname="", address="", email="";
		String phone = "", mobile="", created_date="", notes="";
		
		//Biến xác nhận chắc chắn tồn tại đối tượng để sửa
		boolean isEdit = false;

		if(id>0) {
			ConnectionPool cp = (ConnectionPool)getServletContext().getAttribute("CPool");
			UserControl uc = new UserControl(cp);
			if(cp==null) {
				getServletContext().setAttribute("CPool", uc.getCP());
			}
			
			//Lấy người sử dụng và bóc tách thông tin
			UserObject user = uc.getUserObject(id);
			//Đưa dữ liệu người sử dụng này vào phiên để có thể chỉnh sửa (dùng bên edit)
			request.getSession().setAttribute("userEdit",user);
			
			//Trả về kết nối
			uc.releaseConnection();
			
			//Tách thông tin
			if(user!=null) {
				name = user.getUser_name();
				fullname = user.getUser_fullname();
				address = user.getUser_address();
				email = user.getUser_email();
				phone = user.getUser_homephone();
				mobile = user.getUser_mobilephone();
				created_date = user.getUser_created_date();
				notes = user.getUser_notes();
				
				isEdit = true;//Tồn tại đối tượng để sửa
				
			}
		}
		// Tạo đối tượng xuất nội dung (html) về trình khách
		PrintWriter out = response.getWriter();

		out.print("<!--Edit-->");
		//Xác định tab để mở
		String tab = request.getParameter("t");
		String show = "";
		if(tab!=null && tab.equalsIgnoreCase("e")) {
			show ="show active";
		}
		out.print("<div class=\"tab-pane fade "+show+" profile-edit pt-3\" id=\"profile-edit\">");

		out.print("<!-- Profile Edit Form -->");
		out.print("<form>");
		out.print("<div class=\"row mb-3\">");
		out.print("<label for=\"profileImage\" class=\"col-md-4 col-lg-3 col-form-label\">Profile Image</label>");
		out.print("<div class=\"col-md-8 col-lg-9\">");
		out.print("<img src=\"assets/img/profile-img.jpg\" alt=\"Profile\">");
		out.print("<div class=\"pt-2\">");
		out.print("<a href=\"#\" class=\"btn btn-primary btn-sm\" title=\"Upload new profile image\"><i class=\"bi bi-upload\"></i></a>");
		out.print("<a href=\"#\" class=\"btn btn-danger btn-sm\" title=\"Remove my profile image\"><i class=\"bi bi-trash\"></i></a>");
		out.print("</div>");
		out.print("</div>");
		out.print("</div>");

		out.print("<div class=\"row mb-3\">");
		out.print("<label for=\"fullName\" class=\"col-md-4 col-lg-3 col-form-label\">Full Name</label>");
		out.print("<div class=\"col-md-5 col-lg-6\">");
		out.print("<input name=\"fullName\" type=\"text\" class=\"form-control\" id=\"fullName\" value=\""+fullname+"\">");
		out.print("</div>");
		out.print("<div class=\"col-md-3 col-lg-3\">");
		out.print("<input name=\"name\" type=\"text\" disabled class=\"form-control\" id=\"name\" value=\""+name+"\">");
		out.print("</div>");
		out.print("</div>");

		out.print("<div class=\"row mb-3\">");
		out.print("<label for=\"about\" class=\"col-md-4 col-lg-3 col-form-label\">About</label>");
		out.print("<div class=\"col-md-8 col-lg-9\">");
		out.print("<textarea name=\"about\" class=\"form-control\" id=\"About\" style=\"height: 100px\">"+notes+"</textarea>");
		out.print("</div>");
		out.print("</div>");

		out.print("<div class=\"row mb-3\">");
		out.print("<label for=\"Mobile\" class=\"col-md-4 col-lg-3 col-form-label\">Mobile</label>");
		out.print("<div class=\"col-md-8 col-lg-9\">");
		out.print("<input name=\"mobile\" type=\"text\" class=\"form-control\" id=\"Mobile\" value=\""+mobile+"\">");
		out.print("</div>");
		out.print("</div>");


		out.print("<div class=\"row mb-3\">");
		out.print("<label for=\"Address\" class=\"col-md-4 col-lg-3 col-form-label\">Address</label>");
		out.print("<div class=\"col-md-8 col-lg-9\">");
		out.print("<input name=\"address\" type=\"text\" class=\"form-control\" id=\"Address\" value=\""+address+"\">");
		out.print("</div>");
		out.print("</div>");

		out.print("<div class=\"row mb-3\">");
		out.print("<label for=\"Phone\" class=\"col-md-4 col-lg-3 col-form-label\">Phone</label>");
		out.print("<div class=\"col-md-8 col-lg-9\">");
		out.print("<input name=\"phone\" type=\"text\" class=\"form-control\" id=\"Phone\" value=\""+phone+"\">");
		out.print("</div>");
		out.print("</div>");

		out.print("<div class=\"row mb-3\">");
		out.print("<label for=\"Email\" class=\"col-md-4 col-lg-3 col-form-label\">Email</label>");
		out.print("<div class=\"col-md-8 col-lg-9\">");
		out.print("<input name=\"email\" type=\"email\" class=\"form-control\" id=\"Email\" value=\""+email+"\">");
		out.print("</div>");
		out.print("</div>");


		out.print("<div class=\"text-center\">");
		out.print("<button type=\"submit\" onclick=\"editProfile(this.form)\" class=\"btn btn-primary\">Save Changes</button>");
		out.print("</div>");
		
		if(isEdit) {
			//Truyền id cho doPost()  theo cơ chế biến form ẩn
			out.print("<input type=\"hidden\" name=\"idForPost\" value=\""+id+"\" >");
		}
		out.print("</form><!-- End Profile Edit Form -->");

		out.print("</div>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		//Đọc thông tin và thực hiện cập nhật - Tự làm
		
		//Thiết lập tập ký tự cần lấy
		request.setCharacterEncoding("utf-8");
		
		//Lấy thông tin bắt buộc
		int id = Utilities.getIntParam(request,"idForPost");
		
		String email = request.getParameter("email");
		
		if(id>0 && email!=null &&!email.equalsIgnoreCase("")) {
			//Lấy tiếp thông tin
			String fullname = request.getParameter("fullName");
			String notes = request.getParameter("about");
			String mobile = request.getParameter("mobile");
			String address = request.getParameter("address");
			String phone = request.getParameter("phone");
			
			//Tạo đối tượng để lưu trữ các thông tin
			UserObject eUser = new UserObject();
			eUser.setUser_id(id);
			eUser.setUser_fullname(Utilities.encodeToHtml(fullname));
			eUser.setUser_email(email);
			eUser.setUser_notes(Utilities.encodeToHtml(notes));
			eUser.setUser_mobilephone(mobile);
			eUser.setUser_address(Utilities.encodeToHtml(address));
			eUser.setUser_homephone(phone);
			
			//Tìm bộ quản lý kết nối
			ConnectionPool cp =(ConnectionPool)getServletContext().getAttribute("CPool");
			//Tạo đối tượng thực thi
			UserControl uc =new UserControl(cp);
			if(cp==null) {
				getServletContext().setAttribute("CPool",uc.getCP());
				
			}
			
			//Thực hiện
			boolean result = uc.editUser(eUser);
			//Trả về kết nối
			uc.releaseConnection();
			
			//Thông báo 
			if(result) {
				response.sendRedirect("/adv/user/view");
			}else {
				response.sendRedirect("/adv/user/profiles?err=notok&id="+id);
			}
			
		}else {
			response.sendRedirect("/adv/user/profiles?err=param&id="+id);
		}
		
	}

}
