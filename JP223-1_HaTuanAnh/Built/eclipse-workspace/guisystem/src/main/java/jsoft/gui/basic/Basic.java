package jsoft.gui.basic;

import java.sql.*;
import jsoft.*;

public interface Basic extends ShareControl{
	public ResultSet get(String sql, int value);

	public ResultSet get(String sql, String name, String pass);

	public ResultSet gets(String sql);
	
	
}
