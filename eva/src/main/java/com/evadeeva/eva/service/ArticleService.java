package com.evadeeva.eva.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.evadeeva.eva.models.Article;
import com.evadeeva.eva.models.ArticleImage;
import com.evadeeva.eva.models.ArticleImageModel;
import com.evadeeva.eva.models.ArticleModel;


public interface ArticleService {
	// Thêm mới article
	ArticleModel createArticle(ArticleModel articleModel);
	
	// Lấy danh sách tất cả bài viết có phân trang
	Page<Article> getListArticle(Pageable pageable);
	
	// Lấy tất cả bài viết của một danh mục cụ thể
	Page<Article> getListArticleOfCategory(short category_id, Pageable pageable);
	
	// Lấy n bài viết theo danh mục cụ thể
	List<Article> getListNArticleOfCategory(short n, int category_id);

	// Lấy 1 bài viết cụ thể
	ArticleModel getArticleById(Long article_id);
	
	// Sửa bài viết
	ArticleModel updateArticle(ArticleModel articleModel);
	
	// Xóa bài viết
	void deleteArticle(Long id);
	
	// Thêm mới hình ảnh bài viết
	ArticleImageModel createArticleImage(ArticleImageModel articleImageModel);
	
	// Lấy tất cả hình ảnh bài viết có phân trang
	Page<ArticleImage> getListArticleImage(Pageable pageable);
	
	// Lấy tất cả hình ảnh của một bài viết cụ thể
	List<ArticleImage> getListArticleImageOfArticle(Long id);

	// Lấy 1 hình ảnh bài viết cụ thể
	ArticleImageModel getArticleImageById(Long id);
	
	// Sửa hình ảnh bài viết
	ArticleImageModel updateArticleImage(ArticleImageModel articleImageModel);
	
	// Xóa hình ảnh bài viết
	void deleteArticleImage(Long id);


}
