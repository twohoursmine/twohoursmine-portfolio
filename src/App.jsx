import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import DataImage, { listTools, listProyek } from "./data";
import SecureVideo from "./SecureVideo";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-white font-poppins">
      {/* 🔹 Hero Section (Beranda) */}
      <div id="beranda" className="hero container mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 px-6 py-12">
        <div
          className="sm:w-1/2 text-center sm:text-left animate__animated animate__fadeInUp animate__delay-3s"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-6 bg-zinc-800 w-fit mx-auto sm:mx-0 p-4 rounded-2xl shadow-md">
            <img
              src={DataImage.HeroImage}
              alt="Hero"
              className="w-10 h-10 rounded-md object-cover"
            />
            <q>Kerja keras dulu, nikmat kemudian.🔥</q>
          </div>

          <h1
            className="text-4xl sm:text-5xl font-bold mb-4 leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Saya Andika, Video Editor & Visual Storyteller.
          </h1>

          <p
            className="text-base leading-relaxed mb-6 opacity-70"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Saya mempunyai ketertarikan dalam bidang editing video, dan
            sinematografi. Berpengalaman dalam proyek dokumenter, konten digital,
            dan produksi kreatif, dengan fokus pada storytelling visual serta
            kualitas hasil yang maksimal.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="./assets/Andika-Pialanta-Sembiring-CV.pdf"
              download=""
              className="bg-blue-700 px-6 py-4 rounded-2xl hover:bg-blue-500 w-full sm:w-auto text-center font-medium transition-colors"
            >
              DOWNLOAD CV <i className="ri-download-line ri-lg align-middle"></i>
            </a>

            <a
              href="#project"
              className="bg-zinc-700 px-6 py-4 rounded-2xl hover:bg-zinc-500 w-full sm:w-auto text-center font-medium transition-colors"
            >
              LIHAT PROJECT{" "}
              <i className="ri-arrow-down-line ri-lg align-middle"></i>
            </a>
          </div>
        </div>

        <div
          className="sm:w-1/2 flex justify-center sm:justify-end mt-8 sm:mt-0"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img
            src={DataImage.HeroImage}
            alt="Andika"
            className="w-32 sm:w-56 md:w-72 rounded-2xl shadow-lg object-cover animate__animated animate__fadeInUp animate__delay-4s"
            loading="lazy"
          />
        </div>
      </div>

      {/* 🔹 Tentang Section */}
      <div id="tentang" className="tentang mt-32 py-10">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
        >
          <img
            src={DataImage.HeroImage}
            alt="image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            Saya Andika Pialanta Sembiring, seorang Video Editor dan Content
            Creative yang fokus pada storytelling visual. Bagi saya, editing
            bukan hanya soal teknis, tapi tentang bagaimana gambar, suara, dan
            ritme bisa menyatu untuk menghidupkan emosi dan pesan dari sebuah
            cerita...
          </p>

          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  50<span className="text-violet-500">+</span>
                </h1>
                <p>Project Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  5<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Tools Section */}
        <div id="tools" className="tools mt-32">
          <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">
            Tools yang dipakai
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50 mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Berikut ini beberapa tools yang biasa saya pakai untuk mengedit video:
          </p>

          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool, index) => (
              <div
                key={tool.id}
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-b-md hover:bg-zinc-800 group"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded-md"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <h5 className="text-sm opacity-70">{tool.ket}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Project Section */}
      <div id="project" className="container mx-auto px-6">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up">
          Project
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Berikut ini beberapa project yang saya kerjakan :
        </p>
        <div className="project-box grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {listProyek.map((proyek, index) => (
            <div
              key={proyek.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-zinc-800 overflow-hidden rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-all duration-300"
            >
              <SecureVideo
                src={proyek.video}
                title={proyek.nama}
                description={proyek.desk}
                tools={proyek.tools}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Kontak Section */}
      <div id="contact" className="contact mt-32 py-16 bg-zinc-800/60">
        <div
          className="container mx-auto px-6 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-4xl font-bold mb-4">Kontak</h1>
          <p className="text-base/loose opacity-60 mb-10">
            Tertarik untuk berkolaborasi atau punya proyek yang ingin dikerjakan
            bersama? Jangan ragu untuk menghubungi saya.
          </p>

          <div
            className="max-w-lg mx-auto bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-700"
            data-aos="fade-up"
          >
            <form
              action="https://formsubmit.co/andikapialantasembiring@gmail.com"
              method="POST"
              className="flex flex-col gap-5"
            >
              <input type="text" name="name" placeholder="Nama lengkap" required className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"/>
              <input type="email" name="email" placeholder="Alamat email" required className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"/>
              <textarea name="message" placeholder="Pesan kamu..." rows="5" required className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"></textarea>
              <button type="submit" className="bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-semibold transition-all shadow-md">
                Kirim Pesan
              </button>
            </form>

            <div className="mt-10 flex items-center justify-center gap-5 opacity-80">
              <a href="mailto:andikapialantasembiring@gmail.com" className="hover:text-blue-400 transition">
                <i className="ri-mail-line text-2xl"></i>
              </a>
              <a href="https://www.instagram.com/twohoursmine/" target="_blank" className="hover:text-pink-400 transition">
                <i className="ri-instagram-line text-2xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/andika-pialanta-sembiring-aa5511207/" target="_blank" className="hover:text-blue-500 transition">
                <i className="ri-linkedin-line text-2xl"></i>
              </a>
              <a href="https://wa.me/6283821873087" target="_blank" className="hover:text-green-400 transition">
                <i className="ri-whatsapp-line text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Footer dipanggil di sini */}
      <Footer />
    </div>
  );
}

export default App;
