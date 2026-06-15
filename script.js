// Sign Up confirmation popup
// Clicking Sign Up shows an auto-dismissing toast. There's no backend —
// the toast just confirms the click and explains this is a learning demo.

const SIGNUP_MESSAGE =
  "Thanks for signing up! This is a fake site built for learning purposes — no account has actually been created.";

// How long the toast stays on screen before it dismisses itself.
const TOAST_DURATION_MS = 4000;

const button = document.getElementById("signup-button");
const toast = document.getElementById("signup-toast");

button.addEventListener("click", () => {
  // While a toast is showing the button is disabled, so a click can't
  // arrive here twice — but disabling is also what guards against
  // overlapping popups (AC1, AC2).
  button.disabled = true;

  // Setting the text on the role="status" region is what triggers the
  // screen-reader announcement (AC5).
  toast.textContent = SIGNUP_MESSAGE;
  toast.classList.add("toast--visible");

  window.setTimeout(() => {
    toast.classList.remove("toast--visible");
    button.disabled = false;
  }, TOAST_DURATION_MS);
});
