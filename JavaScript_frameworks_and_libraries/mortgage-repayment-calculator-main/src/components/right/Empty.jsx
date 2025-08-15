export default function Empty() {
  return (
    <div className="grid h-full place-content-center">
      <img
        className="mx-auto"
        src="/assets/images/illustration-empty.svg"
        alt="icon result empty"
      />
      <p className="text-White my-4 text-xl font-bold">Results shown here</p>
      <p className="text-Slate-500">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}
