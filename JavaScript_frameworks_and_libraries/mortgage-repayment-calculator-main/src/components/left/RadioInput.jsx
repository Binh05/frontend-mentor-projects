import clsx from "clsx";

export default function ({ label, id, name, getData }) {
  return (
    <div className="w-full">
      <input
        className="peer hidden"
        name={`${name}`}
        type="radio"
        id={`${id}`}
        value={`${label}`}
        onChange={getData}
      />
      <label
        className={clsx(
          "border-Slate-300 text-Slate-900 relative block cursor-pointer rounded-sm border-2 pl-8 font-bold",
          "py-2 before:absolute before:top-[50%] before:left-4 before:size-2 before:translate-[-35%] before:translate-y-[-50%] before:rounded-full before:outline-1 before:outline-offset-3 before:content-['']",
          "peer-checked:before:bg-primary peer-checked:before:outline-primary peer-checked:border-primary peer-checked:bg-primary-checked",
          "hover:border-primary",
        )}
        htmlFor={`${id}`}
      >
        {label}
      </label>
    </div>
  );
}
