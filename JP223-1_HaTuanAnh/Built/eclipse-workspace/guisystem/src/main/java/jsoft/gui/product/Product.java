package jsoft.gui.product;

import java.sql.*;

import jsoft.*;
import jsoft.objects.ProductObject;

public interface Product extends ShareControl {
	public ResultSet getProduct(int id);

	public ResultSet getProducts(ProductObject similar, ProductSort ps, int at, byte total);
}
