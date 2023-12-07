export interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose?: () => void;
}
const Toast = ({ message, type, onClose }: ToastProps) => {
  return (
    <div
      className={`${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } text-white font-bold px-4 py-2 rounded`}
    >
      <p>{message}</p>
      <button className="ml-2 text-white font-bold" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Toast;
