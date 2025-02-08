export async function CounterDisplay({ data: counter, error }: { data?: bigint; error: Error | null }) {
  return (
    <div className="text-lg flex gap-2 justify-center items-center">
      <span className="font-bold">Checked in builders count:</span>

      {error && <span className="text-error">Error!</span>}

      {counter && <span>{counter.toString()}</span>}
    </div>
  );
}
