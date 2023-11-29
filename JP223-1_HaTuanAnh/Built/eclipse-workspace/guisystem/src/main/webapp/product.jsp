<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- PRODUCT -->
<section id="portfolio" class="portfolio">
	<div class="container" data-aos="fade-up">

		<div class="col-md-12 text-center">
			<h2>Sản phẩm <span class="badge bg-primary"><i class="fa-brands fa-product-hunt"></i></span></h2>
		</div>

		<%
		// Tìm cấu trúc hiển thị do trang data.jsp truyền cho trong session
		String products = (String) session.getAttribute("products");
		
		if (products != null) {
			out.print(products);
		}
		
		
		%>

	</div>
   </section><!-- End Portfolio Section -->
<!-- END PRODUCT -->