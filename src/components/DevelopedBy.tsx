const DevelopedBy = () => {
  return (
    <div className="mb-8 font-mono text-neutral-10 text-xs text-center">
      <span>
        Developed by{" "}
        <a
          href="https://github.com/flamrdevs"
          className="inline-block transition duration-300 hover:-translate-y-px outline-none hover:text-primary-10 focus-visible:text-primary-10"
          target="_blank"
          aria-label="Developer"
        >
          {" "}
          flamrdevs
        </a>
      </span>
    </div>
  );
};

export default DevelopedBy;
