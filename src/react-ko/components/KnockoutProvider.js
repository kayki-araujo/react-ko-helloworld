import { useEffect, useState } from "react";
import ko from "knockout";
import KnockoutContext from "../context/KnockoutContext";

const KnockoutProvider = ({ children }) => {
  const [ViewModel, setViewModel] = useState({});

  useEffect(() => {
    ko.applyBindings(ViewModel, document.getElementById("ko-root"));
  }, []);

  return (
    <KnockoutContext.Provider value={[ViewModel, setViewModel]}>
      <div id="ko-root">{children}</div>
    </KnockoutContext.Provider>
  );
};

export default KnockoutProvider;
