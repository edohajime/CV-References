<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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