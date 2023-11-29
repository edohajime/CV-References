package jsoft.gui.product.pg;

import java.sql.*;

import jsoft.*;
import jsoft.gui.basic.*;
import jsoft.objects.*;

public class PGImpl extends BasicImpl implements PG {

	/**
	 * @param objectName
	 * @param cp
	 */
	public PGImpl(ConnectionPool cp) {
		super("PGObject", cp);
	}

	@Override
	public ResultSet getPG(int id) {
		String sql = "SELECT * FROM tblpg g ";
		sql += "LEFT JOIN tblps s ON g.pg_ps_id=s.ps_id ";
		sql += "WHERE g.pg_id=? ";
		
		return this.get(sql, id);
	}

	@Override
	public ResultSet getPGs(PGObject similar, PGSort pgs, int at, byte total) {
		String sql = "SELECT * FROM tblpg g ";
		sql += "LEFT JOIN tblps s ON g.pg_ps_id=s.ps_id ";

		switch (pgs) {
		case ID:
			sql += "ORDER BY pc_id DESC";
			break;
		case NAME:
			sql += "ORDER BY pc_name ASC";
			break;
		default:
			sql += "ORDER BY pc_id DESC";
			break;
		}

		sql += " LIMIT " + at + ", " + total;

		return this.gets(sql);
	}
	
}
