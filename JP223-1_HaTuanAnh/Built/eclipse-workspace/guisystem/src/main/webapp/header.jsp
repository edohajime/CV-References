<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <jsp:include page="data.jsp" flush="true"></jsp:include>
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="">
		<meta name="author" content="JP223 - 1">
		<meta name="generator" content="News 1.0">
		<title>Index · Bootstrap v5.2</title>
		
		<!-- Vendor CSS Files -->
		<link href="/home/vendor/aos/aos.css" rel="stylesheet">
		<link href="/home/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<link href="/home/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
		<link href="/home/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
		<link href="/home/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
		<link href="/home/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
		

		<!-- Custom styles for this template -->
		<link href="/home/css/all.min.css" rel="stylesheet">
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
						<li class="nav-item"><a class="nav-link active" aria-current="page" href="/home/">Trang chủ</a>
						</li>
						<li class="nav-item"><a class="nav-link link-dark px-3" href="/home/about/">Giới thiệu</a>
						</li>
						<li class="nav-item"><a class="nav-link link-dark px-3" href="/home/news/">Tin tức</a>
						</li>
						<li class="nav-item"><a class="nav-link link-dark px-3" href="/home/faq/">Hỏi đáp</a>
						</li>
						<li class="nav-item"><a class="nav-link link-dark px-3" href="/home/product/">Sản phẩm</a>
						</li>
						<li class="nav-item"><a class="nav-link link-dark px-3" href="/home/contact/">Liên hệ</a>
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