package jsoft.ads.article;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import jsoft.ConnectionPool;
import jsoft.objects.ArticleObject;

public class ArticleModel {

    private Article a;
	
	public ArticleModel(ConnectionPool cp) {
		this.a = new ArticleImpl(cp);
		
	}
	protected void finalize() throws Throwable{
		this.a = null;
	}
	public ConnectionPool getCP() {
		return this.a.getCP();
	}
	
	public void  releaseConnection() {
		this.a.releaseConnection();
	}
	//-------------------------------------------------
	public boolean addArticle(ArticleObject item) {
		return this.a.addArticle(item);
	}
	public boolean editArticle(ArticleObject item) {
		return this.a.editArticle(item);
	}
	public boolean delArticle(ArticleObject item) {
		return this.a.delArticle(item);
	}
	//-------------------------------------------------
	public ArticleObject getArticleObject(short id) {
		ArticleObject item = null;
		ResultSet rs = this.a.getArticle(id);
		if(rs!=null) {
			try {
				if(rs.next()) {
					//Khởi tạo bộ nhớ cho đối tượng lưu trữ
					item = new ArticleObject();
					item.setArticle_id(rs.getShort("article_id)"));
					item.setArticle_title(rs.getString("article_title"));
					
					item.setArticle_category_id(rs.getShort("article_category_id"));
					item.setArticle_author_name(rs.getString("article_author_name"));
					item.setArticle_title_en(rs.getString("article_title_en"));
					item.setArticle_fee(rs.getInt("article_fee"));
					item.setArticle_modified_author_name(rs.getString("article_modified_author_name"));
					item.setArticle_author_permission(rs.getByte("article_author_permission"));
					item.setArticle_source(rs.getString("article_source"));
					
					
					
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return item;
	}
	
	
	public ArrayList <ArticleObject> getArticleObjects(ArticleObject similar, ArticleSort as, short page, byte total) {
		
		ArrayList<ArticleObject> items = new ArrayList<>();
		ArticleObject item = null;
		
		int at = (page -1)*total;
		
		ResultSet rs = this.a.getArticles(similar,as, at, total);
		if(rs!=null) {
			try {
				while(rs.next()) {
					//Khởi tạo bộ nhớ cho đối tượng lưu trữ
					item = new ArticleObject();
					item.setArticle_id(rs.getShort("article_id"));
					item.setArticle_title(rs.getString("article_title"));
					
					item.setArticle_category_id(rs.getShort("article_category_id"));
					item.setArticle_author_name(rs.getString("article_author_name"));
					item.setArticle_title_en(rs.getString("article_title_en"));
					item.setArticle_fee(rs.getInt("article_fee"));
					item.setArticle_modified_author_name(rs.getString("article_modified_author_name"));
					item.setArticle_author_permission(rs.getByte("article_author_permission"));
					item.setArticle_source(rs.getString("article_source"));
					
					//Thêm vào danh sách
					items.add(item);//danh sách thêm đối tượng
				}
				rs.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return items;
	}
}
