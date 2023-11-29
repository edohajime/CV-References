package com.evadeeva.eva.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.evadeeva.eva.models.ArticleImage;

/**
 * Class thuc hien truy van thong tin bang article_image trong database
 * 
 * @author TUAN ANH
 * @version 1.00
 */
public interface ArticleImageRepository extends JpaRepository<ArticleImage, Long> {
	@Query(value = "SELECT * FROM article_image ORDER BY article_image_id DESC", nativeQuery = true)
	Page<ArticleImage> getListArticleImage(Pageable pageable);
	
	@Query("SELECT a FROM article_image a WHERE a.article.article_id = ?1")
	List<ArticleImage> getListArticleImageOfArticle(Long article_id);
	
	
}
