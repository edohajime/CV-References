package jsoft.gui.article;

import java.sql.*;
import jsoft.objects.*;
import jsoft.ShareControl;

public interface Article extends ShareControl{
	public ResultSet getArticle(int id);

	public ResultSet getArticles(ArticleObject similar, int at, byte total);

	public ResultSet getArticles(ArticleObject similar, ArticleSort as, int at, byte total);
	
	public ResultSet getCategories(short sid);
}
