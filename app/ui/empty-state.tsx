export function EmptyState({ text }: { text: string }) {
  return (
    <div className="col-start-1 col-end-5 self-center justify-self-center text-center text-lg font-bold">
      <p>{text}</p>
    </div>
  );
}
