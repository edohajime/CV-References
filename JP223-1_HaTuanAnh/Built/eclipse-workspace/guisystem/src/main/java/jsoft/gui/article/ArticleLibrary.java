package jsoft.gui.article;

import java.util.*;
import jsoft.library.*;
import jsoft.objects.*;

public class ArticleLibrary {

	public static String viewNews(ArrayList<ArticleObject> items, boolean isHomeView) {
		String tmp = "<div class=\"row row-cols-2 row-cols-md-3 g-4\">";
		int count = 0; // dem so bai viet duoc trinh bay
		for (ArticleObject item : items) {

			if (++count > 3 && isHomeView) {
				break;
			}
			tmp += "<div class=\"col\">";
			tmp += "<a href=\"/home/news/?id=" + item.getArticle_id() + "\" class=\"link-primary\">";
			tmp += "<div class=\"card\">";
			tmp += "<div class=\"card-myimg hovergallery\">";
			tmp += "<img src=\"" + item.getArticle_image() + "\" class=\"card-img-top \" alt=\"...\"/>";
			tmp += "</div>";
			tmp += "<div class=\"card-body\">";
			tmp += "<h5 class=\"card-title\">" + item.getArticle_title() + "</h5>";
			tmp += "<p class=\"card-text\">" + item.getArticle_summary() + "</p>";
			tmp += "</div>";
			tmp += "</div>";
			tmp += "</a>";
			tmp += "</div>";
		}

		tmp += "</div>";

		return tmp;
	}

	public static String viewSubNews(ArrayList<ArticleObject> items) {
		String tmp = "";

		tmp += "<!-- ======= Breadcrumbs ======= -->";
		tmp += "<div class=\"breadcrumbs\">";
		tmp += "<div class=\"container\">";
		tmp += "<div class=\"d-flex justify-content-between align-items-center\">";
		tmp += "<h2>Tin tức</h2>";
		tmp += "<ol>";
		tmp += "<li><a href=\"index.html\">Trang chủ</a></li>";
		tmp += "<li>Tin tức</li>";
		tmp += "</ol>";
		tmp += "</div>";
		tmp += "</div>";
		tmp += "</div><!-- End Breadcrumbs -->";

		tmp += "<!-- ======= Blog Section ======= -->";
		tmp += "<section id=\"blog\" class=\"blog\">";
		tmp += "<div class=\"container\" data-aos=\"fade-up\">";
		tmp += "<div class=\"row g-5\">";

		// Chèn lg-8
		tmp += "<div class=\"col-lg-8\">";

		tmp += ArticleLibrary.news(items);

		tmp += "</div>"; // col-lg-8

		// Đã chuyển sang sidebar.jsp
//		tmp += ArticleLibrary.sideBar(itemsA, itemsC);
//		tmp += "</div>"; // row g-5
//		tmp += "</div>"; // container data-aos="fade-up"
//		tmp += "</section>"; // section

		return tmp;
	}

	private static String news(ArrayList<ArticleObject> items) {
		String tmp = "";

		tmp += "<div class=\"row gy-4 posts-list\">";

		for (ArticleObject item : items) {
			tmp += "<div class=\"col-lg-6\">";

			tmp += "<div class=\"card\">";
			tmp += "<div class=\"card-body\">";
			tmp += "<h5 class=\"card-title\">" + item.getArticle_title() + "</h5>";
			tmp += "<p class=\"card-text\">" + item.getArticle_summary() + "</p>";
			tmp += "<p class=\"card-text\"><small class=\"text-muted\">" + item.getArticle_created_date()
					+ "</small></p>";
			tmp += "</div>";
			tmp += "<img src=\"" + item.getArticle_image() + "\" class=\"card-img-bottom\" alt=\"...\">";
			tmp += "</div>";

			tmp += "</div>";
		}

		tmp += "</div>";
		return tmp;
	}

	/**
	 * Phương thức hiển thị các bài viết gần đây trên cho sidebar.jsp
	 * 
	 * @param items
	 * @return
	 */
	public static String viewRecentNews(ArrayList<ArticleObject> items) {
		String tmp = "";

		for (ArticleObject item : items) {
			tmp += "<div class=\"post-item mt-3\">";
			tmp += "<img src=\"" + item.getArticle_image() + "\" alt=\"\" class=\"flex-shrink-0\">";
			tmp += "<div>";
			tmp += "<h4><a href=\"blog-post.html\">" + item.getArticle_title() + "</a></h4>";
			tmp += "<time datetime=\"" + item.getArticle_created_date() + "\"</time>";
			tmp += "</div>";
			tmp += "</div><!-- End recent post item-->";
		}

		return tmp;
	}

	public static String viewSubNewsV2(ArrayList<ArticleObject> items) {
		String tmp = "";

		tmp += "<!-- ======= Blog Section ======= -->";
		tmp += "<section id=\"blog\" class=\"blog\">";
		tmp += "<div class=\"container\" data-aos=\"fade-up\" data-aos-delay=\"100\">";

		tmp += "<div class=\"row gy-4 posts-list\">";

		for (ArticleObject item : items) {
			tmp += "<div class=\"col-xl-4 col-md-6\">";
			tmp += "<div class=\"post-item position-relative h-100\">";

			tmp += "<div class=\"post-img position-relative overflow-hidden\">";
			tmp += "<img src=\"" + item.getArticle_image() + "\" class=\"img-fluid\" alt=\"\">";
			tmp += "<span class=\"post-date\">" + item.getArticle_created_date() + "</span>";
			tmp += "</div>";

			tmp += "<div class=\"post-content d-flex flex-column\">";

			tmp += "<h3 class=\"post-title\">" + item.getArticle_title() + "</h3>";

			tmp += "<div class=\"meta d-flex align-items-center\">";
			tmp += "<div class=\"d-flex align-items-center\">";
			tmp += "<i class=\"bi bi-person\"></i> <span class=\"ps-2\">" + item.getArticle_author_name() + "</span>";
			tmp += "</div>";
			tmp += "<span class=\"px-3 text-black-50\">/</span>";
			tmp += "<div class=\"d-flex align-items-center\">";
			tmp += "<i class=\"bi bi-folder2\"></i> <span class=\"ps-2\">" + item.getCategory_name() + "</span>";
			tmp += "</div>";
			tmp += "</div>";

			tmp += "<p>";
			tmp += item.getArticle_summary();
			tmp += "</p>";

			tmp += "<hr>";

			tmp += "<a href=\"/home/news?id=" + item.getArticle_id()
					+ "\" class=\"readmore stretched-link\"><span>Xem tiếp</span><i class=\"bi bi-arrow-right\"></i></a>";

			tmp += "</div>";

			tmp += "</div>";

			tmp += "</div><!-- End post list item -->";
		}

		tmp += "</div><!-- End blog posts list -->";

		tmp += "<div class=\"blog-pagination\">";
		tmp += "<ul class=\"justify-content-center\">";
		tmp += "<li><a href=\"#\">1</a></li>";
		tmp += "<li class=\"active\"><a href=\"#\">2</a></li>";
		tmp += "<li><a href=\"#\">3</a></li>";
		tmp += "</ul>";
		tmp += "</div><!-- End blog pagination -->";

		tmp += "</div>";
		tmp += "</section><!-- End Blog Section -->";

		return tmp;
	}

	/**
	 * Phương thức hiển thị một bài viết
	 * 
	 * @param item
	 * @return
	 */
	public static String viewArticleDetail(ArticleObject item, HashMap<CategoryObject, Integer> cates) {
		String tmp = "";

		tmp += "<!-- ======= Blog Details Section ======= -->";
		tmp += "<section id=\"blog\" class=\"blog\">";
		tmp += "<div class=\"container\" data-aos=\"fade-up\" data-aos-delay=\"100\">";
		tmp += "<div class=\"row g-5\">";
		tmp += "<div class=\"col-lg-8\">";
		tmp += "<article class=\"blog-details\">";
		tmp += "<div class=\"post-img\">";
		tmp += "<img src=\"" + item.getArticle_image() + "\" alt=\"\" class=\"img-fluid\">";
		tmp += "</div>";
		tmp += "<h2 class=\"title\">" + item.getArticle_title() + "</h2>";
		tmp += "<div class=\"meta-top\">";
		tmp += "<ul>";
		tmp += "<li class=\"d-flex align-items-center\"><i class=\"bi bi-person\"></i> <a href=\"#post-author\">"
				+ item.getArticle_author_name() + "</a></li>";
		tmp += "<li class=\"d-flex align-items-center\"><i class=\"bi bi-clock\"></i> <a href=\"blog-details.html\"><time datetime=\"2020-01-01\">Jan 1, 2022</time></a></li>";
		tmp += "<li class=\"d-flex align-items-center\"><i class=\"bi bi-chat-dots\"></i> <a href=\"blog-details.html\">12 Comments</a></li>";
		tmp += "</ul>";
		tmp += "</div><!-- End meta top -->";
		tmp += "<div class=\"content\">";
		tmp += "<blockquote>";
		tmp += "<p>" + item.getArticle_summary() + "</p>";
		tmp += "</blockquote>";

		tmp += Utilities.decodeFromHTML(item.getArticle_content());

		tmp += "</div><!-- End post content -->";
		tmp += "<div class=\"meta-bottom\">";
		tmp += "<i class=\"bi bi-folder\"></i>";
		tmp += "<ul class=\"cats\">";
		tmp += "<li><a href=\"#\">" + item.getCategory_name() + "</a></li>";
		tmp += "</ul>";
		tmp += "<i class=\"bi bi-tags\"></i>";
		tmp += "<ul class=\"tags\">";
		tmp += "<li><a href=\"#\">" + item.getArticle_tag() + "</a></li>";
		tmp += "</ul>";
		tmp += "</div><!-- End meta bottom -->";
		tmp += "</article><!-- End blog post -->";
		tmp += "<div class=\"post-author d-flex align-items-center\" id=\"post-author\">";
		tmp += "<img src=\"assets/img/blog/blog-author.jpg\" class=\"rounded-circle flex-shrink-0\" alt=\"\">";
		tmp += "<div>";
		tmp += "<h4>" + item.getArticle_author_name() + "</h4>";
		tmp += "<div class=\"social-links\">";
		tmp += "<a href=\"https://twitters.com/#\"><i class=\"bi bi-twitter\"></i></a>";
		tmp += "<a href=\"https://facebook.com/#\"><i class=\"bi bi-facebook\"></i></a>";
		tmp += "<a href=\"https://instagram.com/#\"><i class=\"biu bi-instagram\"></i></a>";
		tmp += "</div>";
		tmp += "</div>";
		tmp += "</div><!-- End post author -->";
		tmp += "</div>";

		// Sidebar
		tmp += "<div class=\"col-lg-4\">";
		tmp += "<div class=\"sidebar\">";
		tmp += "<div class=\"sidebar-item search-form\">";
		tmp += "<h3 class=\"sidebar-title\">Search</h3>";
		tmp += "<form action=\"\" class=\"mt-3\">";
		tmp += "<input type=\"text\">";
		tmp += "<button type=\"submit\"><i class=\"bi bi-search\"></i></button>";
		tmp += "</form>";
		tmp += "</div><!-- End sidebar search formn-->";

		tmp += ArticleLibrary.viewCategories(cates);

		tmp += "<div class=\"sidebar-item recent-posts\">";
		tmp += "<h3 class=\"sidebar-title\">Recent Posts</h3>";
		tmp += "<div class=\"mt-3\">";
		tmp += "<div class=\"post-item mt-3\">";
		tmp += "<img src=\"assets/img/blog/blog-recent-1.jpg\" alt=\"\">";
		tmp += "<div>";
		tmp += "<h4><a href=\"blog-details.html\">Nihil blanditiis at in nihil autem</a></h4>";
		tmp += "<time datetime=\"2020-01-01\">Jan 1, 2020</time>";
		tmp += "</div>";
		tmp += "</div><!-- End recent post item-->";
		tmp += "<div class=\"post-item\">";
		tmp += "<img src=\"assets/img/blog/blog-recent-2.jpg\" alt=\"\">";
		tmp += "<div>";
		tmp += "<h4><a href=\"blog-details.html\">Quidem autem et impedit</a></h4>";
		tmp += "<time datetime=\"2020-01-01\">Jan 1, 2020</time>";
		tmp += "</div>";
		tmp += "</div><!-- End recent post item-->";
		tmp += "<div class=\"post-item\">";
		tmp += "<img src=\"assets/img/blog/blog-recent-3.jpg\" alt=\"\">";
		tmp += "<div>";
		tmp += "<h4><a href=\"blog-details.html\">Id quia et et ut maxime similique occaecati ut</a></h4>";
		tmp += "<time datetime=\"2020-01-01\">Jan 1, 2020</time>";
		tmp += "</div>";
		tmp += "</div><!-- End recent post item-->";
		tmp += "<div class=\"post-item\">";
		tmp += "<img src=\"assets/img/blog/blog-recent-4.jpg\" alt=\"\">";
		tmp += "<div>";
		tmp += "<h4><a href=\"blog-details.html\">Laborum corporis quo dara net para</a></h4>";
		tmp += "<time datetime=\"2020-01-01\">Jan 1, 2020</time>";
		tmp += "</div>";
		tmp += "</div><!-- End recent post item-->";
		tmp += "<div class=\"post-item\">";
		tmp += "<img src=\"assets/img/blog/blog-recent-5.jpg\" alt=\"\">";
		tmp += "<div>";
		tmp += "<h4><a href=\"blog-details.html\">Et dolores corrupti quae illo quod dolor</a></h4>";
		tmp += "<time datetime=\"2020-01-01\">Jan 1, 2020</time>";
		tmp += "</div>";
		tmp += "</div><!-- End recent post item-->";
		tmp += "</div>";
		tmp += "</div><!-- End sidebar recent posts-->";
		tmp += "<div class=\"sidebar-item tags\">";
		tmp += "<h3 class=\"sidebar-title\">Tags</h3>";
		tmp += "<ul class=\"mt-3\">";
		tmp += "<li><a href=\"#\">App</a></li>";
		tmp += "<li><a href=\"#\">IT</a></li>";
		tmp += "<li><a href=\"#\">Business</a></li>";
		tmp += "<li><a href=\"#\">Mac</a></li>";
		tmp += "<li><a href=\"#\">Design</a></li>";
		tmp += "<li><a href=\"#\">Office</a></li>";
		tmp += "<li><a href=\"#\">Creative</a></li>";
		tmp += "<li><a href=\"#\">Studio</a></li>";
		tmp += "<li><a href=\"#\">Smart</a></li>";
		tmp += "<li><a href=\"#\">Tips</a></li>";
		tmp += "<li><a href=\"#\">Marketing</a></li>";
		tmp += "</ul>";
		tmp += "</div><!-- End sidebar tags-->";
		tmp += "</div><!-- End Blog Sidebar -->";
		tmp += "</div>";
		tmp += "</div>";
		tmp += "</div>";
		tmp += "</section><!-- End Blog Details Section -->";

		return tmp;

	}

	private static String viewCategories(HashMap<CategoryObject, Integer> cates) {
		String tmp = "";

		tmp += "<div class=\"sidebar-item categories\">";
		tmp += "<h3 class=\"sidebar-title\">Categories</h3>";
		tmp += "<ul class=\"mt-3\">";
		for (Map.Entry<CategoryObject, Integer> cate : cates.entrySet()) {
			tmp += "<li><a href=\"/home/news/?cid=" + cate.getKey().getCategory_id() + "\">"
					+ cate.getKey().getCategory_name() + " <span>(" + cate.getValue() + ")</span></a></li>";
		}
		tmp += "</ul>";
		tmp += "</div><!-- End sidebar categories-->";

		return tmp;
	}
}
