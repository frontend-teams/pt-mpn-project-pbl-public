import CardServices from "../components/CardServices";
import usePageMeta from "../utils/usePageMeta";

export default function Layanan() {
  usePageMeta({
    title: "Layanan PT MPN — Pelatihan, Konsultansi, Sertifikasi, Manpower",
    description:
      "Layanan kami mencakup pelatihan nonformal, pengembangan SDM, pelatihan keterampilan kerja, jasa sertifikasi, dan penyediaan SDM.",
    ogType: "website",
  });
  return <CardServices />;
}
