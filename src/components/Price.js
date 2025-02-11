function Price({ currency, num, numSize }) {
  return (
    <>
      {currency}
      <span className={numSize}>
        {num} <span className="text-sm">per entry</span>
      </span>
    </>
  );
}

export default Price;
