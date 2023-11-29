package jsoft.gui.product;

import java.util.*;

import jsoft.objects.ProductObject;
import jsoft.library.*;

public class ProductLibrary {
	public static String viewProduct(ArrayList<ProductObject> items) {
		String tmp = "";

		
		int count = 0;
		for (ProductObject item : items) {
			if (count++%3==0) {
				tmp += "<div class=\"d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 row\">";
				
			}
			tmp += "<div class=\"col-4\">";
			
			tmp += "<div class=\"bg-light my-md-3 pt-1 px-1 pt-md-3 px-md-3 text-center overflow-hidden\">";
			tmp += "<div class=\"my-1 p-1 h-50\">";
			tmp += "<h2 class=\"fs-5 fw-bolder text-uppercase\">"+item.getProduct_name()+"</h2>";
			tmp += Utilities.decodeFromHTML(item.getProduct_intro());
			tmp += "</div>";
			tmp += "<div class=\"bg-body shadow-sm mx-auto mx-1 my-1\" style=\"width: 98%; height: 300px;\">";
			tmp += "<img src=\"" + item.getProduct_image() + "\">";
			tmp += "</div>";
			tmp += "</div>";
			
			tmp += "</div>";
			
			if (count%3==0) {
				tmp += "</div>";
			}
			
		}


//		tmp += "<div class=\"row\" data-aos=\"fade-up\" data-aos-delay=\"100\">";
//		
//		tmp += "<div class=\"col-lg-12 d-flex justify-content-center\">";
//		tmp += "<ul id=\"portfolio-flters\">";
//		tmp += "<li data-filter=\"*\" class=\"filter-active\">All</li>";
//		tmp += "<li data-filter=\".filter-app\">App</li>";
//		tmp += "<li data-filter=\".filter-card\">Card</li>";
//		tmp += "<li data-filter=\".filter-web\">Web</li>";
//		tmp += "</ul>";
//		tmp += "</div>";
//		tmp += "</div>";
//		tmp += "<div class=\"row portfolio-container\" data-aos=\"fade-up\" data-aos-delay=\"200\">";
//		for (ProductObject item : items) {
//			
//			tmp += "<div class=\"col-lg-4 col-md-6 portfolio-item filter-app\">";
//			tmp += "<div class=\"portfolio-wrap\">";
//			tmp += "<img src=\"/home/uploads/MSU881.jpg\" class=\"img-fluid\" alt=\"\">";
//			tmp += "<div class=\"portfolio-info\">";
//			tmp += "<h4>App 1</h4>";
//			tmp += "<p>App</p>";
//			tmp += "<div class=\"portfolio-links\">";
//			tmp += "<a href=\"assets/img/portfolio/portfolio-1.jpg\" data-gallery=\"portfolioGallery\" class=\"portfolio-lightbox\" title=\"App 1\"><i class=\"bx bx-plus\"></i></a>";
//			tmp += "<a href=\"portfolio-details.html\" class=\"portfolio-details-lightbox\" data-glightbox=\"type: external\" title=\"Portfolio Details\"><i class=\"bx bx-link\"></i></a>";
//			tmp += "</div>";
//			tmp += "</div>";
//			tmp += "</div>";
//			tmp += "</div>";
//		}
//
//		tmp += "</div>";
//		tmp += "</div>";

		return tmp;
	}
}
