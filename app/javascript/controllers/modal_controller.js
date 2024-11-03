import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["modal"]

  connect() {
    this.modal = document.getElementById("todoModal")
    this.backdrop = document.getElementById("modalBackdrop")
  }

  open() {
    this.modal.classList.remove("hidden")
  }

  close() {
    this.modal.classList.add("hidden")
  }

  // Close modal when clicking outside
  clickOutside(event) {
    if (event.target === this.backdrop) {
      this.close()
    }
  }
} 