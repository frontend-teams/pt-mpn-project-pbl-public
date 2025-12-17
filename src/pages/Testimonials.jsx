import { useEffect, useState } from "react";
import { fetchTestimonials } from "../utils/publicApi";
import { resolveUploadUrl } from "../utils/imageUrl";

const Testimonials = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchTestimonials();
        const mapped = (res || []).map((t, idx) => ({
          id: t.id || idx,
          nama: t.nama,
          pesan: t.pesan_testi || t.testimoni,
          foto: resolveUploadUrl(t.foto),
        }));
        setItems(mapped);
      } catch (error) {
        console.warn("Gagal memuat testimoni", error);
      }
    };
    load();
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title">Testimoni</h2>
          <p className="text-muted">Apa kata peserta dan klien kami</p>
        </div>

        <div className="row g-4">
          {items.length === 0 ? (
            <div className="text-center text-muted">Belum ada testimoni.</div>
          ) : (
            items.map((item) => (
              <div className="col-md-4" key={item.id}>
                <div className="card h-100 shadow-sm">
                  {item.foto && (
                    <img
                      src={item.foto}
                      alt={item.nama}
                      className="card-img-top"
                      style={{ height: 200, objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{item.nama}</h5>
                    <p className="card-text text-muted">{item.pesan}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
