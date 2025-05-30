interface StatusBadgeProps {
  status: "Approved" | "Pending";
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const color =
    status === "Approved"
      ? "bg-green-100 text-green-600"
      : "bg-yellow-100 text-yellow-600";

  return (
    <span className={`text-xs px-3 py-1 rounded-full font-medium ${color}`}>
      {status}
    </span>
  );
};
