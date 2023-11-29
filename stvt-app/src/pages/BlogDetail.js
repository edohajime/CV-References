import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

const BlogDetail = () => {
  return (
    <div>
      <Header />
      <div className="blog-detail">
        <Container>
          <Row>
            <Col>
              <div className="blog-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col xs={12} lg={6}>
              <img
                className="blog-image"
                src="./images/Blog_EinsteinFingerprint.jpg"
                alt="Einstein Fingerprint"
              ></img>
            </Col>
            <Col xs={12} lg={6}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
                viverra nunc, semper pellentesque egestas consequat ac etiam.
                Amet, id eget quam nunc, eleifend. Viverra turpis lacus amet
                ipsum, vitae nisl fames bibendum fermentum. In tincidunt
                senectus elementum amet dolor.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
                viverra nunc, semper pellentesque egestas consequat ac etiam.
                Amet, id eget quam nunc, eleifend. Viverra turpis lacus amet
                ipsum, vitae nisl fames bibendum fermentum. In tincidunt
                senectus elementum amet dolor.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
                viverra nunc, semper pellentesque egestas consequat ac etiam.
                Amet, id eget quam nunc, eleifend. Viverra turpis lacus amet
                ipsum, vitae nisl fames bibendum fermentum. In tincidunt
                senectus elementum amet dolor.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                "Albert Einstein - người đã phát triển ra thuyết tương đối tổng
                quát và được trao giải Nobel Vật lý năm 1921 - là một trường hợp
                hiếm có khi sở hữu nhiều chủng vân tay hiếm và lạ.{" "}
              </p>
              <p>
                Einstein là một trong những người đi đầu trong việc tìm ra các
                phương pháp tư duy đúng đắn cho tất cả mọi người. Mục đích cốt
                lõi từ những phương pháp tư duy của ông là ” phá vỡ nguyên tắc
                và khám phá khả năng thiên tài tiềm ẩn trong mỗi con người”.
                Điều này rất phù hợp với tính cách của người có chủng vân tay
                Radial Loop – chủng vân nước ngược
              </p>
              <p>
                Ông còn sở hữu chủng vân tay Plain Arch và Tented Arch là 2
                chủng vân tay thiên tài với khả năng hấp thụ kiến thức là vô
                hạn. Tính quy trình, kế hoạch của 2 chủng vân tay này cũng rất
                tốt. Khả năng nhẫn nại, kiên trì của 2 chủng vân đã giúp cho ông
                không từ bỏ để trở thành nhà khoa học vĩ đại.
              </p>
              <p>
                Albert Einstein sở hữu đủ 5 chủng vân thông minh biểu thị cho
                một trí tuệ siêu việt, và không có gì ngạc nhiên khi Albert được
                thừa nhận là nhà vật lý học người Đức số 1 thế kỷ XX."
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default BlogDetail;
