import DoctorDetailsClient from "@/components/DoctorDetailsClient/DoctorDetailsClient";
const DoctorDetailsPage = async ({ params }) => {
  const p = await params;
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/allDoctors/${p.id}`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return <DoctorDetailsClient data={data} />;
};

export default DoctorDetailsPage;
