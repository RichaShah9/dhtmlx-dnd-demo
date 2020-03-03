/* globals scheduler */
import React, { useEffect } from "react";
import fromCDN from "from-cdn";

export default function Scheduler() {
  const container = React.createRef();
  const ready = fromCDN([
    "//cdn.dhtmlx.com/scheduler/5.0/dhtmlxscheduler.js",
    "//cdn.dhtmlx.com/scheduler/5.0/dhtmlxscheduler.css"
  ]);

  useEffect(() => {
    ready.then(() => {
      var data = [
        {
          id: "1",
          start_date: "2020-02-24 00:00:00",
          end_date: "2020-03-02 00:00:00",
          text: "French Open",
          details: "Philippe-Chatrier Court\n Paris, FRA"
        },
        {
          id: "2",
          start_date: "2020-03-10 00:00:00",
          end_date: "2020-03-13 00:00:00",
          text: "Aegon Championship",
          details: "The Queens Club\n London, ENG"
        }
      ];

      scheduler.config.xml_date = "%Y-%m-%d %H:%i";
      scheduler.init(container.current, new Date(), "month");
      scheduler.parse(data, "json");
    });
  });

  const onDrop = e => {
    e.preventDefault();
    let action_data = scheduler.getActionData(e);
    let label = e.dataTransfer.getData("text");
    let event = {
      text: label,
      start_date: action_data.date,
      end_date: scheduler.date.add(
        action_data.date,
        scheduler.config.time_step,
        "minute"
      )
    };
    scheduler.addEvent(event);
  };

  const onDragOver = e => {
    e.preventDefault();
  };

  return (
    <div
      ref={container}
      className="widget-box dhx_cal_container"
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <div className="dhx_cal_navline">
        <div className="dhx_cal_prev_button">&nbsp;</div>
        <div className="dhx_cal_next_button">&nbsp;</div>
        <div className="dhx_cal_today_button"></div>
        <div className="dhx_cal_date"></div>
        <div
          className="dhx_cal_tab"
          name="day_tab"
          style={{ right: 204 + "px" }}
        ></div>
        <div
          className="dhx_cal_tab"
          name="week_tab"
          style={{ right: 140 + "px" }}
        ></div>
        <div
          className="dhx_cal_tab"
          name="month_tab"
          style={{ right: 76 + "px" }}
        ></div>
      </div>
      <div className="dhx_cal_header"></div>
      <div className="dhx_cal_data"></div>
    </div>
  );
}
