package jsoft;

public interface ShareControl {

	//Chức năng chia sẻ bộ quản lý kết nối giữa các Basic
	public ConnectionPool getCP();
	
	//Chức năng yêu cầu trả về kết nối
	public void releaseConnection();
}
