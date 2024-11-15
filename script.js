function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const ratingInput = document.getElementById("rating");
    const feedbackResults = document.getElementById("feedbackResults");

    stars.forEach((star, index) => {
        star.addEventListener("click", () => {
            // Update rating value
            ratingInput.value = index + 1;

            // Reset semua bintang, lalu tambahkan kelas "selected" pada bintang yang sesuai
            stars.forEach((s, i) => {
                s.classList.toggle("selected", i <= index);
            });
        });
    });

    document.getElementById("feedbackForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Validasi sederhana
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const rating = ratingInput.value;
        const formMessage = document.getElementById("formMessage");

        if (name === "" || email === "" || message === "" || rating === "") {
            formMessage.textContent = "Mohon isi semua kolom dan berikan penilaian sebelum mengirim!";
            formMessage.style.color = "#d32f2f"; // Warna merah untuk kesalahan
            return;
        }

        // Tampilkan pesan sukses
        formMessage.textContent = "Terima kasih atas feedback Anda!";
        formMessage.style.color = "#00796b"; // Warna hijau kebiruan untuk pesan sukses

        // Tampilkan hasil feedback di bawah form
        const feedbackItem = document.createElement("div");
        feedbackItem.classList.add("feedback-item");
        feedbackItem.innerHTML = `
            <h3>${name} (${email})</h3>
            <p class="rating">${'&#9733;'.repeat(rating)}</p>
            <p>${message}</p>
        `;
        feedbackResults.appendChild(feedbackItem);

        // Reset form setelah submit
        document.getElementById("feedbackForm").reset();
        ratingInput.value = ""; // Reset rating
        stars.forEach(star => star.classList.remove("selected")); // Hapus kelas "selected" dari bintang
    });
});

