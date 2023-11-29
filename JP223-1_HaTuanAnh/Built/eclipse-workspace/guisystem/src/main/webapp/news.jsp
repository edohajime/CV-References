<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="jsoft.library.*" %>
<!-- NEWS -->
<div class="container-lg">
	<div class="row my-5">
		<div class="col-md-12 text-center">
			<h2>
				Tin tức mới <span class="badge bg-primary"><i class="fa-solid fa-file-lines"></i></span>
			</h2>
		</div>
	</div>

	<%
	// Tim cau truc hien thi do trang data.jsp truyen cho trong session
	
	// Tìm id xem chi tiết nếu có
	int id = Utilities.getIntParam(request, "id");
	
	if(id>0){
		String detail = (String) session.getAttribute("detail");
		if(detail != null){
			out.print(detail);
		}
	} else {
	
		int at = request.getRequestURI().substring(6).indexOf("/");
		String news = null;
		if (at != -1) {
			news = (String) session.getAttribute("subnews");
		} else {
			news = (String) session.getAttribute("homenews");
		}
		if (news != null) {
			out.print(news);
		}
	}
	%>

