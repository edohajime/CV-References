package jsoft.gui.product.pg;

import java.sql.ResultSet;

import jsoft.*;
import jsoft.objects.*;

public interface PG extends ShareControl {
	public ResultSet getPG(int id);

	public ResultSet getPGs(PGObject similar, PGSort pcs, int at, byte total);
}
