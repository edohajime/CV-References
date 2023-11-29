package jsoft.gui.category;

import java.util.*;

import jsoft.ConnectionPool;
import jsoft.library.Utilities;
import jsoft.objects.CategoryObject;

public class CategoryControl {
	private CategoryModel cm;

	public CategoryControl(ConnectionPool cp) {
		this.cm = new CategoryModel(cp);
	}

	protected void finalize() throws Throwable {
		this.cm = null;
	}
	
	public ConnectionPool getCP() {
		return this.cm.getCP();
	}
	
	public void releaseConnection() {
		this.cm.releaseConnection();
	}

	
	// -----------------------------------------------------------
	public CategoryObject getCategoryObject(short id) {
		return this.cm.getCategoryObject(id);
	}
	
	// -----------------------------------------------------------
	/**
	 * Phương thức in ra danh sách thể loại được sắp xếp mặc định (CategorySort)
	 * @param similar
	 * @param page
	 * @param total
	 * @return
	 */
	public String viewCategories(CategoryObject similar, short page, byte total) {
		ArrayList<CategoryObject> items = this.cm.getCategoryObjects(similar, CategorySort.NAME, page, total);
		
		return CategoryLibrary.viewCategories(items);
	}
	
	/**
	 * Phương thức in ra danh sách thể loại được sắp xếp theo một trường lựa chọn nhất định (CategorySort)
	 * @param similar
	 * @param cs
	 * @param page
	 * @param total
	 * @return
	 */
	public String viewCategories(CategoryObject similar, CategorySort cs, short page, byte total) {
		ArrayList<CategoryObject> items = this.cm.getCategoryObjects(similar, cs, page, total);
		
		return CategoryLibrary.viewCategories(items);
	}
	
	public String viewCategories_sidebar(byte total) {
		ArrayList<CategoryObject> items = this.cm.getCategoryObjects(null, CategorySort.NAME, (short) 1, total);
		
		return CategoryLibrary.listCategories_sidebar(items);
	}
	 
	
	
	
	
	
	public static void main(String[] args) {
		CategoryControl cc = new CategoryControl(null);
		String sectionName= "Giới thiệu";
		
//		String view = cc.viewCategoriesBySectionName(null, (short) 1, (byte) 100, sectionName);
//		
//		System.out.println(view);
	}

}
