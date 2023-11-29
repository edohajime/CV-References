package com.evadeeva.eva.rest;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.evadeeva.eva.models.Article;
import com.evadeeva.eva.models.ArticleImage;
import com.evadeeva.eva.models.ArticleImageModel;
import com.evadeeva.eva.models.ArticleModel;
import com.evadeeva.eva.service.ArticleService;

@RestController
@RequestMapping("/blogs")
public class ArticleRest {
	@Autowired
	ArticleService articleService;
	
	@PostMapping("/form")
	public ArticleModel createArticle(@RequestBody ArticleModel articleModel) {
		return articleService.createArticle(articleModel);
	}
	
	@GetMapping()
	public Page<Article> getListArticle(Pageable pageable){
		return articleService.getListArticle(pageable);
	}

	@GetMapping("{cate_id}")
	public Page<Article> getListArticleOfCategory(@PathVariable("cate_id") short category_id, Pageable pageable){
		return articleService.getListArticleOfCategory(category_id, pageable);
	}
	
	@GetMapping("{id}")
	public ArticleModel getArticleById(@PathVariable("id") Long article_id) {
		return articleService.getArticleById(article_id);
	}
	
	@PutMapping("/form/{id}")
	public ArticleModel updateArticle(@PathVariable("id") Long id, @RequestBody ArticleModel articleModel) {
		return articleService.updateArticle(articleModel);
	}
	
	@DeleteMapping("{id}")
	public void deleteArticle(@PathVariable("id") Long id) {
		articleService.deleteArticle(id);
	}
	
	@PostMapping("/images/form")
	public ArticleImageModel createArticleImage(@RequestBody ArticleImageModel articleImageModel) {
		return articleService.createArticleImage(articleImageModel);
	}

	@GetMapping("/images/")
	public Page<ArticleImage> getListArticleImage(Pageable pageable) {
		return articleService.getListArticleImage(pageable);
	}
	
	@GetMapping("{id}")
	public List<ArticleImage> getListArticleImageOfArticle(@PathVariable("id") Long id) {
		return articleService.getListArticleImageOfArticle(id);
	}
	
	@GetMapping("/images/{id}")
	public ArticleImageModel getArticleImageById(@PathVariable("id") Long id) {
		return articleService.getArticleImageById(id);
	}
	
	@GetMapping("/images/form/{id}")
	public ArticleImageModel updateArticleImage(@RequestBody ArticleImageModel articleImageModel) {
		return articleService.updateArticleImage(articleImageModel);
	}
	
	@DeleteMapping("/images/{id}")
	public void deleteArticleImage(@PathVariable("id") Long id) {
		articleService.deleteArticleImage(id);
	}
}
