package jsoft.gui.product.ps;

import java.sql.ResultSet;

import jsoft.ShareControl;
import jsoft.gui.product.ps.*;
import jsoft.objects.*;

public interface PS extends ShareControl {
	public ResultSet getPS(int id);

	public ResultSet getPSs(PSObject similar, PSSort pss, int at, byte total);
}
