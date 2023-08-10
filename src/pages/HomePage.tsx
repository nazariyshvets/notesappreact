import { useState } from "react";
import NotesTable from "../layout/NotesTable";
import SummaryTable from "../layout/SummaryTable";
import Modal from "../layout/Modal";
import ArchiveTable from "../layout/ArchiveTable";
import CreateNoteButton from "../components/CreateNoteButton";
import Form from "../components/Form";
import Note from "../interfaces/Note";
import FormType from "../interfaces/FormType";

function HomePage() {
  const [isArchiveActive, setIsArchiveActive] = useState(false);
  const [form, setForm] = useState<FormType>({ isActive: false });

  function handleFormOpen(note?: Note) {
    setForm({ note: note, isActive: true });
  }

  function handleFormClose() {
    setForm({ isActive: false });
  }

  return (
    <div>
      <main className="flex flex-col justify-center gap-y-2 overflow-hidden">
        <NotesTable
          onArchiveOpen={() => setIsArchiveActive(true)}
          onFormOpen={handleFormOpen}
        />
        <CreateNoteButton onClick={() => handleFormOpen()} />
        <SummaryTable />
      </main>

      {isArchiveActive && (
        <Modal onClose={() => setIsArchiveActive(false)}>
          <ArchiveTable />
        </Modal>
      )}

      {form.isActive && (
        <Modal onClose={handleFormClose}>
          <Form note={form.note} onClose={handleFormClose} />
        </Modal>
      )}
    </div>
  );
}

export default HomePage;
