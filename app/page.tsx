"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-lg font-bold">Siddesh Engineering Works</h1>
            <p className="text-xs uppercase tracking-[0.25em] text-blue-700">
              Precision. Performance. Reliability.
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#home" className="hover:text-blue-700">Home</a>
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#products" className="hover:text-blue-700">Products</a>
            <a href="#capabilities" className="hover:text-blue-700">Capabilities</a>
            <a href="#clients" className="hover:text-blue-700">Clients</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="h-0.5 w-6 bg-neutral-900"></span>
            <span className="h-0.5 w-6 bg-neutral-900"></span>
            <span className="h-0.5 w-6 bg-neutral-900"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-neutral-200 bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href="#home" className="hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#products" className="hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>Products</a>
              <a href="#capabilities" className="hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>Capabilities</a>
              <a href="#clients" className="hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>Clients</a>
              <a href="#contact" className="hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
      <section id="home" className="relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-machine.png"
            alt="Laser cutting machine"
            fill
            className="object-cover scale-105"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
          <div className="max-w-2xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Advanced Sheet Metal Manufacturing
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Engineering Precision.
              <br /> Powered by Advanced Manufacturing.
            </h2>

            <p className="mt-6 text-neutral-200">
              Delivering high-quality sheet metal solutions including enclosures,
              counters, and shelving with advanced laser cutting, punching, bending,
              and fabrication capabilities.
            </p>


            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="rounded-full bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
              >
                Get a Quote
              </a>

              <a
                href="#products"
                className="rounded-full border border-white px-6 py-3 text-white transition hover:bg-white hover:text-black"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>


      <motion.section
        id="about"
        className="scroll-mt-36 mx-auto max-w-7xl px-6 py-20"
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex h-[400px] items-center justify-center rounded-3xl bg-gradient-to-br from-neutral-200 via-neutral-100 to-blue-100">
            <div className="max-w-sm text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                Since 2019
              </p>
              <h4 className="mt-4 text-2xl font-bold text-neutral-900">
                Built on Experience. Focused on Precision.
              </h4>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                Factory images will be added here later for a more authentic
                company presentation.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
              About Us
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              Complete Sheet Metal Solutions Under One Roof
            </h3>

            <p className="mt-6 text-neutral-600">
              Siddesh Engineering Works is a fast-growing manufacturing company
              established in 2019, backed by over 25 years of industry
              experience.
            </p>

            <p className="mt-4 text-neutral-600">
              Located in Asangaon, we serve clients across Mumbai, Thane, Navi
              Mumbai, Nashik, and surrounding industrial regions with reliable
              and high-quality fabrication services.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="services"
        className="scroll-mt-36 mx-auto max-w-7xl px-6 py-20"
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            Our Services
          </p>

          <h3 className="mt-4 text-center text-3xl font-bold">
            Precision Manufacturing Services
          </h3>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-2 hover:shadow-xl">
              <div className="text-3xl">⚡</div>
              <h4 className="mt-4 font-semibold">Laser Cutting</h4>
              <p className="mt-2 text-sm text-neutral-600">
                High precision cutting for sheet metal.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-2 hover:shadow-xl">
              <div className="text-3xl">⚙️</div>
              <h4 className="mt-4 font-semibold">CNC Punching</h4>
              <p className="mt-2 text-sm text-neutral-600">
                Efficient industrial punching solutions.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-2 hover:shadow-xl">
              <div className="text-3xl">📐</div>
              <h4 className="mt-4 font-semibold">Bending</h4>
              <p className="mt-2 text-sm text-neutral-600">
                Accurate press brake bending.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-2 hover:shadow-xl">
              <div className="text-3xl">🔩</div>
              <h4 className="mt-4 font-semibold">Fabrication</h4>
              <p className="mt-2 text-sm text-neutral-600">
                Custom-built metal solutions.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="products"
        className="scroll-mt-36 mx-auto max-w-7xl px-6 py-20"
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            Our Products
          </p>

          <h3 className="mt-4 text-center text-3xl font-bold">
            Custom-Built Industrial Products
          </h3>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="overflow-hidden bg-neutral-100">
                <Image
                  src="/images/enclosure.png"
                  alt="Metal enclosure"
                  width={900}
                  height={900}
                  className="h-[260px] w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold">Enclosures</h4>
                <p className="mt-2 text-sm text-neutral-600">
                  Precision-built metal enclosures for industrial and commercial applications.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="overflow-hidden bg-neutral-100">
                <Image
                  src="/images/counter.png"
                  alt="Counter"
                  width={900}
                  height={900}
                  className="h-[260px] w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold">Counters</h4>
                <p className="mt-2 text-sm text-neutral-600">
                  Custom-designed counters built for retail and functional workspace environments.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="overflow-hidden bg-neutral-100">
                <Image
                  src="/images/shelving.png"
                  alt="Shelving"
                  width={900}
                  height={900}
                  className="h-[260px] w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold">Shelving</h4>
                <p className="mt-2 text-sm text-neutral-600">
                  Durable shelving solutions for storage, display, and organized industrial use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="capabilities"
        className="scroll-mt-36 bg-neutral-50 py-20"
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            Our Capabilities
          </p>

          <h3 className="mt-4 text-center text-3xl font-bold">
            Advanced Machinery. Reliable Output.
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-center text-neutral-600">
            Our manufacturing setup is built to handle precision sheet metal
            work with consistency, speed, and quality across different
            industrial requirements.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-4 text-3xl">🔷</div>
              <h4 className="text-xl font-semibold">CNC Fiber Laser Cutting</h4>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Two machines with 1kW and 3kW capacity, capable of cutting up to
                18mm mild steel, 10mm stainless steel, and 5mm aluminum.
              </p>
              <p className="mt-4 text-sm font-medium text-blue-700">
                Sheet size: 1500mm × 3000mm
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-4 text-3xl">📏</div>
              <h4 className="text-xl font-semibold">CNC Press Brake</h4>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Equipped with Amada press brakes for accurate and repeatable
                bending operations across industrial fabrication projects.
              </p>
              <p className="mt-4 text-sm font-medium text-blue-700">
                Models: 100T/3000 and 30/1250
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-4 text-3xl">⚙️</div>
              <h4 className="text-xl font-semibold">CNC Turret Punching Machine</h4>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Designed for efficient punching and fabrication workflows with
                precision, consistency, and dependable production quality.
              </p>
              <p className="mt-4 text-sm font-medium text-blue-700">
                Muratech Centrum 2000
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="clients"
        className="scroll-mt-36 py-20"
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            Trusted By
          </p>

          <h3 className="mt-4 text-center text-3xl font-bold">
            Clients Across Multiple Industries
          </h3>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Andritz Euroslot India Pvt. Ltd.",
              "Arneg India Pvt. Ltd.",
              "Shubham Aqualink India Pvt. Ltd.",
              "Venera Biotech Systems Pvt. Ltd.",
              "Delta Aircon Services Pvt. Ltd.",
              "Technocraft Industries Ltd.",
              "Kruger Ventilation Industries (India) Pvt. Ltd.",
              "Furniturecraft",
              "Safe A & T Technology Pvt. Ltd.",
            ].map((client) => (
              <div
                key={client}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <p className="font-medium text-neutral-800">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="scroll-mt-36 bg-neutral-50 py-20"
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                Contact Us
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                Let’s Discuss Your Requirement
              </h3>

              <p className="mt-6 max-w-xl leading-8 text-neutral-600">
                Reach out to Siddesh Engineering Works for custom fabrication,
                sheet metal solutions, and manufacturing support tailored to
                your business needs.
              </p>

              <div className="mt-8 space-y-5">
                <div>
                  <p className="text-sm font-semibold text-neutral-900">Contact Person</p>
                  <p className="mt-1 text-sm text-neutral-600">Dayanand Patil</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-neutral-900">Phone</p>
                  <p className="mt-1 text-sm text-neutral-600">+91 93241 13190</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-neutral-900">Email</p>
                  <p className="mt-1 text-sm text-neutral-600">
                    siddheshengg@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-neutral-900">Address</p>
                  <p className="mt-1 text-sm leading-7 text-neutral-600">
                    5A, Phase 1, Rukma Industrial Premises, Behind Food Hub,
                    Mumbai Nashik Highway, Asangaon, Tal. Shahpur, Dist. Thane
                    421601, Maharashtra
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="tel:+919324113190"
                    className="rounded-full bg-blue-700 px-6 py-3 text-white transition hover:bg-blue-800"
                  >
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/919324113190"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-neutral-300 px-6 py-3 transition hover:border-blue-700 hover:text-blue-700"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <h4 className="text-xl font-semibold">Send an Inquiry</h4>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="mt-6 space-y-5"
              >
                <input type="hidden" name="access_key" value="9ee615db-a483-48e6-92e7-42d8fd33356c" />
                <input type="hidden" name="subject" value="New Inquiry - Siddesh Engineering Works" />
                <input type="hidden" name="from_name" value="Siddesh Engineering Website" />

                <div>
                  <label className="mb-2 block text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    name="Full Name"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Phone Number</label>
                  <input
                    type="text"
                    name="Phone Number"
                    placeholder="Enter your phone number"
                    className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Requirement</label>
                  <textarea
                    rows={5}
                    name="Requirement"
                    placeholder="Tell us about your requirement"
                    className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-700 px-6 py-3 font-medium text-white transition hover:bg-blue-800"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>
    </main >
  );
}