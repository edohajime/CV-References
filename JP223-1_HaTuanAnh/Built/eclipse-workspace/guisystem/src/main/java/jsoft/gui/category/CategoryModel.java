package jsoft.gui.category;

import jsoft.*;
import jsoft.objects.*;

import java.sql.*;
import java.util.*;

public class CategoryModel {
	private Category c;

	public CategoryModel(ConnectionPool cp) {
		this.c = new CategoryImpl(cp);
	}

	protected void finalize() throws Throwable {
		this.c = null;
	}

	public ConnectionPool getCP() {
		return this.c.getCP();
	}

	public void releaseConnection() {
		this.c.releaseConnection();
	}

	// -----------------------------------------------------------

	public CategoryObject getCategoryObject(short id) {
		CategoryObject item = null;

		ResultSet rs = this.c.getCategory(id);
		if (rs != null) {
			try {
				if (rs.next()) {
					item = new CategoryObject();
					item.setCategory_id(rs.getShort("category_id"));
					item.setCategory_name(rs.getString("category_name"));
					item.setCategory_notes(rs.getString("category_notes") + "###" + rs.getString("user_name"));
					item.setCategory_created_date(rs.getString("category_created_date"));

					item.setSection_name(rs.getString("section_name"));
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		return item;

	}

	public ArrayList<CategoryObject> getCategoryObjects(CategoryObject similar, short page, byte total) {
		ArrayList<CategoryObject> items = new ArrayList<>();
		CategoryObject item = null;

		int at = (page - 1) * total;

		ResultSet rs = this.c.getCategories(similar, at, total);
		if (rs != null) {
			try {
				while (rs.next()) {
					item = new CategoryObject();
					item.setCategory_id(rs.getShort("category_id"));
					item.setCategory_name(rs.getString("category_name"));
					item.setCategory_notes(rs.getString("category_notes") + "###" + rs.getString("user_name"));
					item.setCategory_created_date(rs.getString("category_created_date"));

					item.setCategory_section_id(rs.getShort("category_section_id"));
					item.setSection_name(rs.getString("section_name"));

					item.setCategory_article_count(this.c.getCategoryCount(rs.getShort("category_id")));

					items.add(item);
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		return items;

	}

	public ArrayList<CategoryObject> getCategoryObjects(CategoryObject similar, CategorySort cs, short page,
			byte total) {
		ArrayList<CategoryObject> items = new ArrayList<>();
		CategoryObject item = null;

		int at = (page - 1) * total;

		ResultSet rs = this.c.getCategories(similar, cs, at, total);
		if (rs != null) {
			try {
				while (rs.next()) {
					item = new CategoryObject();
					item.setCategory_id(rs.getShort("category_id"));
					item.setCategory_name(rs.getString("category_name"));
					item.setCategory_notes(rs.getString("category_notes") + "###" + rs.getString("user_name"));
					item.setCategory_created_date(rs.getString("category_created_date"));

					item.setCategory_section_id(rs.getShort("category_section_id"));
					item.setSection_name(rs.getString("section_name"));
					
					item.setCategory_article_count(this.c.getCategoryCount(total));

					items.add(item);
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		return items;

	}

//	public ArrayList<CategoryObject> getCategoryObjectsOfSection(CategoryObject similar, short page,
//			byte total, String sectionName) {
//		ArrayList<CategoryObject> items = new ArrayList<>();
//		CategoryObject item = null;
//
//		int at = (page - 1) * total;
//		if (at > this.getCount()) {// *
//
//			ResultSet rs = this.c.getCategories(similar, CategorySort.SECTION, at, total);
//
//			if (rs != null) {
//				try {
//					while (rs.next()) {
//						if (rs.getString("section_name").equals(Utilities.encodeToHTML(sectionName))) {
//
//							item = new CategoryObject();
//							item.setCategory_id(rs.getShort("category_id"));
//							item.setCategory_name(rs.getString("category_name"));
//							item.setCategory_notes(rs.getString("category_notes") + "###" + rs.getString("user_name"));
//							item.setCategory_created_date(rs.getString("category_created_date"));
//
//							item.setCategory_section_id(rs.getShort("category_section_id"));
//							item.setSection_name(rs.getString("section_name"));
//
//							items.add(item);
//						}
//					}
//				} catch (SQLException e) {
//					// TODO Auto-generated catch block
//					e.printStackTrace();
//				}
//			}
//		}
//
//		return items;
//
//	}
	

	public static void main(String[] args) {
//		ConnectionPool cp = new ConnectionPoolImpl();
//
//		CategoryModel cate = new CategoryModel(cp);
//		ArrayList<CategoryObject> nCate = new ArrayList<>();
//
//		nCate = cate.getCategoryObjectsOrderBySectionName(null, (short) 1, (byte) 20, "Giới thiệu");
//
//		for (CategoryObject category : nCate) {
//			String result = "ID: " + category.getCategory_id() + "\t";
//			result += "SECTION ID: " + category.getCategory_section_id() + "\t";
//			result += "NAME: " + category.getCategory_name() + "\t";
//			result += "NOTES: " + category.getCategory_notes() + "\t";
//			result += "CREATED DATE: " + category.getCategory_created_date() + "\n";
//
//			System.out.println(result);
//		}

//		System.out.println(cate.getCount());
//		else {
//			System.out.println("KHÔNG TỒN TẠI ĐỐI TƯỢNG TRONG CSDL");
//		}
	}
}
