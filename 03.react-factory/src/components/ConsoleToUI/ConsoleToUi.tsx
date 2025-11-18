/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import classes from "./consoleToUi.module.css";

type LogType = "log" | "error" | "warn";

interface LogEntry {
  type: LogType;
  message: string;
}

const getColor = (type: LogType) => {
  switch (type) {
    case "error":
      return "red";
    case "warn":
      return "yellow";
    default:
      return "#0f0";
  }
};

const ConsoleToUi: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  useEffect(() => {
    const ogLog = console.log;
    const ogError = console.error;
    const ogWarn = console.warn;

    const pushLog = (type: LogType, args: any[]) => {
      setLogs((prev) => [...prev, { type, message: args.join(" ") }]);
    };

    console.log = (...args: any[]) => {
      ogLog(...args);
      pushLog("log", args);
    };

    console.error = (...args: any[]) => {
      ogError(...args);
      pushLog("error", args);
    };

    console.warn = (...args: any[]) => {
      ogWarn(...args);
      pushLog("warn", args);
    };

    return () => {
      console.log = ogLog;
      console.error = ogError;
      console.warn = ogWarn;
    };
  }, []);

  useEffect(() => {
    const el = document.getElementById("console-wrapper");
    let isDown = false;
    let offset = { x: 0, y: 0 };

    // Get header element by id for drag functionality
    const header = document.getElementById("console-header");

    const onMouseDown = (e: MouseEvent) => {
      if (!el) return;
      // when starting drag, clear bottom/right so left/top positioning works predictably
      el.style.bottom = "auto";
      el.style.right = "auto";

      isDown = true;
      offset = {
        x: el.offsetLeft - e.clientX,
        y: el.offsetTop - e.clientY,
      };
      el.style.cursor = "grabbing";
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown || !el) return;
      const left = e.clientX + offset.x;
      const top = e.clientY + offset.y;
      el.style.left = `${left}px`;
      el.style.top = `${top}px`;
    };

    const onMouseUp = () => {
      if (!el) return;
      isDown = false;
      el.style.cursor = "grab";
    };

    header?.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      header?.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);
  return (
    <div>
      <div id="console-wrapper" className={classes.consoleWrapper}>
        <div id="console-header" className={classes.consoleHeader}>
          📟 UI Console
        </div>

        <button onClick={() => setLogs([])} className={classes.clearBtn}>
          Clear
        </button>

        <div className={classes.consoleBody}>
          {logs.map((log, i) => (
            <div key={i} style={{ color: getColor(log.type) }}>
              [{log.type}] → {log.message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsoleToUi;
