package jsoft.gui.product;

import java.util.ArrayList;

import jsoft.*;
import jsoft.gui.product.*;
import jsoft.objects.*;

public class ProductControl {
	private ProductModel pm;

	public ProductControl(ConnectionPool cp) {
		this.pm = new ProductModel(cp);
	}

	protected void finalize() throws Throwable {
		this.pm = null;
	}
	

	public ConnectionPool getCP() {
		return this.pm.getCP();
	}
	
	public void releaseConnection() {
		this.pm.releaseConnection();
	}
	

	// ---------------------------------------------
	public ProductObject getProductObject(int id) {
		return this.pm.getProductObject(id);
	}

	// ---------------------------------------------

	public String viewProducts(ProductObject similar, byte total) {
		ArrayList<ProductObject> items = this.pm.getProductObjects(similar, ProductSort.ID, (short) 1, total);
		
		return ProductLibrary.viewProduct(items);
	}

	
}
