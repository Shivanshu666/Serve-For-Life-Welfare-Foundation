// app/work/[slug]/page.tsx
import Program1Component from "@/components/work/Program1";
import Program2Component from "@/components/work/Program2";

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === "Program1") {
    return (
      <main className="min-h-screen bg-slate-100 py-20 px-4">
        <Program1Component />
      </main>
    );
  }

  if (slug === "Program2") {
    return (
      <main className="min-h-screen bg-slate-100 py-20 px-4">
        <Program2Component />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 py-20 px-4 text-center">
      <h1 className="text-3xl font-bold text-red-500">Program not found</h1>
    </main>
  );
}