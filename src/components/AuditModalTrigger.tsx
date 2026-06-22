"use client";
import { useModal } from "@/context/ModalContext";

export function AuditModalTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { openModal } = useModal();
  return (
    <button className={className} onClick={openModal}>
      {children}
    </button>
  );
}
