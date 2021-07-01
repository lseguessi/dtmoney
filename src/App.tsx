import { useState } from "react";
import { GlobaStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";
import Modal from "react-modal";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpe, setIsNewTransactionModalOpe] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpe(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpe(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpe}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobaStyle />
    </TransactionsProvider>
  );
}
