package jsoft.ads.article;

import java.util.ArrayList;

import jsoft.ConnectionPool;

import jsoft.objects.ArticleObject;

public class ArticleControl {

	private ArticleModel am;
	public ArticleControl(ConnectionPool cp) {
		this.am = new ArticleModel(cp);
	}
	protected void finalize() throws Throwable{
		this.am = null;
	}
	public ConnectionPool getCP() {
		return this.am.getCP();
	}
	
	public void  releaseConnection() {
		this.am.releaseConnection();
	}
	public boolean addArticle(ArticleObject item) {
		return this.am.addArticle(item);
	}
	public boolean editArticle(ArticleObject item) {
		return this.am.editArticle(item);
	}
	public boolean delArticle(ArticleObject item) {
		return this.am.delArticle(item);
	}
	
	//----------------
	public ArticleObject getArticleObject(short id) {
		return this.am.getArticleObject(id);
	}
	//-----------------------
	public String viewArticles(ArticleObject similar,ArticleSort ss, short page, byte total) {
		//Lấy danh sách đối tượng 
		ArrayList<ArticleObject> items = this.am.getArticleObjects(similar, ss, page, total);
		return ArticleLibrary.viewArticles(items);
	}
	public static void main(String[] args) {
		//Khởi tạo đối tượng thực thi chức năng mức Control
		ArticleControl ac = new ArticleControl(null);
		
		//Lấy cấu trúc hiển thị dạng HTML 
		String view = ac.viewArticles(null, ArticleSort.ID, (short)1, (byte)20);
		//Trả về kết nối
		ac.releaseConnection();
		//Hiển thị
		System.out.println(view);
	}
}
