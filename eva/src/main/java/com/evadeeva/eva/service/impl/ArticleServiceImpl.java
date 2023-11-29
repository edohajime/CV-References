package com.evadeeva.eva.service.impl;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;

import com.evadeeva.eva.models.Article;
import com.evadeeva.eva.models.ArticleImage;
import com.evadeeva.eva.models.ArticleImageModel;
import com.evadeeva.eva.models.ArticleModel;
import com.evadeeva.eva.models.Category;
import com.evadeeva.eva.models.User;
import com.evadeeva.eva.repositories.ArticleImageRepository;
import com.evadeeva.eva.repositories.ArticleRepository;
import com.evadeeva.eva.repositories.CategoryRepository;
import com.evadeeva.eva.repositories.UserRepository;
import com.evadeeva.eva.service.ArticleService;

public class ArticleServiceImpl implements ArticleService {
	@Autowired
	ArticleRepository articleRepos;
	
	@Autowired
	ArticleImageRepository articleImgRepos;
	
	@Autowired
	UserRepository userRepos;
	
	@Autowired
	CategoryRepository cateRepos;

	/**
	 * Thêm mới bài viết
	 */
	@Override
	public ArticleModel createArticle(ArticleModel articleModel) {
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());

		Article article = new Article();
		article.setTitle(articleModel.getTitle());
		article.setContent(articleModel.getContent());
		article.setCreatedDate(timestamp.toString());
		article.setModifiedDate(timestamp.toString());
		
		User user = userRepos.findById(articleModel.getArticle_id()).get();
		Category category = cateRepos.findById(articleModel.getCategory_id()).get();
		
		article.setUser(user);
		article.setCategory(category);
		
		List<ArticleImage> listImage = articleImgRepos.getListArticleImageOfArticle(articleModel.getArticle_id());
		article.setListImage(listImage);
		
		
		articleRepos.save(article);
		
		return articleModel;
	}

	/**
	 * Lấy danh sách phân trang tất cả bài viết
	 */
	@Override
	public Page<Article> getListArticle(Pageable pageable) {
		return articleRepos.getListArticle(pageable);
	}

	/**
	 * Lấy danh sách tất cả bài viết của 1 danh mục cụ thể có phân trang
	 */
	@Override
	public Page<Article> getListArticleOfCategory(short category_id, Pageable pageable) {
		return articleRepos.getListArticleOfCategory(category_id, pageable);
	}

	/**
	 * Lấy n bài viết của 1 danh mục cụ thể
	 */
	@Override
	public List<Article> getListNArticleOfCategory(short n, int category_id) {
		return articleRepos.getListNArticleOfCategory(n, category_id);
	}

	/**
	 * Lấy 1 bài viết cụ thể theo ID
	 */
	@Override
	public ArticleModel getArticleById(Long article_id) {
		Article article = articleRepos.findById(article_id).get();
		ArticleModel articleModel = new ArticleModel();
		articleModel.setArticle_id(article.getArticle_id());
		articleModel.setTitle(article.getTitle());
		articleModel.setUser_id(article.getUser().getId());
		//articleModel.setCategory_id(article.getCategory().getId());
		
		return articleModel;
	}

	/**
	 * Sửa thông tin bài viết
	 */
	@Override
	public ArticleModel updateArticle(ArticleModel articleModel) {
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		
		Article article = articleRepos.findById(articleModel.getArticle_id()).get();
		
		article.setTitle(article.getTitle());
		article.setContent(articleModel.getContent());
		article.setModifiedDate(timestamp.toString());
		
		User user = userRepos.findById(articleModel.getUser_id()).get();
		Category category = cateRepos.findById(articleModel.getCategory_id()).get();
		article.setUser(user);
		article.setCategory(category);
		
		articleRepos.save(article);
		
		return articleModel;
	}

	/**
	 * Xóa bài viết
	 */
	@Override
	public void deleteArticle(Long id) {
		Article article = articleRepos.findById(id).get();
		
		articleRepos.delete(article);
	}

	/**
	 * Thêm mới hình ảnh bài viết
	 */
	@Override
	public ArticleImageModel createArticleImage(ArticleImageModel articleImageModel) {
		ArticleImage articleImage = new ArticleImage();
		
		articleImage.setUrl(articleImageModel.getUrl());
		Article article = articleRepos.findById(articleImageModel.getArticle_id()).get();
		articleImage.setArticle(article);
		
		articleImgRepos.save(articleImage);
		
		return articleImageModel;	
	}

	/**
	 * Lấy tất cả hình ảnh bài viết có phân trang
	 */
	@Override
	public Page<ArticleImage> getListArticleImage(Pageable pageable) {
		return articleImgRepos.getListArticleImage(pageable);
	}

	/**
	 * Lấy tất cả hình ảnh của một bài viết cụ thể
	 */
	@Override
	public List<ArticleImage> getListArticleImageOfArticle(Long id) {
		return articleImgRepos.getListArticleImageOfArticle(id);
	}

	/**
	 * Lấy 1 hình ảnh bài viết cụ thể
	 */
	@Override
	public ArticleImageModel getArticleImageById(Long id) {
		ArticleImageModel articleImgModel = new ArticleImageModel();
		ArticleImage articleImage = articleImgRepos.findById(id).get();
		
		articleImgModel.setArticle_image_id(articleImage.getArticle_image_id());
		articleImgModel.setUrl(articleImage.getUrl());
		articleImgModel.setArticle_id(articleImage.getArticle().getArticle_id());
		
		return articleImgModel;
	}

	/**
	 * Sửa hình ảnh bài viết
	 */
	@Override
	public ArticleImageModel updateArticleImage(ArticleImageModel articleImageModel) {
		ArticleImage articleImage = articleImgRepos.findById(articleImageModel.getArticle_image_id()).get();
		
		articleImage.setUrl(articleImageModel.getUrl());
		
		articleImgRepos.save(articleImage);
		
		return articleImageModel;
	}

	/**
	 * Xóa hình ảnh bài viết
	 */
	@Override
	public void deleteArticleImage(Long id) {
		ArticleImage articleImage = articleImgRepos.findById(id).get();
		articleImgRepos.delete(articleImage);
	}
	

}
