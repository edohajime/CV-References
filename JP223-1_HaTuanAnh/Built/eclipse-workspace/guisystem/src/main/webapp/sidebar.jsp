<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div class="col-lg-4">
	<div class="sidebar">
		<div class="sidebar-item search-form">
			<h3 class="sidebar-title">Search</h3>
			<form action="" class="mt-3">
				<input type="text">
				<button type="submit"><i class="bi bi-search"></i></button>
			</form>
		</div><!-- End sidebar search form -->
		<div class="sidebar-item categories">
			<h3 class="sidebar-title">Chuyên mục</h3>
			<ul class="mt-3">
				<li><a href="#">General <span>(25)</span></a></li>
				<li><a href="#">Lifestyle <span>(12)</span></a></li>
				<li><a href="#">Travel <span>(5)</span></a></li>
				<li><a href="#">Design <span>(22)</span></a></li>
				<li><a href="#">Creative <span>(8)</span></a></li>
				<li><a href="#">Educaion <span>(14)</span></a></li>
			</ul>
		</div><!-- End sidebar categories-->
		
		<%
		// Tim cau truc hien thi recentPost do trang data.jsp truyen cho trong session
		String recentNews = (String) session.getAttribute("recentNews");
		
		if (recentNews != null) {
		%>
		<!-- Sidebar recent news -->
		<div class="sidebar-item recent-posts">
			<h3 class="sidebar-title">Tin tức mới nhất</h3>
			<div class="mt-3">
				<%
				out.print(recentNews);
				%>
			</div>
		</div>
		<!-- End sidebar recent news-->
		<% } %>
		
		<%
		// Tim cau truc hien thi categories sidebar do trang data.jsp truyen cho trong session
		String categories = (String) session.getAttribute("categories");
		
		if (categories != null) {
		%>
		<div class="sidebar-item tags">
			<h3 class="sidebar-title">Thể loại</h3>
			<ul class="mt-3">
				<%
				out.print(categories);
				%>
			</ul>
		</div><!-- End sidebar tags-->
		<% } %>
		
	</div><!-- End Blog Sidebar -->
</div>

<!-- Đã chuyển từ ArticleLibrary sang -->
</div>
</div>
</section>