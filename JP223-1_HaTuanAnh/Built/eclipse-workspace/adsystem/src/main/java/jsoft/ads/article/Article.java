package jsoft.ads.article;

import java.sql.*;

import jsoft.*;
import jsoft.objects.*;

public interface Article extends ShareControl {
	public boolean addArticle(ArticleObject item);
	public boolean editArticle(ArticleObject item);
	public boolean delArticle(ArticleObject item);
	
	public ResultSet getArticle(int id);
	public ResultSet getArticles(ArticleObject similar,ArticleSort as, int at, byte total);
}
