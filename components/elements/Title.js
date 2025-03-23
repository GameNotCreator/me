import { useSectionInView } from "@/libs/hooks";

export default function Title({ children, id, attribute }) {
  const { ref } = useSectionInView(id);

  return (
    <h3
      ref={ref}
      className={`text-2xl font-semibold uppercase ${attribute}`}
    >
      {children}
    </h3>
  );
}
