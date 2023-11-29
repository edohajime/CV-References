import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Football = () => {
  const [value, onChange] = useState(new Date());
  const data = [
    {
      url: "/imgs/football/football-item_1.jpg",
      name: "Brighton & Hove Albion",
      GP: 0,
      W: 0,
      D: 0,
      L: 0,
      F: 0,
      A: 0,
      GD: 0,
      Pts: 0,
      date: "Wed Jun 28 2023 00:00:00 GMT+0700 (Giờ Đông Dương)",
    },
    {
      url: "/imgs/football/football-item_2.jpg",
      name: "Manchester United",
      GP: 38,
      W: 16,
      D: 10,
      L: 12,
      F: 57,
      A: 57,
      GD: 0,
      Pts: 58,
      date: "Wed Jul 05 2023 00:00:00 GMT+0700 (Giờ Đông Dương)",
    },
    {
      url: "/imgs/football/football-item_3.jpg",
      name: "Tottenham Hotspur",
      GP: 38,
      W: 22,
      D: 5,
      L: 11,
      F: 69,
      A: 40,
      GD: 29,
      Pts: 71,
      date: "Wed Jul 12 2023 00:00:00 GMT+0700 (Giờ Đông Dương)",
    },
    {
      url: "/imgs/football/football-item_4.jpg",
      name: "Arsenal",
      GP: 38,
      W: 22,
      D: 3,
      L: 13,
      F: 61,
      A: 48,
      GD: 13,
      Pts: 69,
      date: "Wed Jul 19 2023 00:00:00 GMT+0700 (Giờ Đông Dương)",
    },
    {
      url: "/imgs/football/football-item_5.jpg",
      name: "Leicester City",
      GP: 0,
      W: 0,
      D: 0,
      L: 0,
      F: 0,
      A: 0,
      GD: 0,
      Pts: 0,
      date: "Wed Jul 26 2023 00:00:00 GMT+0700 (Giờ Đông Dương)",
    },
    {
      url: "/imgs/football/football-item_6.jpg",
      name: "West Ham United",
      GP: 0,
      W: 0,
      D: 0,
      L: 0,
      F: 0,
      A: 0,
      GD: 0,
      Pts: 0,
      date: "Fri Aug 04 2023 00:00:00 GMT+0700 (Giờ Đông Dương)",
    },
  ];

  const handleCalendar = (param) => {
    // console.log(param.date);
    let src = "";

    data.map((val) => {
      if (val.date.localeCompare(param.date) === 0) {
        src = val.url;
      }
      return null;
    });

    if (!param.activeClassName) {
      return src !== "" ? <img src={src} alt="football item" /> : null;
    } else {
      return src !== "" ? param.activeClassName : "";
    }
  };

  return (
    <div className="football">
      <div className="football-bg"></div>
      <Container>
        <Row>
          <Col xs={3}>
            <div className="calendar">
              <Calendar
                onChange={onChange}
                calendarType="hebrew" // Sunday is the first of week
                value={value}
                locale="en-GB"
                nextLabel={null}
                next2Label={null}
                prevLabel={null}
                prev2Label={null}
                showNeighboringMonth={true}
                selectRange={false}
                showWeekNumbers={false}
                view="month"
                tileContent={({ activeStartDate, date, view }) =>
                  handleCalendar({ activeStartDate, date, view })
                }
                tileClassName={({ activeStartDate, date, view }) =>
                  handleCalendar({
                    activeStartDate,
                    date,
                    view,
                    activeClassName: "active",
                  })
                }
              />
            </div>
          </Col>
          <Col xs={5}>
            <div className="club"></div>
          </Col>
          <Col xs={4}>
            <div className="finalround"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Football;
