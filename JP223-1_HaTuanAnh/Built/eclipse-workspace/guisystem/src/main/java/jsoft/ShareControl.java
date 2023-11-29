package jsoft;

public interface ShareControl {
	// chức năng chia sẻ bộ quản lý kết nối giữa các basic
	public ConnectionPool getCP();

	// chức năng yêu cầu trả về kết nối
	public void releaseConnection();
}
