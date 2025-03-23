import { useSectionInView } from "@/libs/hooks";

export default function SectionHeading({ children, id }) {
  const { ref } = useSectionInView(id);

  return (
    <h2
      ref={ref}
      className="mt-6 h-10 text-center text-4xl font-semibold uppercase"
    >
      {children}
    </h2>
  );
}
