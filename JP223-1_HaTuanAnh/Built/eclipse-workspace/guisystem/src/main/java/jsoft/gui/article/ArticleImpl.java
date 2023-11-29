package jsoft.gui.article;

import java.sql.*;
import jsoft.*;
import jsoft.objects.ArticleObject;
import jsoft.gui.basic.*;

public class ArticleImpl extends BasicImpl implements Article {

	public ArticleImpl(ConnectionPool cp) {
		// TODO Auto-generated constructor stub
		super("Article", cp);
	}

	@Override
	public ResultSet getArticle(int id) {
		// TODO Auto-generated method stub

		String sql = "SELECT * FROM tblarticle a ";
		sql += "LEFT JOIN tblcategory c ON a.article_category_id=c.category_id ";
		sql += "LEFT JOIN tblsection s ON category_section_id=s.section_id ";
		sql += "WHERE a.article_id=?";

		return this.get(sql, id);
	}

	@Override
	public ResultSet getArticles(ArticleObject similar, int at, byte total) {

		return this.getArticles(similar, ArticleSort.ID, at, total);
	}

	@Override
	public ResultSet getArticles(ArticleObject similar, ArticleSort as, int at, byte total) {
		// TODO Auto-generated method stub

		String sql = "SELECT * FROM tblarticle a ";
		sql += "LEFT JOIN tblcategory c ON a.article_category_id=c.category_id ";
		sql += "LEFT JOIN tblsection s ON c.category_section_id=s.section_id ";
		sql += this.createCondition(similar);
		switch (as) {
		case ID:
			sql += "ORDER BY article_id DESC ";
			break;
		case TITLE:
			sql += "ORDER BY article_title ASC ";
			break;
		case CATEGORY:
			sql += "ORDER BY article_category_id DESC ";
			break;
		case SECTION:
			sql += "ORDER BY article_section_id DESC ";
			break;
		case AUTHOR:
			sql += "ORDER BY article_author_name ASC ";
			break;
		case MANAGER:
			sql += "ORDER BY article_manager_id DESC ";
			break;
		case VISITED:
			sql += "ORDER BY article_visitd DESC ";
			break;
		default:
			sql += "ORDER BY article_id DESC ";
		}
		sql += "LIMIT " + at + ", " + total;

		return this.gets(sql);
	}

	private String createCondition(ArticleObject similar) {
		String tmp = "";

		if (similar != null) {
			// Lay chuyen muc bai viet
			short sid = (short) similar.getSection_id();
			if (sid == 0) {
				sid = (short) similar.getCategory_section_id();
			}
			if (sid == 0) {
				sid = (short) similar.getArticle_section_id();
			}

			// Khi ton tai sid
			if (sid > 0) {
				tmp = "(article_section_id=" + sid + ")";
			}

			// Lay the loai
			short cid = similar.getCategory_id();
			if (cid == 0) {
				cid = similar.getArticle_category_id();
			}

			// Khi ton tai
			if (cid > 0) {
				if (!tmp.equalsIgnoreCase("")) {
					tmp += " AND (article_category_id = " + cid + ")";
				} else {
					tmp += "(article_category_id = " + cid + ")";

				}
			}

			// Loc nhung bai viet khong xoa va hien thi
			if (!similar.isArticle_delete()) {
				if (!tmp.equalsIgnoreCase("")) {
					tmp += " AND ((article_delete=0) AND (article_enable=1))";
				} else {
					tmp += " ((article_delete=0) AND (article_enable=1))";
				}
			}

		}

		if (!tmp.equalsIgnoreCase("")) {
			tmp = " WHERE (" + tmp + ")";
		}

		return tmp;
	}

	public static void main(String[] args) {

		Article a = new ArticleImpl(null);
		ArticleObject nArticle = new ArticleObject();
		nArticle.setArticle_id(209);
		nArticle.setArticle_title("Anh hùng cứu mỹ nhân");
//		nArticle.setCategory_name("Đại lý");
		nArticle.setArticle_section_id((short) 40);
		nArticle.setArticle_author_name("Edo");

//		boolean result = a.addArticle(nArticle);
//
//		if (!result) {
//			System.out.println("\n--------------------KHÔNG THÀNH CÔNG--------------------\n");
//		} else {
//			System.out.println("\n-----------------------THÀNH CÔNG-----------------------\n");
//		}

		ArticleObject similar = new ArticleObject();
		similar.setArticle_delete(false);
		similar.setArticle_enable(true);

//		ResultSet rs = a.getArticles(similar, ArticleSort.ID, 0, (byte) 9);
		ResultSet rs = a.getArticle(207);
		if (rs != null) {
			try {
				String row;
				while (rs.next()) {
					row = "DELETE: " + rs.getString("article_delete");
					row += "\tID: " + rs.getString("article_id");
					row += "\tTITLE: " + rs.getString("article_title");
					row += "\tCATEGORY ID: " + rs.getString("article_category_id");
					row += "\tSECTION ID: " + rs.getString("article_section_id");
					row += "\tAUTHOR NAME: " + rs.getString("article_author_name");

					System.out.println(row);
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

	}

	@Override
	public ResultSet getCategories(short sid) {
		String sql = "SELECT category_id, category_name, COUNT(article_id) AS total FROM tblarticle ";
		sql += "LEFT JOIN tblcategory ON article_category_id=category_id ";
		sql += "WHERE article_section_id=" + sid + " ";
		sql += "GROUP BY category_id ";
		sql += "ORDER BY total DESC ";
		
		return this.gets(sql);
	}

}
