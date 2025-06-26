import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { useLocation } from "react-router-dom";

export default function useScrollSpy(sections = [], offset = 0, scroll = true) {
  const [activeId, setActiveId] = useState("");
  const context = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    if (!sections.length || !scroll || location.pathname !== "/") return;

    const handleScroll = () => {
      let currentId = "";

      for (let section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top - offset <= 0 && rect.bottom > 0) {
          currentId = section.id;
        }
      }

      if (currentId === "") return;
      setActiveId(currentId);
      window.history.replaceState(null, "", `#${currentId}`);
    };

    handleScroll(); // initial call
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, offset, location.pathname, context.AppView]);

  return activeId;
}
