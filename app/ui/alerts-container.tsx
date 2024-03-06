import { Alert } from "./alert";

export function AlertsContainer() {
  return (
    <div className="absolute right-4 z-20 flex flex-col gap-2.5">
      <Alert type="error" text="Alert message!" />
      <Alert type="error" text="Alert message!" />
      <Alert type="error" text="Alert message!" />
    </div>
  );
}
