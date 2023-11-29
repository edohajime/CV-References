package com.evadeeva.eva.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.evadeeva.eva.models.Article;

/**
 * Class thuc hien truy van thong tin bang article trong database
 * 
 * @author TUAN ANH
 * @version 1.00
 */
public interface ArticleRepository extends JpaRepository<Article, Long> {
	// Lấy danh sách tất cả article
	@Query("SELECT a FROM article ORDER BY article_id DESC")
	Page<Article> getListArticle(Pageable pageable);
	
	// Lấy tất cả article của một danh mục cụ thể
	@Query("SELECT a FROM article a WHERE a.category.category_id = ?1 ORDER BY article_id DESC")
	Page<Article> getListArticleOfCategory(short category_id, Pageable pageable);
	
	// Lấy n article theo danh mục cụ thể
	@Query("SELECT TOP(?1) * FROM article a WHERE a.category.category_id=?2 ORDER BY article_id DESC")
	List<Article> getListNArticleOfCategory(short n, int category_id);
}
