package jsoft.gui.article;

import jsoft.*;
import jsoft.objects.*;

import java.util.*;

public class ArticleControl {
	private ArticleModel am;
	
	public ArticleControl(ConnectionPool cp) {
		this.am = new ArticleModel(cp);
	}
	
	protected void finalize() throws Throwable {
		this.am = null;
	}
	
	public ConnectionPool getCP() {
		return this.am.getCP();
	}
	
	public void releaseConnection() {
		this.am.releaseConnection();
	}
	
	// -----------------------------------------------------------
	
	public ArticleObject getArticleObject(int id) {
		return this.am.getArticleObject(id);
	}
	
	
	// -----------------------------------------------------------
	
	public String viewNews(ArticleObject similar, byte total, boolean isHomeView) {
		// Lay danh sach bai viet can hien thi
		ArrayList<ArticleObject> items = this.am.getArticleObjects(similar, ArticleSort.ID, (byte) 1, total);
		
		// Tra ve cau truc
		if (isHomeView) {
			return ArticleLibrary.viewNews(items, isHomeView);
		} else {
			return ArticleLibrary.viewSubNewsV2(items);
		}
		
	}
	

	// -----------------------------------------------------------
	
	public String viewRecentNews(ArticleObject similar, byte total) {
		// Lay danh sach bai viet can hien thi
		ArrayList<ArticleObject> items = this.am.getArticleObjects(similar, ArticleSort.ID, (byte) 1, total);
		
		// Tra ve cau truc
		return ArticleLibrary.viewRecentNews(items);
		
	}
	
	public String viewArticleDetail(int id) {
		ArticleObject item = this.am.getArticleObject(id);
		
		HashMap<CategoryObject, Integer> cates = this.am.getCategories((short) item.getSection_id());
		
		return ArticleLibrary.viewArticleDetail(item, cates);
	}
	

	public static void main(String[] args) {
		ArticleControl ac = new ArticleControl(null);
		
//		String view = ac.viewArticles(null, ArticleSort.TITLE, (short) 1, (byte) 20);
		
//		System.out.println(view);

	}

	

}
