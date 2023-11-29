package jsoft.gui.category;

import java.sql.*;
import jsoft.objects.CategoryObject;
import jsoft.*;
import jsoft.gui.basic.*;

public class CategoryImpl extends BasicImpl implements Category {

	public CategoryImpl(ConnectionPool cp) {
		super("Category", cp);
	}

	@Override
	public ResultSet getCategory(short id) {
		// TODO Auto-generated method stub

		String sql = "SELECT * FROM tblcategory c";
		sql += "LEFT JOIN tblsection s ON c.category_section_id=s.section_id ";
		sql += "LEFT JOIN tbluser u ON c.category_created_author_id=u.user_id ";
		sql += "WHERE category_id=?";

		return this.get(sql, id);
	}

	@Override
	public ResultSet getCategories(CategoryObject similar, int at, byte total) {

		return this.getCategories(similar, CategorySort.NAME, at, total);
	}

	@Override
	public ResultSet getCategories(CategoryObject similar, CategorySort cs, int at, byte total) {
		// TODO Auto-generated method stub

		String sql = "SELECT * FROM tblcategory c ";
		sql += "LEFT JOIN tblsection s ON c.category_section_id=s.section_id ";
		sql += "LEFT JOIN tbluser u ON c.category_created_author_id=u.user_id ";
		sql += "";
		switch (cs) {
		case ID:
			sql += "ORDER BY category_id DESC ";
			break;
		case NAME:
			sql += "ORDER BY category_name ASC ";
			break;
		case DATE:
			sql += "ORDER BY category_created_date ASC ";
			break;
		case SECTION:
			sql += "ORDER BY category_section_id DESC ";
			break;
		case MANAGER:
			sql += "ORDER BY category_manager_id DESC ";
			break;
		default:
			sql += "ORDER BY category_id DESC ";
		}
		sql += "LIMIT " + at + "," + total;

		return this.gets(sql);
	}

	/**
	 * Phương thức lấy số lượng bài viết của một thể loại cụ thể
	 * 
	 * @param categoryID
	 * @return
	 */
	@Override
	public int getCategoryCount(short categoryID) {
		int count = 0;
		String sql = "SELECT COUNT(*) FROM tblarticle WHERE article_category_id=" + categoryID;

		ResultSet rs = this.gets(sql);

		try {
			if (rs.next()) {
				count = rs.getInt(1);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return count;
	}

//	public ResultSet getCategoriesOfSection(String sectionName, CategorySort cs, int at, byte total) {
//		String sql = "SELECT * FROM tblcategory c ";
//		sql += "LEFT JOIN tblsection s ON c.category_section_id=s.section_id ";
//		sql += "LEFT JOIN tbluser u ON c.category_created_author_id=u.user_id ";
//		sql += "WHERE s.section_name = '" + sectionName + "'";
//		switch (cs) {
//		case ID:
//			sql += "ORDER BY category_id DESC ";
//			break;
//		case NAME:
//			sql += "ORDER BY category_name ASC ";
//			break;
//		case DATE:
//			sql += "ORDER BY category_created_date ASC ";
//			break;
//		case SECTION:
//			sql += "ORDER BY category_section_id DESC ";
//			break;
//		case MANAGER:
//			sql += "ORDER BY category_manager_id DESC ";
//			break;
//		default:
//			sql += "ORDER BY category_id DESC ";
//		}
//		sql += "LIMIT " + at + "," + total;
//	
//		return this.gets(sql);
//	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Category c = new CategoryImpl(null);

		CategoryObject nCategory = new CategoryObject();
		// name, notes, created_date, created_author_id
//		nCategory.setCategory_id((short) 51);
//		nCategory.setCategory_name("Thoi su");
//		nCategory.setCategory_notes("Doi song hang ngay");
//		nCategory.setCategory_created_date("17/10/2022");
//		nCategory.setCategory_created_author_id(15);
//		nCategory.setCategory_section_id((short) 30);

//		boolean result = c.delCategory(nCategory);

//		CategoryObject similar = new CategoryObject();
//		similar.setSection_id((short) 11);

		ResultSet rs = c.getCategories(null, CategorySort.SECTION, 0, (byte) 60);
		if (rs != null) {
			try {
				String row;
				while (rs.next()) {
					row = "SECTION ID: " + rs.getShort("category_section_id");
					row += "\tID: " + rs.getShort("category_id");
					row += "\tNAME: " + rs.getString("category_name");
					row += "\tNOTES: " + rs.getString("category_notes");
					row += "\tCREATED DATE: " + rs.getString("category_created_date");
					row += "\tCREATED AUTHOR ID: " + rs.getInt("category_created_author_id");

					System.out.println(row);
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} else {
			System.out.println("\n------------------KHÔNG THÀNH CÔNG-------------------\n");
		}

//		if (!result) {
//			System.out.println("\n------------------KHÔNG THÀNH CÔNG-------------------\n");
//		}

		System.out.println(c.getCategoryCount((short) 23));

	}

}
