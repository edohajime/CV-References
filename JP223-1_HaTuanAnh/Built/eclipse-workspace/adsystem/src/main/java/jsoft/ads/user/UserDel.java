package jsoft.ads.user;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

import jsoft.ConnectionPool;
import jsoft.library.*;
import jsoft.objects.UserObject;

/**
 * Servlet implementation class UserDel
 */
@WebServlet("/user/del")
public class UserDel extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UserDel() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//Tìm id để xóa
		int id = Utilities.getIntParam(request, "id");
		if(id>0) {
			//Tìm bộ quản lý kết nối
			ConnectionPool cp =(ConnectionPool)getServletContext().getAttribute("CPool");
			//Tạo đối tượng thực thi
			UserControl uc =new UserControl(cp);
			if(cp==null) {
				getServletContext().setAttribute("CPool",uc.getCP());
				
			}
			
			//Tạo đối tượng để xóa 
			UserObject dUser = new UserObject();
			dUser.setUser_id(id);
			
			//Thực hiện xóa
			boolean result = uc.delUser(dUser);
			
			uc.releaseConnection();
			
			//Kiểm tra 
			if(result) {
				response.sendRedirect("/adv/user/view");
			}else {
				response.sendRedirect("/adv/user/view?err=notok");
			}
			
		}else {
			response.sendRedirect("/adv/user/view?err=id");
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
