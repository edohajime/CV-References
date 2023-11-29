<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="">
		<meta name="author" content="JP223 - 1">
		<meta name="generator" content="News 1.0">
		<title>Index · Bootstrap v5.2</title>
		
		<link href="/home/css/bootstrap.min.css" rel="stylesheet">
		<link href="/home/css/all.min.css" rel="stylesheet">
		

		<!-- Custom styles for this template -->
		<link href="/home/css/main.css" rel="stylesheet">
		
		<script language="javascript" src="/home/js/main.js"></script>
	</head>
	<body onload="setFirstTime_v2(document.forms[0])">
		<!-- HEADER -->
		<div class="container-lg">
			<div class="row align-items-start mt-3">
				<div class="col-md-6 text-start">
					<div class="alert alert-info" role="alert">
						Chào mừng bạn đến với hệ thống của chúng tôi!
					</div>
				</div>
				<div class="col-md-6 text-end">
					<a href="#" class="link-primary mx-2">
						<i class="fa-brands fa-facebook"></i>
					</a>
					<a href="#" class="link-primary mx-2">
						<i class="fa-brands fa-twitter"></i>
					</a>
					<a href="#" class="link-primary mx-2">
						<i class="fa-brands fa-twitch"></i>
					</a>
					<a href="#" class="link-primary ms-2">
						<i class="fa-solid fa-tornado"></i>
					</a>
				</div>
			</div>
		</div>
		<!-- END HEADER -->
		
		<!-- MENU -->
		<nav class="navbar navbar-expand-lg bg-light mb-3">
			<div class="container-lg">
				<a class="navbar-brand" href="#">Logo</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">Trang nhất</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Giới thiệu</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Tin tức</a>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled" href="#">Dịch vụ</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Sản phẩm</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Hướng dẫn
							</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Action</a></li>
								<li><a class="dropdown-item" href="#">Another action</a></li>
								<li><hr class="dropdown-divider"></li>
								<li><a class="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Liên hệ</a>
						</li>
					</ul>
					<form class="d-flex" role="search" name="frmSearch">
						<input class="form-control me-2" type="search" name="txtKeyword" id="txtKeyword" aria-label="Search" onclick="setValue(this.form, true)" onblur="setValue(this.form, false)">
						<button class="btn btn-outline-success" type="button" onclick="checkValidKeyword(this.form)"><i class="fa-solid fa-magnifying-glass"></i></button>
					</form>
				</div>
			</div>
		</nav>
		<!-- END MENU -->
		
		
		<!-- SLIDERS -->
		<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
			<div class="carousel-indicators">
				<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src="/home/imgs/sliders/1.jpeg" class="d-block w-100" alt="...">
					<div class="carousel-caption d-none d-md-block">
						<h5>Tranh dân gian đông hồ</h5>
						<p>Tranh minh họa</p>
					</div>
				</div>
				<div class="carousel-item">
					<img src="/home/imgs/sliders/2.jpg" class="d-block w-100" alt="...">
					<div class="carousel-caption d-none d-md-block">
					<h5>Hoàng hôn trên sông Đuống</h5>
					<p>Ảnh: Đặng Lam Điền (vnkrol.com)</p>
					</div>
				</div>
				<div class="carousel-item">
					<img src="/home/imgs/sliders/3.jpg" class="d-block w-100" alt="...">
					<div class="carousel-caption d-none d-md-block">
						<h5>Bản khắc gỗ và tranh in</h5>
						<p>Ảnh: nguồn tranquan.webs.com</p>
					</div>
				</div>
				<div class="carousel-item">
					<img src="/home/imgs/sliders/4.jpg" class="d-block w-100" alt="...">
					<div class="carousel-caption d-none d-md-block">
						<h5>Tranh dân gian đông hồ</h5>
						<p>Tranh minh họa</p>
					</div>
				</div>
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
		<!-- END SLIDERS -->
		
		<!-- ABOUT -->
		<div class="container-lg">
			<div class="row my-5">
				<div class="col-md-12 text-center">
					<h2>Về chúng tôi <span class="badge bg-primary"><i class="fa-solid fa-file-lines"></i></span></h2>
				</div>
			</div>
			
			<div class="row align-items-start my-3">
				<div class="col-md-4">
					<figure class="figure">
						<img src="/home/imgs/aboutus.jpg" class="figure-img img-fluid rounded" alt="...">
						<figcaption class="figure-caption">Giới thiệu về chúng tôi</figcaption>
					</figure>
				</div>
				<div class="col-md-8 text-bg-light">
					<h4>Làng tranh Đông Hồ - Bắc Ninh</h4>
					Làng tranh Đông Hồ (Thuận Thành, Bắc Ninh) nằm bên bờ sông Đuống êm 
					đềm, từ lâu đã nổi tiếng với nghề làm tranh dân gian, mang đậm bản 
					sắc văn hóa truyền thống, và là dòng tranh được biết đến nhiều nhất 
					ở Việt Nam.<br/><br/>
				</div>
			</div>
			<div class="row align-items-start my-3">
				<div class="col-md-8 text-bg-light">
					<h4>Tranh dân gian Đông Hồ</h4>
					Đây là dòng tranh in từ ván khắc gỗ, vốn gắn bó với người dân vùng 
					châu thổ Bắc Bộ, và khá gần gũi với đại đa số người dân Việt Nam. 
					Tranh Đông Hồ không áp dụng chặt chẽ theo các nguyên tắc về hình 
					thể hay ánh sáng như tranh hiện đại, mà chỉ mang tính ước lệ trong 
					bố cục, nhưng rất độc đáo trong việc sử dụng những đường nét tiết 
					giản và những mảng màu dẹt đều, vốn là màu tự nhiên của cỏ cây, 
					hoa lá trên nền giấy dó quét điệp óng ánh.<br/><br/>
				</div>
				<div class="col-md-4">
					<figure class="figure">
						<img src="/home/imgs/aboutus1.jpg" class="figure-img img-fluid rounded" alt="...">
						<figcaption class="figure-caption">Ý nghĩa tranh Đông Hồ</figcaption>
					</figure>
				</div>
			</div>
			
			<div class="row align-items-start my-3">
				<div class="col-md-4">
					<figure class="figure">
						<img src="/home/imgs/aboutus2.jpg" class="figure-img img-fluid rounded" alt="...">
						<figcaption class="figure-caption">Làng tranh Đông Hồ - xem nghệ nhân tỉ mẫn làm tranh</figcaption>
					</figure>
				</div>
				<div class="col-md-8 text-bg-light">
					<h4>Nghề làm tranh Đông Hồ</h4>
					Quá trình sản xuất tranh có nhiều khâu, song có thể chia thành 3 
					công đoạn chính là: tạo mẫu, khắc ván, và in tranh.<br/><br/>
					
					Tạo mẫu tranh: là khâu quan trọng và được đúc kết qua nhiều thế hệ 
					ở làng tranh Đông Hồ, tạo nên nét đặc trưng rất riêng. Trước tiên 
					phải lựa chọn đề tài, ý nghĩa, bố cục, màu sắc. Sau đó, các nghệ 
					nhân sử dụng bút lông và mực Nho vẽ tranh Đông Hồ lên giấy bản mỏng 
					và phẳng để người thợ khắc, đục ván theo mẫu.<br/><br/>

					Khắc ván: tranh mẫu có bao nhiêu màu thì cần bấy nhiêu bản khắc. Ván 
					thường được làm từ gỗ thị hoặc gỗ thừng mực, bởi có thớ đa chiều, 
					vừa mềm, dễ khắc lại vừa dai, do đó khi khắc ván, nghệ nhân sẽ tạo 
					được các nét gọn, mảnh, nhỏ, tinh xảo. Dụng cụ khắc là bộ ve gồm 30 - 40 
					mũi đục bằng thép cứng.<br/><br/>

					Khâu in tranh: nghệ nhân làng tranh Đông Hồ nhúng thét (chổi làm bằng 
					lá thông) vào chậu màu, rồi quét đều trên mặt bìa. Dập ván in xuống 
					mặt bìa, để màu thấm đều trên mặt ván. Sau đó ấn mạnh ván in lên giấy 
					dó. Gỡ tranh ra khỏi ván in, rồi mang phơi. Tranh khô mới tiếp tục in 
					các màu khác lên. Bản nét đen được in cuối cùng.<br/><br/>

					Giấy in tranh Đông Hồ là loại giấy dó truyền thống, có quét điệp là 
					vỏ con sò, điệp biển được nghiền nát, cho màu trắng óng ánh. Các màu 
					khác đều có nguồn gốc tự nhiên, như màu đen (than xoan hay than lá 
					tre), xanh (gỉ đồng, lá chàm), vàng (hoa hòe), đỏ (sỏi son, gỗ vang)... 
					tạo ra mỹ cảm dung dị và độc đáo.<br/><br/>

				</div>
			</div>
			
			<div class="row align-items-start my-3">
				<div class="col-md-8 text-bg-light">
					<h4>Làng tranh Đông Hồ xưa và nay</h4>
					Làng Đông Hồ xưa còn gọi là làng Mái, phát triển rất thịnh qua nhiều 
					thế kỷ, với 17 dòng họ quy tụ và đều theo nghề làm tranh. Dân làng 
					vẫn lưu truyền mấy câu ca rằng:<br/><br/>

					<div class="poem">
						Hỡi cô thắt lưng bao xanh<br/>
						Có về làng Mái với anh thì về<br/>
						Làng Mái có lịch có lề<br/>
						Có sông tắm mát có nghề làm tranh<br/><br/>

						Hỡi anh đi đường cái quan<br/>
						Dừng chân ngắm cảnh mà tan nỗi sầu<br/>
						Mua tờ tranh điệp tươi màu<br/>
						Mua đàn gà lợn thi nhau đẻ nhiều...<br/><br/>
					</div>
						
					Sau những năm 40 của thế kỷ trước, nghề làm tranh bắt đầu đi xuống, bởi nhu cầu 
					tiêu thụ không còn nhiều như trước. Đến năm 1967, làng tranh Đông Hồ 
					tỉnh Bắc Ninh phần nào được khôi phục qua việc tập hợp những nghệ nhân 
					và thành lập Hợp tác xã sản xuất tranh. <br/><br/>
					Nhờ đó mà những bức tranh Đông Hồ nổi tiếng như “Đám cưới chuột”, “Gà trống”, “Đánh ghen”, “Vịnh hoa 
					quý”... được hồi sinh, nhiều sản phẩm còn có mặt ở Nhật, Pháp, Đức, 
					Singapore, Mỹ... <br/><br/>
					Nhưng tới năm 1990, tình hình thị trường lại thay đổi theo chiều hướng xấu, hợp tác xã tranh Đông Hồ giải thể, nhiều gia đình 
					đã bỏ nghề, một số chuyển sang nghề làm hàng mã... chỉ còn vài gia đình 
					nghệ nhân làng tranh Đông Hồ ở Bắc Ninh quyết tâm gìn giữ nghề truyền 
					thống. <br/><br/>
					Tháng 3 năm 2013, nghề làm tranh dân gian Đông Hồ đã được công 
					nhận là Di sản văn hóa phi vật thể quốc gia, và đưa vào danh sách cần 
					được bảo vệ khẩn cấp. Tuy không còn hưng thịnh như xưa, nhưng giá trị 
					tranh Đông Hồ vẫn có sức hút rất đặc biệt.<br/><br/>
				</div>
				<div class="col-md-4">
					<figure class="figure">
						<img src="/home/imgs/aboutus3.jpg" class="figure-img img-fluid rounded" alt="...">
						<figcaption class="figure-caption">Làng tranh Đông Hồ: Một thời vang bóng giờ vắng khách đi về</figcaption>
					</figure>
				</div>
			</div>
			
			<div class="row align-items-start my-3">
				<div class="col-md-4">
					<figure class="figure">
						<img src="/home/imgs/aboutus4.jpg" class="figure-img img-fluid rounded" alt="...">
						<figcaption class="figure-caption">Làng tranh Đông Hồ - nghệ nhân đón khách du lịch</figcaption>
					</figure>
				</div>
				<div class="col-md-8 text-bg-light">
					<h4>Những giá trị còn lại ngày nay</h4>
					Thăm làng tranh Đông Hồ ngày nay, du khách có thể tham quan cơ sở của 
					nghệ nhân Nguyễn Đăng Chế và Nguyễn Hữu Sam cùng con cháu. Đây là hai 
					gia đình kỳ cựu nhất ở làng tranh, họ vẫn giữ được nghề cổ truyền cùng 
					hàng trăm bản khắc cổ quý giá, trở thành địa chỉ văn hóa hấp dẫn của 
					du lịch Bắc Ninh. <br/><br/>
					Trong các gian nhà xây theo kiến trúc xưa, được treo 
					đầy tranh dân gian với nhiều thể loại khác nhau, từ sinh hoạt đời thường 
					tới tranh lịch sử, phong cảnh... ngập tràn màu sắc tươi trong. Tại đây, 
					du khách còn được nghe giới thiệu về những giá trị văn hóa đặc sắc của nghề 
					làm tranh dân gian Đông Hồ, và có thể trải nghiệm tự tay in tranh, 
					cũng như mua sắm những bức tranh ưng ý.
				</div>
			</div>
		</div>
		<!-- END ABOUT -->
		
		
		<!-- NEWS -->
		<div class="container-lg">
			<div class="row my-5">
				<div class="col-md-12 text-center">
					<h2>Tin tức mới <span class="badge bg-primary"><i class="fa-solid fa-file-lines"></i></span></h2>
				</div>
			</div>
			
			<div class="row row-cols-2 row-cols-md-4 g-4">
				<div class="col">
					<a href="#" class="link-primary">
						<div class="card">
							<div class="card-myimg hovergallery">
								<img src="/home/imgs/news-1.jpg" class="card-img-top " alt="..."/>
							</div>
							
							<div class="card-body">
								<h5 class="card-title">Ghé Thăm Làng Tranh Đông Hồ Bắc Ninh</h5>
								<p class="card-text">Làng tranh Đông hồ Bắc Ninh từ lâu đã nổi tiếng với những sản phẩm 
								tranh đông hồ có giá trị và đặc sắc. Đây cũng là nơi thu hút hàng ngàn du khách ghé thăm 
								mỗi năm. Tìm hiểu đôi nét về làng nghề truyền thống tại Bắc Ninh - làng tranh Đông hồ.</p>
							</div>
						</div>
					</a>
				</div>
				<div class="col">
					<a href="#" class="link-primary">
						<div class="card">
							<div class="card-myimg hovergallery">
								<img src="/home/imgs/news-2.jpg" class="card-img-top " alt="..."/>
							</div>
							
							<div class="card-body">
								<h5 class="card-title">Nét đẹp riêng biệt của tranh Đông Hồ</h5>
								<p class="card-text">So với nhiều loại tranh hiện đại, tranh Đồng Hồ tuy không được tạo 
								nên bởi những nguyên liệu đắt tiền nhưng lại rất giá trị. Điều gì làm cho bức tranh dân 
								gian này trở nên đặc biệt đến thế? Dưới đây là một vài lý giải dành bạn có thể tham khảo 
								nếu đang thắc mắc về vấn đề này.</p>
							</div>
						</div>
					</a>
				</div>
				<div class="col">
					<a href="#" class="link-primary">
						<div class="card">
							<div class="card-myimg hovergallery">
								<img src="/home/imgs/news-3.jpg" class="card-img-top " alt="..."/>
							</div>
							
							<div class="card-body">
								<h5 class="card-title">Đa chiều ý kiến về "Đương đại hóa tranh Đông Hồ"</h5>
								<p class="card-text">Khi tranh Đông Hồ được “cải tiến” theo hướng đưa hình ảnh đương đại 
								vào những tác phẩm đã vô cùng nổi tiếng đã tạo ra hiệu ứng cùng nhiều ý kiến trái chiều. 
								Trong đó, diễn giả văn hóa Hồ Nhựt Quang cũng đã chia sẻ quan điểm của mình về vấn đề 
								này trước câu hỏi “Nên hay không nên "Đương đại hóa tranh Đông Hồ"”.</p>
							</div>
						</div>
					</a>
				</div>
				
				<div class="col">
					<a href="#" class="link-primary">
						<div class="card">
							<div class="card-myimg hovergallery">
								<img src="/home/imgs/news-4.jpg" class="card-img-top " alt="..."/>
							</div>
							
							<div class="card-body">
								<h5 class="card-title">Báo Mỹ viết gì về những người "thổi hồn" và gìn giữ nghề làm tranh Đông Hồ</h5>
								<p class="card-text">Mới đây, tờ Insider (Mỹ) đã có bài phóng sự về một trong hai gia đình 
								cuối cùng còn gìn giữ và làm tranh Đông Hồ ở Việt Nam. Với lời tựa "Làm thế nào một gia 
								đình gìn giữ nghề tranh truyền thống suốt một thế kỷ", clip phóng sự của tờ Insider hiện 
								thu hút hơn 100.000 lượt xem.</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
		<!-- END NEWS -->
		
		<!-- ASK -->
		<div class="container-lg text-bg-light">
			<div class="row my-5">
				<div class="col-md-12 text-center">
					<h2>Câu hỏi thường gặp <span class="badge bg-primary"><i class="fa-solid fa-file-lines"></i></span></h2>
				</div>
			</div>
			
			<div class="accordion accordion-flush" id="accordionFlushExample">
				<div class="accordion-item">
					<h2 class="accordion-header" id="flush-headingOne">
						<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
							<i class="fa-solid fa-plus"></i>&nbsp&nbsp Làm thế nào để chỉnh sửa thông tin tài khoản?
						</button>
					</h2>
					<div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
						<div class="accordion-body">Để chỉnh sửa thông tin tài khoản tại website shop.vinfastauto.com, Quý khách vui lòng làm theo hướng dẫn sau: <br/>
						①: Truy cập website shop.vinfastauto.com, chọn biểu tượng TÀI KHOẢN trên màn hình (Mobile biểu tượng tài khoản trên góc trái màn hình. Desktop biểu tượng tài khoản trên góc phải của màn hình) và ĐĂNG NHẬP.<br/>
						②: Sau khi ĐĂNG NHẬP vui lòng trỏ chuột vào biểu tượng tài khoản, tất cả các tính năng của tài khoản sẽ được hiển thị, bao gồm: Thông tin tài khoản, lịch sử giao dịch, lịch sử bảo dưỡng, giỏ hàng của Tôi và đăng xuất.<br/>
						③: Chọn THÔNG TIN TÀI KHOẢN và biểu tượng chỉnh sửa được đặt bên phải của THÔNG TIN CÁ NHÂN.<br/>
						④: Sau khi thay đổi nội dung mong muốn để HOÀN TẤT quá trình chỉnh sửa thông tin vui lòng chọn CẬP NHẬT THÔNG TIN.</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="flush-headingTwo">
						<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
							<i class="fa-solid fa-plus"></i>&nbsp&nbsp Tôi cần tạo tài khoản
						</button>
					</h2>
					<div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
						<div class="accordion-body">Để tạo tài khoản tại website shop.vinfastauto.com, Quý khách vui lòng làm theo hướng dẫn sau:<br/><br/>
						①: Truy cập website shop.vinfastauto.com, chọn biểu tượng TÀI KHOẢN trên màn hình (Mobile biểu tượng tài khoản trên góc trái màn hình. Desktop biểu tượng tài khoản trên góc phải của màn hình)<br/>
						②: Chọn ĐĂNG KÝ và làm theo hướng dẫn để tạo tài khoản.<br/>
						③: XÁC NHẬN thông tin được chuyển tới EMAIL đã đăng ký.<br/>
						④: HOÀN TẤT quá trình bạn có thể ĐĂNG NHẬP theo tài khoản đã đăng ký thành công.</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="flush-headingThree">
						<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
							<i class="fa-solid fa-plus"></i>&nbsp&nbsp Tôi cần mang giấy tờ gì khi đến lái thử xe?
						</button>
					</h2>
					<div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
						<div class="accordion-body">Quý khách vui lòng chuẩn bị các giấy tờ sau để tham gia lái thử xe, bao gồm:<br/><br/>
						①: CMND/CCCD<br/>

						②: Giấy phép lái xe còn hiệu lực<br/>
						③: Phiếu đăng ký lái thử xe (VinFast chuẩn bị theo mẫu có sẵn tại điểm lái thử)<br/>
						④: Cam kết lái xe an toàn (VinFast chuẩn bị theo mẫu có sẵn tại điểm lái thử)</div>
					</div>
				</div>
				
				<div class="accordion-item">
					<h2 class="accordion-header" id="flush-headingThree">
						<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
							<i class="fa-solid fa-plus"></i>&nbsp&nbsp Giá xe VF e34 hiện tại là bao nhiêu?
						</button>
					</h2>
					<div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
						<div class="accordion-body">Giá niêm yết cho xe VinFast VF e34 hiện tại là 690.000.000 VNĐ. Bên cạnh đó, quý khách sẽ có thể lựa chọn kích hoạt 
						và sử dụng một số tính năng tiên tiến tích hợp trên VF e34 theo nhu cầu. Theo đó, VinFast cung cấp gói tính năng nâng cao tuỳ chọn trị giá 60 triệu 
						đồng với loạt tính năng hỗ trợ người lái về an toàn, điều hướng – dẫn đường, cài đặt giới hạn địa lý và thời gian.<br/><br/>

						Để biết thêm về các chương trình ưu đãi giảm giá xe, Quý khách vui lòng truy cập: https://vinfastauto.com/vn_vi/uu-dai</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END ASK -->
		
		<!-- CONTACT -->
			<div class="container-lg">
				<div class="row my-5">
					<div class="col-md-12 text-center">
						<h2>Liên hệ <span class="badge bg-primary"><i class="fa-solid fa-file-lines"></i></span></h2>
					</div>
				</div>
				
				<div class="row align-items-center">
					<div class="col-md-6">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.473663078428!2d105.73291811424569!3d21.053735992302627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345457e292d5bf%3A0x20ac91c94d74439a!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1659529272959!5m2!1svi!2s" 
						width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>
					<div class="col-md-6 text-bg-secondary">
						<form class="row g-3 needs-validation" novalidate>
							<div class="col-md-4">
								<label for="validationCustom01" class="form-label">First name</label>
								<input type="text" class="form-control" id="validationCustom01" value="Mark" required>
								<div class="valid-feedback">
									Looks good!
								</div>
							</div>
							<div class="col-md-4">
								<label for="validationCustom02" class="form-label">Last name</label>
								<input type="text" class="form-control" id="validationCustom02" value="Otto" required>
								<div class="valid-feedback">
									Looks good!
								</div>
							</div>
							<div class="col-md-4">
								<label for="validationCustomUsername" class="form-label">Username</label>
								<div class="input-group has-validation">
									<span class="input-group-text" id="inputGroupPrepend">@</span>
									<input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
									<div class="invalid-feedback">
										Please choose a username.
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<label for="validationCustom03" class="form-label">City</label>
								<input type="text" class="form-control" id="validationCustom03" required>
								<div class="invalid-feedback">
									Please provide a valid city.
								</div>
							</div>
							<div class="col-md-3">
								<label for="validationCustom04" class="form-label">State</label>
								<select class="form-select" id="validationCustom04" required>
									<option selected disabled value="">Choose...</option>
									<option>...</option>
								</select>
								<div class="invalid-feedback">
									Please select a valid state.
								</div>
							</div>
							<div class="col-md-3">
								<label for="validationCustom05" class="form-label">Zip</label>
								<input type="text" class="form-control" id="validationCustom05" required>
								<div class="invalid-feedback">
									Please provide a valid zip.
								</div>
							</div>
							<div class="col-12">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
									<label class="form-check-label" for="invalidCheck">
										Agree to terms and conditions
									</label>
									<div class="invalid-feedback">
										You must agree before submitting.
									</div>
								</div>
							</div>
							<div class="col-12">
								<button class="btn btn-primary" type="submit">Submit form</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		<!-- END CONTACT -->
			
		<!-- FOOTER -->
		<div class="container">
			<footer class="py-5">
				<div class="row">
					<div class="col-6 col-md-2 mb-3">
						<h5>Section</h5>
						<ul class="nav flex-column">
							<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
							<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
							<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
							<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
							<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
						</ul>
					</div>

					<div class="col-6 col-md-2 mb-3">
						<h5>Section</h5>
						<ul class="nav flex-column">
							<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
							<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
							<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
							<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
							<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
						</ul>
					</div>

					<div class="col-6 col-md-2 mb-3">
						<h5>Section</h5>
						<ul class="nav flex-column">
							<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
							<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
							<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
							<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
							<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
						</ul>
					</div>

					<div class="col-md-5 offset-md-1 mb-3">
						<form>
							<h5>Subscribe to our newsletter</h5>
							<p>Monthly digest of what's new and exciting from us.</p>
							<div class="d-flex flex-column flex-sm-row w-100 gap-2">
								<label for="newsletter1" class="visually-hidden">Email address</label>
								<input id="newsletter1" type="text" class="form-control" placeholder="Email address">
								<button class="btn btn-primary" type="button">Subscribe</button>
							</div>
						</form>
					</div>
				</div>

				<div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
					<p>&copy; 2022 Company, Inc. All rights reserved.</p>
					<ul class="list-unstyled d-flex">
						<li class="ms-3"><a class="link-dark" href="#"><i class="fa-brands fa-facebook"></i></a></li>
						<li class="ms-3"><a class="link-dark" href="#"><i class="fa-brands fa-twitter"></i></a></li>
						<li class="ms-3"><a class="link-dark" href="#"><i class="fa-brands fa-google"></i></a></li>
					</ul>
				</div>
			</footer>
		</div>
		
		
		<script src="/home/js/bootstrap.bundle.min.js"></script>
	</body>
</html>
    