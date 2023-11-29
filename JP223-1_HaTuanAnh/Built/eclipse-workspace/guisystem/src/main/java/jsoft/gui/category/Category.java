package jsoft.gui.category;

import java.sql.*;
import jsoft.objects.*;
import jsoft.ShareControl;

public interface Category extends ShareControl {
	public ResultSet getCategory(short id);

	public ResultSet getCategories(CategoryObject similar, int at, byte total);

	public ResultSet getCategories(CategoryObject similar, CategorySort cs, int at, byte total);
	
	public int getCategoryCount(short categoryID);

}
