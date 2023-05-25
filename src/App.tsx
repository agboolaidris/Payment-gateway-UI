import { useState } from "react";
import { Modal } from "./components/commons/modal";

import { AddAtmCardForm } from "./components/forms/AddAtmCardForm";
import { AceCoinLogo } from "./components/commons/ace-coin-logo";
import { NumberCard } from "./components/commons/number-card";

import { SummaryCard } from "./components/commons/summary-card";

function App() {
  const [openModal, setOpenModal] = useState(true);

  const handleClose = () => {
    setOpenModal(false);
    setTimeout(() => {
      setOpenModal(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 flex justify-center items-center">
      <Modal isOpen={openModal} onClose={handleClose} className="max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-10 gap-y-10 p-4">
          <div className="md:col-span-2 flex flex-col h-full">
            <div className="flex justify-between gap-1 pb-8">
              <AceCoinLogo />
              <div>
                <NumberCard texts={["12", "34"]} />
              </div>
            </div>

            <div className="mt-auto">
              <AddAtmCardForm />
            </div>
          </div>
          <div className="col-span-1 hidden md:block">
            <SummaryCard />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
