import { db } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const form = document.getElementById("waitlistForm");
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submitBtn");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  if (!email) return;

  submitBtn.disabled = true;
  submitBtn.textContent = "Enviando...";
  statusEl.textContent = "";
  statusEl.className = "form-status";

  try {
    await addDoc(collection(db, "waitlist"), {
      email: email,
      createdAt: serverTimestamp(),
    });

    statusEl.textContent = "¡Listo! Te avisaremos apenas esté disponible.";
    statusEl.classList.add("success");
    form.reset();
  } catch (error) {
    console.error("Error al guardar en Firestore:", error);
    statusEl.textContent = "Algo salió mal. Intenta de nuevo en un momento.";
    statusEl.classList.add("error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Unirme a la lista";
  }
});
