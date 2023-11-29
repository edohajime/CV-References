package jsoft.gui.article;

import java.sql.*;
import java.util.*;

import javax.naming.spi.DirStateFactory.Result;

import jsoft.*;
import jsoft.objects.*;

public class ArticleModel {
	private Article a;

	public ArticleModel(ConnectionPool cp) {
		this.a = new ArticleImpl(cp);
	}

	protected void finalize() throws Throwable {
		this.a = null;
	}
	
	public ConnectionPool getCP() {
		return this.a.getCP();
	}
	
	public void releaseConnection() {
		this.a.releaseConnection();
	}

	
	// -----------------------------------------------
	public ArticleObject getArticleObject(int id) {
		ArticleObject item = null;

		ResultSet rs = this.a.getArticle(id);
		if (rs != null) {
			try {
				if (rs.next()) {
					item = new ArticleObject();
					item.setArticle_id(rs.getInt("article_id"));
					item.setArticle_title(rs.getString("article_title"));
					item.setArticle_summary(rs.getString("article_summary"));
					item.setArticle_content(rs.getString("article_content"));
					item.setArticle_image(rs.getString("article_image"));
					item.setArticle_author_name(rs.getString("article_author_name"));
					item.setArticle_created_date(rs.getString("article_created_date"));
					item.setArticle_last_modified(rs.getString("article_last_modified"));
					item.setArticle_source(rs.getString("article_source"));
					

					item.setArticle_tag(rs.getString("article_tag"));
					
					// Lấy thông tin của thể loại/ chuyên mục thuộc vào
					item.setCategory_id(rs.getShort("category_id"));
					item.setCategory_name(rs.getString("category_name"));
					
					item.setSection_id(rs.getInt("section_id"));
					item.setSection_name(rs.getString("section_name"));
				}
				rs.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		return item;
	}
	
	public ArrayList<ArticleObject> getArticleObjects(ArticleObject similar, short page, byte total) {
		ArrayList<ArticleObject> items = new ArrayList<>();
		ArticleObject item = null;

		int at = (page - 1) * total;

		ResultSet rs = this.a.getArticles(similar, at, total);
		if (rs != null) {
			try {
				while (rs.next()) {
					item = new ArticleObject();
					item.setArticle_id(rs.getInt("article_id"));
					item.setArticle_title(rs.getString("article_title"));
					item.setArticle_summary(rs.getString("article_summary"));
//					item.setArticle_content(rs.getString("article_content"));
					item.setArticle_image(rs.getString("article_image"));
					item.setArticle_author_name(rs.getString("article_author_name"));
					item.setArticle_created_date(rs.getString("article_created_date"));
					item.setArticle_last_modified(rs.getString("article_last_modified"));
					item.setArticle_source(rs.getString("article_source"));
					

					item.setArticle_tag(rs.getString("article_tag"));
					
					// Lấy thông tin của thể loại/ chuyên mục thuộc vào
					item.setCategory_id(rs.getShort("category_id"));
					item.setCategory_name(rs.getString("category_name"));
					
					item.setSection_id(rs.getInt("section_id"));
					item.setSection_name(rs.getString("section_name"));
					
					items.add(item);
				}
				rs.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		return items;
	}
	
	public ArrayList<ArticleObject> getArticleObjects(ArticleObject similar, ArticleSort as, short page, byte total) {
		ArrayList<ArticleObject> items = new ArrayList<>();
		ArticleObject item = null;

		int at = (page - 1) * total;

		ResultSet rs = this.a.getArticles(similar, as, at, total);
		if (rs != null) {
			try {
				while (rs.next()) {
					item = new ArticleObject();
					item.setArticle_id(rs.getInt("article_id"));
					item.setArticle_title(rs.getString("article_title"));
					item.setArticle_summary(rs.getString("article_summary"));
					item.setArticle_content(rs.getString("article_content"));
					item.setArticle_image(rs.getString("article_image"));
					item.setArticle_author_name(rs.getString("article_author_name"));
					item.setArticle_created_date(rs.getString("article_created_date"));
					item.setArticle_last_modified(rs.getString("article_last_modified"));
					item.setArticle_source(rs.getString("article_source"));
					
					// Lấy thông tin của thể loại/ chuyên mục thuộc vào
					item.setCategory_id(rs.getShort("category_id"));
					item.setCategory_name(rs.getString("category_name"));
					
					item.setSection_id(rs.getInt("section_id"));
					item.setSection_name(rs.getString("section_name"));
					
					items.add(item);
				}
				rs.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		return items;
	}
	
	public HashMap<CategoryObject, Integer> getCategories(short sid) {
		HashMap<CategoryObject, Integer> cates = new HashMap<>();
		
		CategoryObject cate;
		int total;
		
		ResultSet rs = this.a.getCategories(sid);
		if(rs!= null) {
			try {
				while(rs.next()) {
					cate = new CategoryObject();
					cate.setCategory_id(rs.getShort("category_id"));
					cate.setCategory_name(rs.getString("category_name"));
					total = rs.getInt("total");
					
					cates.put(cate, total);
				}
				rs.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		return cates;
	}
	

	// -----------------------------------------------

}

