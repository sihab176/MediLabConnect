import DoctorDetailsClient from "@/components/DoctorDetailsClient/DoctorDetailsClient";
import ReviewSection from "@/components/ReviewSection/ReviewSection";
const DoctorDetailsPage = async ({ params }) => {
  const p = await params;
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/allDoctors/${p.id}`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return (
    <>
      <DoctorDetailsClient data={data} />

      <ReviewSection doctorId={p}/>
    </>
  );
};

export default DoctorDetailsPage;
